<template>
  <section
    class="section"
    :class="{
      'full-bleed': fullBleed,
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
    fullBleed: {
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
