<template>
  <nav class="landing-nav">
    <app-logo />
  </nav>
</template>

<script>
import AppLogo from '~/components/layout/AppLogo.vue'

export default {
  name: 'AppNav',
  components: {
    AppLogo,
  },
}
</script>
