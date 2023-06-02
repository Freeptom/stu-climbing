<template>
  <footer class="footer">
    <p>&copy; Crag Stories</p>
    <ul>
      <li v-for="(value, name, index) in contactDetails" :key="index">
        <a :href="value" target="_blank">
          <img :src="require(`~/assets/images/icons/${name}.svg`)" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
import { contactDetails } from '~/constants/constants'
export default {
  name: 'AppFooter',
  data() {
    return {
      contactDetails,
    }
  },
}
</script>
