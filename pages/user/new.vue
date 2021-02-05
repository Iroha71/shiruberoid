<template>
  <div class="columns">
    <vform class="column is-4-desktop is-offset-4" height="90vh" title="REGIST" btn-msg="登録" @click="signup()">
      <b-field label="メールアドレス" :message="errors('email')" :type="{ 'is-danger': errors('email') }">
        <b-input type="text" v-model="email" />
      </b-field>
      <b-field label="パスワード" :message="errors('password')" :type="{ 'is-danger': errors('password') }">
        <b-input type="password" v-model="password" />
      </b-field>
      <b-field label="呼び名" :message="errors('name')" :type="{ 'is-danger': errors('name') }">
        <b-input type="text" maxlength="10" v-model="name" />
      </b-field>
    </vform>
  </div>
</template>

<script>
import vform from '~/components/Form'
import { mapActions, mapGetters } from 'vuex'
import urls from '~/const/urls'
export default {
  components: {
    vform
  },

  data() {
    return {
      email: '',
      password: '',
      name: '',
    }
  },
  
  methods: {
    ...mapActions('authInfo', ['setAuthInfo']),
    async signup() {
      const result = await this.$api.user.create(this.email, this.password, this.name)
      if (result.status == 200) {
        this.setAuthInfo(result.headers)
        this.$router.push(urls.top)
      }
    }
  },

  computed: {
    ...mapGetters('errors', ['errors']),
  }
}
</script>