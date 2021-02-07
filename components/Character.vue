<template>
  <div class="character" :style="{ height: height }" @click="igniteParentEvent()">
    <img src="/characters/akane/body.png" class="chara-body">
    <img :src="`/characters/akane/${emote}.png`" alt="" class="chara-mouse">
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      required: false,
      default: '80vh'
    },
    emote: {
      type: String,
      required: true
    }
  },
  methods: {
    igniteParentEvent() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.character {
  
  position: relative;
  height: 100%;
  width: 100%;
  img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    max-width: initial;
    &.chara-body {
      z-index: 0;
      filter: drop-shadow(4px 4px 0px $accent-color) drop-shadow(4px 4px 0px $base-color);
    }
    &.chara-mouse {
      z-index: 1;
    }
  }
}
</style>