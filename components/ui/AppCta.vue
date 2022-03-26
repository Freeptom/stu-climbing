<template>
  <div class="cta">
    <app-byline><slot name="byline"></slot></app-byline>
    <p class="cta__body"><slot name="body"></slot></p>
    <app-button>Contact Now</app-button>
  </div>
</template>

<script>
import AppByline from '@/components/ui/AppByline.vue'
import AppButton from '@/components/ui/AppButton.vue'
export default {
  name: 'AppCta',
  components: { AppByline, AppButton },
}
</script>
