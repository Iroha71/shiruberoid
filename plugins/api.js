import buildApi from '~/apis/repository'
import buildAuthApi from '~/apis/auth'

export default(app, inject) => {
  const API = buildApi(app.$axios)
  const AUTH_API = buildAuthApi(app.$axios)
  const apis = {
    user: AUTH_API('auth'),
    kanban: API('kanban'),
    category: API('category'),
  }

  inject('api', apis)
}