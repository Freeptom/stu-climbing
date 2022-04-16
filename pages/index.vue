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
import IntroSection from '~/pages/landingPage/Sections/IntroSection'
import AboutSection from '~/pages/landingPage/Sections/AboutSection'
import ImagesSection from '~/pages/landingPage/Sections/ImagesSection'
import CtaSection from '~/pages/landingPage/Sections/CtaSection'

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
