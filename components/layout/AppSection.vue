<template>
  <section
    class="section"
    :class="{
      'max-container': !fullWidth,
      'section--light-bg': onLight,
      'section--right-bleed': rightBleed,
    }"
  >
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'AppSection',
  props: {
    fullWidth: {
      default: false,
      type: Boolean,
    },
    onLight: {
      default: false,
      type: Boolean,
    },
    rightBleed: {
      default: false,
      type: Boolean,
    },
  },
}
</script>
