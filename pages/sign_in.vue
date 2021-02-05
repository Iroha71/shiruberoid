<template lang="html">
  <div class="columns">
    <vform class="column is-4 is-offset-4"
          title="SIGN IN" 
          :is-center="true" 
          btn-msg="sign in" 
          @click="signIn()">
      <p class="has-text-danger" v-if="$route.query.error">{{ messages.signinFaild }}</p>
      <b-field label="mail adress">
        <b-input v-model="email" />
      </b-field>
      <b-field label="password">
        <b-input type="password" v-model="password"></b-input>
      </b-field>
      <template v-slot:footer>
        <b-field>
          <a :href="urls.usernew">新規登録</a>
        </b-field>
      </template>
    </vform>
  </div>
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
      messages: messages,
      urls: urls,
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