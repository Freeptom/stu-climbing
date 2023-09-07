<template>
  <footer class="footer">
    <p>&copy; Crag Stories</p>
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
    <script
      id="CookieDeclaration"
      src="https://consent.cookiebot.com/992fd377-f74c-4232-9237-c90a462fe821/cd.js"
      type="text/javascript"
    ></script>
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
