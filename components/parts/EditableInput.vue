<template>
<!-- 編集機能付きInput -->
  <div>
    <b-field :label="label" v-if="isEditMode">
      <b-input type="text" v-model="inputedValue" />
      <b-button type="button" @click="switchEditMode(false)">＋追加</b-button>
      <slot></slot>
    </b-field>
    <p v-else>
      {{ inputedValue }}
      <b-button @click="switchEditMode(true)"><img src="/icons/link" alt=""></b-button>
    </p>
  </div>
</template>

<script>
import { getters } from '~/store/authInfo'
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
    }
  },
  data() {
    return {
      isEditMode: true,
    }
  },
  methods: {
    switchEditMode(willEdit) {
      this.isEditMode = willEdit

    }
  },
  computed: {
    inputedValue: {
      get() { return this.value },
      set(value) { this.$emit('input', value) }
    }
  }
}
</script>