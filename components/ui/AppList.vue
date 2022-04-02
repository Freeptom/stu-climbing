<template>
  <div>
    <div v-if="title" class="app-list-header">
      <h2 class="app-list-header__title">{{ title }}</h2>
      <hr class="app-list-header__title-decoration" />
    </div>
    <ul class="app-list">
      <li v-for="item in items" :key="item.message">{{ item.message }}</li>
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
