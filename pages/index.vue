<template>
  <section class="container">
    <ActivitiesList :activity-items="activities" />
    <div class="container__content">
      <h1>Please select a page you wish to view</h1>
      <p>
        This is a website for demo purposes of using Nuxt & Contentful together
      </p>
    </div>
  </section>
</template>
<script>
import { createClient } from '../plugins/contentful'
import ActivitiesList from '~/components/ActivitiesList.vue'
const contentfulClient = createClient()
export default {
  components: {
    ActivitiesList,
  },
  asyncData({ env }) {
    return Promise.all([
      // fetch all blog posts sorted by creation date
      contentfulClient.getEntries({
        content_type: 'activity',
        order: '-sys.createdAt',
      }),
    ])
      .then(([activities]) => {
        console.log(activities.items)
        // return data that should be available
        // in the template
        return {
          activities: activities.items,
        }
      })
      .catch(console.error)
  },
}
</script>
