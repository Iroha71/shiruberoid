import buildApi from '~/apis/repository'
import buildAuthApi from '~/apis/auth'

export default(app, inject) => {
  const API = buildApi(app.$axios)
  const AUTH_API = buildAuthApi(app.$axios)
  const apis = {
    user: AUTH_API(process.env.BASE_URL + 'auth'),
    kanban: API(process.env.BASE_URL + 'kanban')
  }

  inject('api', apis)
}