<template>
  <div class="vform">
    <form class="section">
      <div class="titlebox">
        <p>{{ title }}</p>
      </div>
      <slot />
      <b-field class="has-text-centered">
        <b-button @click="igniteEvent()">{{ btnMsg }}</b-button>
      </b-field>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: false,
      default: 'auto'
    },
    height: {
      type: String,
      required: false,
      default: 'auto'
    },
    bClr: {
      type: String,
      required: false
    },
    isCenter: {
      type: Boolean,
      required: false,
      default: false
    },
    btnMsg: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    igniteEvent() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.vform {
  position: relative;
  border: solid 2px $accent-color;
  background: $main-color;
  padding: 0.375rem;
  &::before, &::after {
    position: absolute;
    content: "";
    background-color: $main-color;
  }
  &::before {
    top: -2px;
    bottom: -2px;
    left: 1rem;
    right: 1rem;
  }
  &::after {
    top: 1rem;
    bottom: 1rem;
    left: -2px;
    right: -2px;
  }
}
form {
  border: solid 2px $accent-color;
  position: relative;
  height: 100%;
  z-index: 1;
  button {
    border-radius: 0;
    color: $accent-color;
    background-color: transparent;
    border: solid 2px $accent-color;
    &:hover {
      transition: 0.5s;
      color: $accent-color2;
      border-color: $accent-color2;
      filter: drop-shadow(1px 1px 2px $accent-color2) drop-shadow( -1px -1px 2px $accent-color2);
    }
  }
}
.titlebox {
  width: 50%;
  background-color: $accent-color;
  text-align: center;
  font-size: 1.2rem;
  color: $main-color;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
}
</style>