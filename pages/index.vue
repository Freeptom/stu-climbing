<template>
  <div class="landing-bg">
    <app-nav />
    <intro-section />
    <about-section />
    <images-section />
    <cta-section />
  </div>
</template>

<script>
import AppNav from '~/components/layout/AppNav'
import IntroSection from '~/components/pages/LandingPage/Sections/IntroSection'
import AboutSection from '~/components/pages/LandingPage/Sections/AboutSection'
import ImagesSection from '~/components/pages/LandingPage/Sections/ImagesSection'
import CtaSection from '~/components/pages/LandingPage/Sections/CtaSection'

export default {
  name: 'Home',
  components: {
    AppNav,
    IntroSection,
    AboutSection,
    ImagesSection,
    CtaSection,
  },
  layout: 'landing-page',
}
</script>
