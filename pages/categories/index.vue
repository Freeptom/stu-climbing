<template>
  <section class="container">
    <nuxt-link
      v-for="category in categories.categoryCollection.items"
      :key="category.categoryName"
      :to="'/categories/' + category.slug"
      role="menuitem"
    >
      {{ category.categoryName }}
    </nuxt-link>
  </section>
</template>
<script>
import { gql } from 'nuxt-graphql-request'

export default {
  async asyncData({ $graphql }) {
    const query = gql`
      query {
        categoryCollection {
          items {
            categoryName
            slug
          }
        }
      }
    `
    const categories = await $graphql.default.request(query)
    return { categories }
  },
}
</script>
