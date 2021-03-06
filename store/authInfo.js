export const state = () => ({
  access_token: '',
  client: '',
  uid: ''
})

export const mutations = {
  setAuthInfo(state, infos) {
    state.access_token = infos.access_token ? infos.access_token : infos['access-token']
    state.client = infos.client
    state.uid = infos.uid
  }
}

export const actions = {
  setAuthInfo(context, authInfos) {
    context.commit('setAuthInfo', authInfos)
  }
}

export const getters = {
  access_token: (state) => state.access_token,
  client: (state) => state.client,
  uid: (state) => state.uid
}