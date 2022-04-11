<template>
  <app-section>
    <app-cta is-block>
      <template #title
        >Lorem ipsum dolor sit amet,
        <span class="standout">consectetur adipiscing</span> elit.</template
      >
      <template #body><p>test test</p></template>
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
