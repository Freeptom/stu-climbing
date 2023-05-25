<template>
  <app-section class="section--intro">
    <app-cta is-main>
      <template #body><h1>Take your stories to new heights...</h1></template>
      <template #cta>Book your next adventure &#10141;</template>
    </app-cta>
  </app-section>
</template>

<script>
import AppCta from '~/components/ui/AppCta.vue'
import AppSection from '~/components/layout/AppSection.vue'
export default {
  name: 'IntroSection',
  components: {
    AppCta,
    AppSection,
  },
}
</script>
