<template>
  <section class="container">
    <div v-for="kanban in kanbans" :key="kanban.id">
      {{ kanban.title }}
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({app}) {
    const kanbans = await app.$api.kanban.index()
    console.log(kanbans);
    return { kanbans: kanbans.data }
  }
}
</script>