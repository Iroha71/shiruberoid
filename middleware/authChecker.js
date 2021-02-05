import urls from '~/const/urls'

export default function({route, store, redirect}) {
  if (!isFreePage(route.path) && !store.getters['authInfo/access_token']) {
    let query = {}
    Object.assign(query, { error: 1 })
    redirect(301, urls.signin, query)
  }
}

/**
 * 認証不要のページを定義する
 * @param {string} curpath - 現在のページ
 * @return {string} - 現在のページが認証不要かどうか
 */
const isFreePage = (curpath) => {
  const FREE_PAGE = [urls.signin, urls.usernew]
  return FREE_PAGE.includes(curpath)
}