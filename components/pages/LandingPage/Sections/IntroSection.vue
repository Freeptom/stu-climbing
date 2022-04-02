<template>
  <app-section class="section section--intro">
    <app-cta class="cta--main">
      <template #byline>A rock climbing instructor and mountaineer</template>
      <template #body
        ><h1>
          Reach <span class="cta__body--alt">new heights</span> with Stu
        </h1></template
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
