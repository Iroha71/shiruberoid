<template>
  <!-- <b-field label="タスク/詳細" class="content"> -->
    <div class="desc-textarea content">
      <b-field label="詳細">
        <mavon-editor :toolbars="mdOptions"
            language="ja"
            :subfield="false"
            v-model="updateValue"
            style="min-height: 5rem; z-index: 0;"></mavon-editor>
      </b-field>
    </div>
</template>

<script>
import EditableInput from './parts/EditableInput.vue'
export default {
  props: {
    maxlength: {
      type: Number,
      require: true,
    },
    value: {
      type: String,
    }
  },
  data() {
    return {
      detail: '',
      mdOptions: {
        quote: true,
        ol: true,
        ul: true,
        code: true,
        link: true,
        preview: true,
      },
    }
  },
  components: {
    EditableInput,
  },
  computed: {
    updateValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.desc-textarea {
  padding: 0.25rem;
  border-top: solid 1px $accent-color;
  border-bottom: solid 1px $accent-color;
}
.field ::v-deep .field-body {
  color: white;
}
</style>