<template>
  <div>
    <h4>Raw data</h4>
    <!-- <textarea v-model="postToString" style="width: 100%; height: 400px">
    </textarea> -->
    <ul style="list-style: none; margin: 0px; padding: 0px">
      <li v-for="post in posts.data" :key="post.id" style="color: white">
        <template
          v-if="
            post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM'
          "
        >
          <img style="height: 320px" :src="post.media_url" />
        </template>
        <template v-else>
          <video style="height: 240px; width: 320px" controls>
            <source :src="post.media_url" />
          </video>
        </template>
        <div>
          <b>Caption {{ post.caption }}</b>
          <p>Caption {{ post.id }}</p>
          <p>Media Type {{ post.media_type }}</p>
          <p>Media URL {{ post.media_url }}</p>
        </div>
      </li>
    </ul>
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
