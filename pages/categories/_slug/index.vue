<template>
  <div class="page-component">
    {{ activitiesFromCategory }}
    {{ getActivities }}
  </div>
</template>

<script>
import { gql } from 'nuxt-graphql-request'
// import Activity from '~/components/Activity.vue'

export default {
  name: 'Index',
  components: {
    // Activity,
  },

  async asyncData({ $graphql, params }) {
    const actByCat = gql`
      query {
        categoryCollection(where: { slug: "${params.slug}" }, limit: 10) {
          items {
            linkedFrom {
              activityCollection {
                items {
                  sys {
                    id
                  }
                }
              }
            }
          }
        }
      }
    `
    const ids = []
    const activitiesFromCategory = await $graphql.default.request(actByCat)
    console.log(activitiesFromCategory)
    const idsGroup =
      activitiesFromCategory.categoryCollection.items[0].linkedFrom
        .activityCollection.items

    idsGroup.forEach((id) => ids.push(id.sys.id))

    const getById = gql`
      query {
        activityCollection(
          where: {
            sys: { id_in: ["1UG3IzwcFlFxTEdqQfisSU", "3r7elqOc3ahapygyHaoxfh"] }
          }
        ) {
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
              }
            }
          }
        }
      }
    `
    const getActivities = await $graphql.default.request(getById)

    return { activitiesFromCategory, getActivities }
  },
}
</script>

<style scoped>
.margin-bottom {
  margin-bottom: 1rem;
}
</style>
