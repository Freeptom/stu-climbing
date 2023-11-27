<template>
  <div class="landing-bg wrapper">
    <app-nav />
    <intro-section />
    <about-section />
    <div class="white-bg full-bleed">
      <images-section :posts="posts" />
      <cta-section />
    </div>
    <split-section />
    <app-footer />
  </div>
</template>

<script>
import AppNav from '~/components/layout/AppNav'
import IntroSection from '~/components/landingPage/IntroSection'
import AboutSection from '~/components/landingPage/AboutSection'
import ImagesSection from '~/components/landingPage/ImagesSection'
import CtaSection from '~/components/landingPage/CtaSection'
import SplitSection from '~/components/landingPage/SplitSection'
import AppFooter from '~/components/landingPage/AppFooter'
import { instaDetails } from '~/static/insta'

export default {
  name: 'Home',
  components: {
    AppNav,
    IntroSection,
    AboutSection,
    ImagesSection,
    CtaSection,
    SplitSection,
    AppFooter,
  },
  layout: 'landing-page',
  async asyncData({ $config: { inToken }, $axios }) {
    const url = `${instaDetails.RootUrl}/${instaDetails.UserId}/media?access_token=${inToken}&fields=id,caption,media_type,media_url,timestamp,permalink&size=s`
    const posts = await $axios.$get(url)
    return { posts }
  },
  head() {
    return {
      title: 'Crag Stories',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Take your stories to new heights with Crag Stories. Explore thrilling adventures guided by outdoor instructor, Stuart Serrechia. From beginners to seasoned adventures, discover tailored experiences that blend skill-building with breathtaking views. Unleash your inner adventurer today!',
        },
      ],
    }
  },
}
</script>
