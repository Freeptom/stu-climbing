<template>
  <app-section>
    <app-cta>
      <template #byline>A rock climbing instructor and mountaineer</template>
      <template #body
        >Reach <span class="cta__body--alt">new heights</span> with
        Stu</template
      >
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

<style lang="scss" scoped></style>
