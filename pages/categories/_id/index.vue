<template>
  <div class="page-component">
    <p>{{ activity }}</p>
  </div>
</template>

<script>
import { createClient } from '../../../plugins/contentful'
const contentfulClient = createClient()

export default {
  name: 'Index',
  asyncData({ env, params }) {
    return contentfulClient
      .getEntries({
        content_type: 'activity',
        'fields.categoryReferences.sys.contentType.sys.id': 'category',
        'fields.slug[match]': 'hiking',
      })
      .then((activity) => {
        return {
          activity: activity.items,
        }
      })
      .catch(console.error)
  },
}
</script>
