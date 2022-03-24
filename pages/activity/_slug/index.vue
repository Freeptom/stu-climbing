<template>
  <div>
    <activity :activity="activity.activityCollection.items[0]" />
  </div>
</template>

<script>
import { gql } from 'nuxt-graphql-request'
import Activity from '~/components/Activity.vue'
export default {
  name: 'Index',
  components: { Activity },

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
