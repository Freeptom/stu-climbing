<template>
  <nav class="landing-nav">
    <app-logo />
  </nav>
</template>

<script>
import AppLogo from '~/components/LandingPage/AppLogo.vue'

export default {
  name: 'AppNav',
  components: {
    AppLogo,
  },
}
</script>
