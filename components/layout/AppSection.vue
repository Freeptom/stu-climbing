<template>
  <section
    class="section"
    :class="{ 'max-container': hasMaxWidth, 'section--light-bg': onLight }"
  >
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
    onLight: {
      default: false,
      type: Boolean,
    },
  },
}
</script>
