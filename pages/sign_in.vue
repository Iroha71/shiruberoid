<template>
  <form>
    <p v-if="$route.query.error==1">{{ messages.signinFaild }}</p>
    <input type="text" v-model="email">
    <input type="password" v-model="password">
    <button type="button" @click="signIn()"></button>
  </form>
</template>

<script>
import messages from '~/const/messages'
import urls from '~/const/urls'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: '',
      messages: messages
    }
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