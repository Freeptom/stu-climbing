<template>
  <div class="page-component">
    <!-- <div
      v-for="(link, index) in categoryList.categoryCollection.items"
      :key="index"
      class="article"
    >
      <ul>
        <div
          v-for="activityItem in link.linkedFrom.activityCollection.items"
          :key="activityItem.text"
        >
          {{ activityItem }}
        </div>
      </ul>
    </div> -->
    <div
      v-for="(item, index) in activitiesFromCategory.categoryCollection.items[0]
        .linkedFrom.activityCollection.items"
      :key="index"
    >
      {{ item.sys.id }}
    </div>
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
  props: {
    activity: {
      type: Object,
      required: true,
    },
  },
  async asyncData({ $graphql, params }) {
    const query = gql`
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
    // const query = gql`
    //   query {
    //     activityCollection(
    //       where: {
    //         sys: { id_in: ["1UG3IzwcFlFxTEdqQfisSU", "3r7elqOc3ahapygyHaoxfh"] }
    //       }
    //     ) {
    //       items {
    //         text
    //         image {
    //           title
    //           description
    //           contentType
    //           fileName
    //           size
    //           url
    //           width
    //           height
    //         }
    //         categoryReferencesCollection {
    //           items {
    //             categoryName
    //           }
    //         }
    //       }
    //     }
    //   }
    // `
    const activitiesFromCategory = await $graphql.default.request(query)
    console.log(activitiesFromCategory.categoryCollection)
    return { activitiesFromCategory }
  },
}
</script>

<style scoped>
.margin-bottom {
  margin-bottom: 1rem;
}
</style>
