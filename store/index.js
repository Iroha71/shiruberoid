export const actions = {
  /**
   * 初回表示ロード時にlocalStorageからvuexに値を転記する
   */
  nuxtClientInit({commit}, context) {
    const ls = JSON.parse(localStorage.getItem('shiruberoid')) || ""
    if (ls != "") {
      this.dispatch('authInfo/setAuthInfo', ls.authInfo, {root: true})
    }
  }
}