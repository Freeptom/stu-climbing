<template>
  <div class="app-list">
    <h2 class="app-list__title">{{ title }}</h2>
    <ul class="app-list__list" role="list">
      <li v-for="item in items" :key="item.text" :class="customClass">
        {{ item.text }}
      </li>
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
    customClass: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
