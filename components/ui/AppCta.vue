<template v-if="isBlock">
  <div class="cta-block">
    <app-byline><slot name="title"></slot></app-byline>
    <div class="cta-block__body">
      <slot name="body"></slot>
    </div>
    <app-button><slot name="cta">Contact Now</slot></app-button>
  </div>
</template>

<template v-else>
  <div class="cta" :class="{ 'cta--main': isMain }">
    <app-byline><slot name="byline"></slot></app-byline>
    <div class="cta__body">
      <slot name="body"></slot>
    </div>
    <app-button><slot name="cta">Contact Now</slot></app-button>
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
  },
}
</script>
