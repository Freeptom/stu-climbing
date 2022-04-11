<template>
  <app-section>
    <app-cta is-block>
      <template #title>block title</template>
      <template #body><p>test test</p></template>
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
