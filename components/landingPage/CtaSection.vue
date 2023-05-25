<template>
  <app-section on-light full-bleed>
    <app-cta is-block>
      <template #title>Your next adventure is waiting for you</template>
      <template #body
        ><p>Get in touch with Stu to take the first step</p></template
      >
    </app-cta>
  </app-section>
</template>

<script>
import AppCta from '~/components/ui/AppCta.vue'
import AppSection from '~/components/layout/AppSection.vue'
export default {
  name: 'CtaSection',
  components: {
    AppCta,
    AppSection,
  },
}
</script>
