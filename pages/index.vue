<template>
  <div>
    <app-nav />
    <intro-section />
  </div>
</template>

<script>
import AppNav from '~/components/LandingPage/AppNav'
import IntroSection from '~/components/LandingPage/Sections/IntroSection'

export default {
  name: 'Home',
  components: {
    AppNav,
    IntroSection,
  },
}
</script>
