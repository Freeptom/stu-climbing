<template>
  <div class="landing-bg">
    <app-nav />
    <intro-section />
  </div>
</template>

<script>
import AppNav from '~/components/layout/AppNav'
import IntroSection from '~/components/pages/LandingPage/Sections/IntroSection'

export default {
  name: 'Home',
  components: {
    AppNav,
    IntroSection,
  },
  layout: 'landing-page',
}
</script>
