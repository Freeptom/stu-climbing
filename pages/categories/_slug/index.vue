<template>
  <div class="page-component">
    <h1>Has category of {{ $route.params.slug }}</h1>

    <ActivitiesList :activity-items="activities" />
  </div>
</template>

<script>
import { gql } from 'nuxt-graphql-request'
import ActivitiesList from '~/components/ActivitiesList.vue'

export default {
  name: 'Index',
  components: {
    ActivitiesList,
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
    const idsGroup =
      activitiesFromCategory.categoryCollection.items[0].linkedFrom
        .activityCollection.items

    idsGroup.forEach((id) => ids.push(id.sys.id))

    const getById = gql`
      query ($ids: [String]) {
        activityCollection(where: { sys: { id_in: $ids } }) {
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
    const variables = { ids }

    const activities = await $graphql.default.request(getById, variables)

    return { activitiesFromCategory, activities }
  },
}
</script>

<style scoped>
.margin-bottom {
  margin-bottom: 1rem;
}
</style>
