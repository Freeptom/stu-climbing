<template>
  <section class="container">
    <ActivitiesList :activity-items="activities" />
  </section>
</template>
<script>
import { gql } from 'nuxt-graphql-request'
import ActivitiesList from '~/components/ActivitiesList.vue'

export default {
  components: {
    ActivitiesList,
  },
  async asyncData({ $graphql }) {
    const query = gql`
      query {
        activityCollection {
          items {
            text
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
    const activities = await $graphql.default.request(query)
    return { activities }
  },
}
</script>
