<template>
  <section :class="{ 'max-container': hasMaxWidth }">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'AppSection',
  props: {
    hasMaxWidth: {
      default: true,
      type: Boolean,
    },
  },
}
</script>
