<template>
  <div class="landing-bg">
    <app-nav />
    <intro-section />
    <about-section />
    <images-section :posts="posts" />
    <!-- <cta-section /> -->
  </div>
</template>

<script>
import AppNav from '~/components/layout/AppNav'
import IntroSection from '~/components/landingPage/IntroSection'
import AboutSection from '~/components/landingPage/AboutSection'
import ImagesSection from '~/components/landingPage/ImagesSection'
// import CtaSection from '~/components/landingPage/CtaSection'
import { instaDetails } from '~/static/insta'

export default {
  name: 'Home',
  components: {
    AppNav,
    IntroSection,
    AboutSection,
    ImagesSection,
    // CtaSection,
  },
  layout: 'landing-page',
  async asyncData({ $config: { inToken }, $axios }) {
    const url = `${instaDetails.RootUrl}/${instaDetails.UserId}/media?access_token=${inToken}&fields=id,caption,media_type,media_url,timestamp`
    const posts = await $axios.$get(url)
    return { posts }
  },
}
</script>
