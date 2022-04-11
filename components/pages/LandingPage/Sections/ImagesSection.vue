<template>
  <app-section on-light>
    <app-cta hide-cta on-light>
      <template #byline>From the feed</template>
      <template #body><p>Where to next?</p></template>
    </app-cta>
  </app-section>
</template>

<script>
import AppCta from '~/components/ui/AppCta.vue'
import AppSection from '~/components/layout/AppSection.vue'
export default {
  name: 'ImagesSection',
  components: {
    AppCta,
    AppSection,
  },
}
</script>
