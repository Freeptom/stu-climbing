<template>
  <div class="wrapper">
    <app-nav />
    <div class="h-50">
      <script
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/992fd377-f74c-4232-9237-c90a462fe821/cd.js"
        type="text/javascript"
      ></script>
    </div>
    <app-footer />
  </div>
</template>

<script>
import AppNav from '~/components/layout/AppNav'
import AppFooter from '~/components/landingPage/AppFooter'

export default {
  name: 'Home',
  components: {
    AppNav,
    AppFooter,
  },
  layout: 'landing-page',
  head() {
    return {
      title: 'Crag Stories - Cookies',
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
