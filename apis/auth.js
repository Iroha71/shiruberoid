export default $axios => resources => ({
  signin(email, password, passwordConfirmation) {
    const userInfo = { email: email, password: password, password_confirmation: passwordConfirmation }
    return $axios.post(process.env.BASE_URL + resources + '/sign_in', userInfo)
  },
  
  signout() {
    return $axios.delete(process.env.BASE_URL + resources + '/sign_out')
  },

  create(email, password, name) {
    return $axios.post(process.env.BASE_URL + resources, { email: email, password: password, name: name })
  },

  update(param) {
    return $axios.put(process.env.BASE_URL + resources, param)
  },

  changePassword(password, passwordConfirmation) {
    passwordParam = { password: password, password_confirmation: passwordConfirmation }
    return $axios.put(process.env.BASE_URL + resources + '/password', passwordParam)
  },

  resetPassword(email) {
    resetInfo = { email: email, redirect_url: process.env.CLIENT_URL + 'login' }
    return $axios.post(process.env.BASE_URL + resources + '/password', resetInfo)
  }
})