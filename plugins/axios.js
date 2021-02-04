import urls from '~/const/urls'

let isSigninFaild = false
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
      if (isSigninFaild == false) {
        isSigninFaild = true
        query.error = '1'
        redirect(301, urls.signin, query)
      } else {
        isSigninFaild = false
        query.error = '2'
        redirect(301, urls.signin, query)
      }
    }
  })
}