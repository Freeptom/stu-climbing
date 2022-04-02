<template>
  <div class="landing-bg">
    <app-nav />
    <intro-section />
    <about-section />
  </div>
</template>

<script>
import AppNav from '~/components/layout/AppNav'
import IntroSection from '~/components/pages/LandingPage/Sections/IntroSection'
import AboutSection from '~/components/pages/LandingPage/Sections/AboutSection'

export default {
  name: 'Home',
  components: {
    AppNav,
    IntroSection,
    AboutSection,
  },
  layout: 'landing-page',
}
</script>
