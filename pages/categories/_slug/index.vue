<template>
  <div class="page-component">
    <div
      v-for="(link, index) in categoryList.categoryCollection.items"
      :key="index"
      class="article"
    >
      <ul>
        <li
          v-for="activity in link.linkedFrom.activityCollection.items"
          :key="activity.text"
        >
          {{ activity.text }}
        </li>
      </ul>
      <!-- <img
          :src="`${activity.image.url}?w=500`"
          :alt="`${activity.image.description}`"
          class="article__image"
        /> -->

      <!-- <ul class="chips">
          <li
            v-for="(category, index) in activity.categoryReferencesCollection
              .items"
            :key="index"
            class="chip"
          >
            <nuxt-link :to="'/categories/' + category.slug" role="menuitem">
              {{ category.categoryName }}
            </nuxt-link>
          </li>
        </ul> -->
    </div>
  </div>
</template>

<script>
import { gql } from 'nuxt-graphql-request'

export default {
  name: 'Index',
  async asyncData({ $graphql, params }) {
    const query = gql`
      query {
        categoryCollection(where: { slug: "${params.slug}" }, limit: 10) {
          items {
            linkedFrom {
              activityCollection {
                total
                items {
                  text
                }
              }
            }
          }
        }
      }
    `
    const categoryList = await $graphql.default.request(query)
    console.log(categoryList.categoryCollection)
    return { categoryList }
  },
}
</script>

<style scoped>
.margin-bottom {
  margin-bottom: 1rem;
}
</style>
