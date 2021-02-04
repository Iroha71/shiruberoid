export default $axios => resources => ({
  signin(email, password, passwordConfirmation) {
    const userInfo = { email: email, password: password, password_confirmation: passwordConfirmation }
    return $axios.post(`${ resources }/sign_in`, userInfo)
  },
  
  signout() {
    return $axios.delete(`${ resources }/sign_out`)
  },

  create(param) {
    return $axios.post(`${ resources }`, param)
  },

  update(param) {
    return $axios.put(`${ resources }`, param)
  },

  changePassword(password, passwordConfirmation) {
    passwordParam = { password: password, password_confirmation: passwordConfirmation }
    return $axios.put(`${ resources }/password`, passwordParam)
  },

  resetPassword(email) {
    resetInfo = { email: email, redirect_url: process.env.CLIENT_URL + 'login' }
    return $axios.post(`${ resources }/password`, resetInfo)
  }
})