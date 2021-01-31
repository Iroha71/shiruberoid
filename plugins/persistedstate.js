import createState from 'vuex-persistedstate'

export default({store}) => {
  onNuxtReady(() => {
    createState({
      key: 'shiruberoid',
      paths: ['authInfo']
    })(store)
  })
}