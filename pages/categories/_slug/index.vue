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
    {{
      categoryList.categoryCollection.items[0].linkedFrom.activityCollection
        .items
    }}
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
    const categoryList = await $graphql.default.request(query)
    console.log(categoryList)
    return { categoryList }
  },
}
</script>

<style scoped>
.margin-bottom {
  margin-bottom: 1rem;
}
</style>
