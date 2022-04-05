<template>
  <div>
    <div v-if="title" class="app-list-header">
      <h2 class="app-list-header__title">{{ title }}</h2>
      <hr class="app-list-header__title-decoration" />
    </div>
    <div v-if="intro" class="app-list-intro" v-html="intro"></div>
    <ul class="app-list">
      <li v-for="item in items" :key="item.message" v-html="item.message"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppList',
  props: {
    title: {
      type: String,
      default: '',
    },
    intro: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
