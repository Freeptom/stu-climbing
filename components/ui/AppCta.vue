<template>
  <div v-if="isBlock" class="cta-block">
    <h2 class="cta-block__title"><slot name="title"></slot></h2>
    <div class="cta-block__body">
      <slot name="body"></slot>
    </div>

    <app-button v-if="!hideCta" alt
      ><slot name="cta">Contact Now</slot></app-button
    >
  </div>

  <div v-else class="cta" :class="{ 'cta--main': isMain }">
    <app-byline><slot name="byline"></slot></app-byline>
    <div
      class="cta__body"
      :class="{ 'cta__body--on-light': onLight, 'cta__body--main': isMain }"
    >
      <slot name="body"></slot>
    </div>
    <app-button v-if="!hideCta"><slot name="cta">Contact Now</slot></app-button>
  </div>
</template>

<script>
import AppByline from '@/components/ui/AppByline.vue'
import AppButton from '@/components/ui/AppButton.vue'
export default {
  name: 'AppCta',
  components: { AppByline, AppButton },
  props: {
    isMain: {
      type: Boolean,
      default: false,
    },
    isBlock: {
      type: Boolean,
      default: false,
    },
    hideCta: {
      type: Boolean,
      default: false,
    },
    onLight: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
