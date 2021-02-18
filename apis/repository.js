export default $axios => resource => ({
  index() {
    return $axios.get(process.env.BASE_URL + resource)
  },

  index(param) {
    return $axios.get(process.env.BASE_URL + resource, { param: param })
  },

  create(param) {
    return $axios.post(process.env.BASE_URL + resource, { [resource]: param })
  },

  show(id) {
    return $axios.get(`${ process.env.BASE_URL + resource }/${ id }`)
  },

  update(id, param) {
    return $axios.put(`${ process.env.BASE_URL + resource }/${ id }`, { [resource]: param })
  },

  delete(id) {
    return $axios.delete(`${ process.env.BASE_URL + resource }/${ id }`)
  }
})