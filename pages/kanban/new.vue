<template>
  <section class="container">
    <div class="columns">
      <div class="column is-3 is-hidden-mobile"></div>
      <Vform title="ADD KANBAN"
        class="column is-6"
        :is-center="true"
        btn-msg="作成する"
        @click="createKanban()">
        <b-field label="カテゴリ">
          <b-select placeholder="カテゴリを選択" v-model="kanban.category_id">
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
            <option :value="-1">
              カテゴリを作成
            </option>
          </b-select>
        </b-field>
        <b-field label="カンバン名">
          <b-input type="text" :maxlength="limits.kanban.title" v-model="kanban.title" />
        </b-field>
        <b-field label="通知日">
          <b-datepicker locale="ja-JP"
              v-model="selectedDate"
              placeholder="通知時間を選択"
              icon="calendar-today" />
          <b-clockpicker placeholder="通知時間を選択"
              v-model="selectedTime"
              icon="clock"
              hour-format="24"
              locale="ja-JP" />
        </b-field>
        <DTextarea :maxlength="limits.kanban.desc" v-model="kanban.desc"></DTextarea>
      </Vform>
    </div>
  </section>
</template>

<script>
import Vform from '~/components/Form'
import strlimits from '~/const/strlimits'
import DTextarea from '~/components/DescTextarea'
import urls from '~/const/urls'
const CATEGORY_CREATEMODE = -1
export default {
  components: {
    Vform,
    DTextarea,
  },
  async asyncData({app}) {
    const categories = await app.$api.category.index()
    return { categories: categories.data }
  },
  data() {
    return {
      kanban: {
        title: '',
        desc: '',
        notify_at: '',
        category_id: null,
      },
      selectedDate: new Date(),
      selectedTime: new Date(),
      limits: strlimits,
    }
  },
  methods: {
    /**
     * カテゴリを新規作成するかどうか確認する
     */
    checkCategoryCreateMode() {
      this.$buefy.dialog.prompt({
          message: '作成するカテゴリ名を入力',
          inputAttrs: {
            type: 'text',
            placeholder: 'カテゴリ名を入力',
            maxlength: strlimits.category.name,
          },
          onConfirm: (value) => this.createCategory(value)
        })
      if (this.kanban.category_id == CATEGORY_CREATEMODE) {
        
      }
    },
    async createCategory(name) {
      const newCategory = await this.$api.category.create({ name: name })
      this.categories.push(newCategory.data)
      this.kanban.category_id = newCategory.data.id
    },
    async createKanban() {
      this.kanban.notify_at = this.convertDateFormat(this.selectedDate, this.selectedTime)
      const newKanban = await this.$api.kanban.create(this.kanban)
      if (newKanban.status == 200) {
        this.$router.push(urls.kanban)
      }
    },
    /**
     * 日付と時間をバックエンドの形式に合わせる
     * @param {Date} -- 入力された日付
     * @param {Time} -- 入力された時間
     * @return {String} -- バックエンドの日付形式に変換された日付
     */
    convertDateFormat(date, time) {
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const hour = time.getHours()
      const minute = time.getMinutes()
      return `${ year }-${ month }-${ day } ${hour}:${ minute }`
    },
  },
  watch: {
    'kanban.category_id'() {
      if (this.kanban.category_id == CATEGORY_CREATEMODE) {
        this.checkCategoryCreateMode()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.columns {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 1rem;
}
.field {
  color: $main-color;
}
</style>