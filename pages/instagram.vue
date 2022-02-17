<template>
  <div>
    <h4>Raw data</h4>
    <textarea v-model="postToString" style="width: 100%; height: 400px">
    </textarea>
  </div>
</template>

<script>
import { instaDetails } from '~/static/insta'
export default {
  async asyncData({ $config: { inToken }, $axios }) {
    const url = `${instaDetails.RootUrl}/${instaDetails.UserId}/media?access_token=${inToken}&fields=id,caption,media_type,media_url,timestamp`
    const posts = await $axios.$get(url)
    const postToString = JSON.stringify(posts, undefined, 4)
    return { posts, postToString }
  },
}
</script>
