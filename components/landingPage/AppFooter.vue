<template>
  <footer class="footer">
    <p>&copy; Crag Stories</p>
    <div class="footer__links">
      <ul>
        <li v-for="(value, name, index) in contactDetails" :key="index">
          <a :href="value" target="_blank">
            <img
              :src="require(`~/assets/images/icons/${name}.svg`)"
              :alt="name"
            />
          </a>
        </li>
      </ul>
      <NuxtLink to="/cookies">Cookies</NuxtLink>
    </div>
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
