<template>
  <div>
    <div v-if="title" class="app-list-header">
      <h2 class="app-list-header__title">{{ title }}</h2>
      <hr class="app-list-header__title-decoration" />
    </div>
    <div class="app-list-intro"><slot name="intro"></slot></div>
    <ul class="app-list" role="list">
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
    items: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
