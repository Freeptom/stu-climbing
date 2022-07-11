<template>
  <footer class="footer">
    <p>&copy; Crag Stories</p>
    <ul>
      <li v-for="(icon, index) in icons" :key="index">
        <a :href="icon.link" target="_blank">
          <img :src="require(`~/assets/images/icons/${icon.name}.svg`)" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      icons: [
        { name: 'phone', link: '' },
        { name: 'email', link: '' },
        { name: 'facebook', link: '' },
        {
          name: 'instagram',
          link: 'https://www.instagram.com/beta_stu/?hl=en',
        },
        { name: 'twitter', link: '' },
      ],
    }
  },
}
</script>
