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
        { name: 'phone', link: 'tel:+447962225572' },
        { name: 'email', link: 'mailto:stuartgwetherell@gmail.com' },
        {
          name: 'instagram',
          link: 'https://www.instagram.com/crag_stories/?hl=en',
        },
      ],
    }
  },
}
</script>
