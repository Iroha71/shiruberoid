import urls from '~/const/urls'

let isSigninFaild = false
let hadError = false
export default ({app, redirect, $axios, route, store}) => {
  $axios.onRequest(config => {
    config.headers.common['access_token'] = store.getters['authInfo/access_token']
    config.headers.common['client'] = store.getters['authInfo/client']
    config.headers.common['uid'] = store.getters['authInfo/uid']
  }),

  $axios.onError(error => {
    if (error.response.status == 401) {
      let query = {}
      Object.assign(query, route.query)
      query.error = isSigninFaild ? 2 : 1
      isSigninFaild = !isSigninFaild
      redirect(301, urls.signin, query)
    } else if (error.response.status == 422) {
      store.dispatch('errors/setErrors', error.response.data.errors)
      let query = {}
      query.error = hadError ? 2 : 1
      hadError = !hadError
      redirect(301, route.path, query)
    }
  })
}