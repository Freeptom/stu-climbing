<template>
  <footer class="footer">
    <p>&copy; Rock Stories</p>
    <ul>
      <li v-for="(icon, index) in icons" :key="index">
        <img :src="require(`~/assets/images/icons/${icon}.svg`)" />
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      icons: ['phone', 'email', 'facebook', 'instagram', 'twitter'],
    }
  },
}
</script>
