<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header'
export default {
  components: {
    Header,
  }
}
</script>

<style lang="scss">
html {
  overflow-x: auto;
}
</style>