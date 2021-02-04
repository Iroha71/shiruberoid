export default $axios => resource => ({
  index() {
    return $axios.get(`${ resource }`)
  },

  create(param) {
    return $axios.post(`${ resource }`, param)
  },

  show(id) {
    return $axios.get(`${ resource }/${ param }`)
  },

  update(id, param) {
    return $axios.put(`${ resource }/${ id }`, param)
  },

  delete(id) {
    return $axios.delete(`${ resource }/${ id }`)
  }
})