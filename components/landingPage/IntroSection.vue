<template>
  <app-section class="section--intro">
    <app-cta is-main>
      <template #body><h1>Take your stories to new heights...</h1></template>
      <template #cta
        ><a :href="contactDetails.email" target="_blank"
          >Book your next adventure &#10141;</a
        >
      </template>
    </app-cta>
    <a
      href="https://wa.me/447962225572?text=I'm%20interested%20in%20your%20car%20for%20sale"
      >Whatsapp</a
    >
  </app-section>
</template>

<script>
import { contactDetails } from '~/constants/constants'
import AppCta from '~/components/ui/AppCta.vue'
import AppSection from '~/components/layout/AppSection.vue'
export default {
  name: 'IntroSection',
  components: {
    AppCta,
    AppSection,
  },
  data() {
    return {
      contactDetails,
    }
  },
}
</script>
