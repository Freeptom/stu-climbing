<template>
  <app-section class="section--intro">
    <app-cta is-main>
      <template #byline>A rock climbing instructor and mountaineer</template>
      <template #body
        ><h1>
          Reach <span class="standout">new heights</span> with Stu
        </h1></template
      >
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
