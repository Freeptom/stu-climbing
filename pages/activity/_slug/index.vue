<template>
  <div class="page-component">
    <activity-view :activity="activity.activityCollection.items[0]" />
  </div>
</template>

<script>
import { gql } from 'nuxt-graphql-request'
import ActivityView from '@/components/ActivityView.vue'
export default {
  name: 'Index',
  components: { ActivityView },

  async asyncData({ $graphql, params }) {
    const actBySlug = gql`
      query {
        activityCollection(where: { slug: "${params.slug}" }, limit: 10) {
          items {
            text
            slug
            image {
              title
              description
              contentType
              fileName
              size
              url
              width
              height
            }
            categoryReferencesCollection {
              items {
                categoryName
                slug
              }
            }
          }
        }
      }
    `
    const activity = await $graphql.default.request(actBySlug)
    return { activity }
  },
}
</script>

<style scoped>
h1 {
  font-size: 0.8rem;
  padding: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.margin-bottom {
  margin-bottom: 1rem;
}
</style>
