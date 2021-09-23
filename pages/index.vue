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
  async asyncData({ $graphql, params }) {
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
    console.log(activities.activityCollection)
    return { activities }
  },

  // asyncData({ env }) {
  //   return Promise.all([
  //     // fetch all blog posts sorted by creation date
  //     contentfulClient.getEntries({
  //       content_type: 'activity',
  //       order: '-sys.createdAt',
  //     }),
  //   ])
  //     .then(([activities]) => {
  //       console.log(activities.items)
  //       // return data that should be available
  //       // in the template
  //       return {
  //         activities: activities.items,
  //       }
  //     })
  //     .catch(console.error)
  // },
}
</script>
