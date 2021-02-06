<template>
  <b-navbar>
    <template #start>
      <b-navbar-dropdown label="カンバン機能">
        <b-navbar-item :href="urls.top">
          作成
        </b-navbar-item>
        <b-navbar-item :href="urls.top">
          編集/削除
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown label="ロイド機能">
        <b-navbar-item :href="urls.top">
          部屋
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
    <template #end>
      <b-navbar-item>
        設定
      </b-navbar-item>
      <b-navbar-item>
        ログアウト
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import urls from '~/const/urls'
export default {
  data() {
    return {
      urls: urls
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  background: rgb(39,39,41);
  background: linear-gradient(180deg, rgba(39,39,41,1) 45%, rgba(92,92,92,1) 100%);
  color: $accent-color;
  & ::v-deep .navbar-menu {
    background: rgb(39,39,41);
    background: linear-gradient(180deg, rgba(39,39,41,1) 45%, rgba(92,92,92,1) 100%);
  }
  & ::v-deep .navbar-link {
    color: $accent-color;
    &::after {
      border-color: $base-color;
    }
  }
  & ::v-deep .navbar-burger {
    color: $accent-color;
  }
}
</style>