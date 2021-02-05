export const state = {
  errors: {}
}

export const mutations = {
  setErrors(state, errors) {
    state.errors = errors
  }
}

export const actions = {
  setErrors(context, errors) {
    if (errors == undefined)
      return
    context.commit('setErrors', errors)
  }
}

export const getters = {
  errors: (state) => (param) => {
    return state.errors[param] ? state.errors[param] : ''
  },
}