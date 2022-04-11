<template>
  <component
    :is="type"
    :href="href"
    class="button"
    :class="{ 'button--alt': alt }"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
    alt: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    type() {
      if (this.href) {
        return 'a'
      }
      if (this.to) {
        return 'router-link'
      } else {
        return 'button'
      }
    },
  },
}
</script>
