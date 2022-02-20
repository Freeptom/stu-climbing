<template>
  <div>
    <h4>Raw data</h4>
    <!-- <textarea v-model="postToString" style="width: 100%; height: 400px">
    </textarea> -->
    <ul class="posts">
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
        <div style="max-width: 320px">
          <b>{{ truncate(post.caption) }}</b>
          <!-- <p>ID {{ post.id }}</p>
          <p>Media Type {{ post.media_type }}</p>
          <p>Media URL {{ post.media_url }}</p> -->
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

  methods: {
    truncate(input) {
      return input.length > 200 ? `${input.substring(0, 200)}...` : input
    },
  },
}
</script>

<style scoped lang="scss">
.posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0 auto;
  padding: 0px;
  gap: 4rem;
  max-width: 1200px;
}
</style>
