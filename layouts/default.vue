<template>
  <div>
    <Header />
    <div class="main-content">
      <nuxt />
    </div>
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
  .main-content {
    position: relative;
    z-index: 0;
    padding-top: 3.25rem;
  }
}
</style>