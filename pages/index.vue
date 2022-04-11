<template>
  <div class="landing-bg">
    <app-nav />
    <intro-section />
    <about-section />
    <images-section />
  </div>
</template>

<script>
import AppNav from '~/components/layout/AppNav'
import IntroSection from '~/components/pages/LandingPage/Sections/IntroSection'
import AboutSection from '~/components/pages/LandingPage/Sections/AboutSection'
import ImagesSection from '~/components/pages/LandingPage/Sections/ImagesSection'

export default {
  name: 'Home',
  components: {
    AppNav,
    IntroSection,
    AboutSection,
    ImagesSection,
  },
  layout: 'landing-page',
}
</script>
