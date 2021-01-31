import urls from '~/const/urls'

export default ({app, redirect, $axios, route, store}) => {
  $axios.onRequest(config => {
    config.headers.common['access_token'] = store.getters['authInfo/access_token']
    config.headers.common['client'] = store.getters['authInfo/client']
    config.headers.common['uid'] = store.getters['authInfo/uid']
  }),

  $axios.onError(error => {
    if (error.response.status == 401) {
      redirect(301, urls.signin, { error: '1' })
    }
  })
}