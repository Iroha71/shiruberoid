<template>
  <vform class="container" :is-center="true" btn-msg="Sign in" @click="signIn()">
    <p class="has-text-danger" v-if="$route.query.error">{{ messages.signinFaild }}</p>
    <b-field label="メールアドレス">
      <b-input v-model="email" />
    </b-field>
    <b-field label="パスワード">
      <b-input type="password" v-model="password"></b-input>
    </b-field>
  </vform>
</template>

<script>
import messages from '~/const/messages'
import urls from '~/const/urls'
import { mapActions } from 'vuex'
import vform from '~/components/Form'
export default {
  data() {
    return {
      email: '',
      password: '',
      messages: messages
    }
  },
  components: {
    vform
  },
  methods: {
    ...mapActions('authInfo', ['setAuthInfo']),
    async signIn() {
      const userInfo = await this.$api.user.signin(this.email, this.password, this.password)
      if (userInfo.status == 200) {
        this.setAuthInfo(userInfo.headers)
        this.$router.push(urls.top)
      }
    }
  }
}
</script>