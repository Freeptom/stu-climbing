<template>
  <section class="container">
    <div
      v-for="category in categories.categoryCollection.items"
      :key="category.categoryName"
    >
      <nuxt-link :to="'/categories/' + category.slug" role="menuitem">
        {{ category.categoryName }}
      </nuxt-link>
    </div>
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
