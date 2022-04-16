<template>
  <app-section on-light full-width>
    <div class="max-container image-reel">
      <app-cta hide-button on-light>
        <template #byline>From the feed</template>
        <template #body><p>Where to next?</p></template>
      </app-cta>
      {{ posts }}
      <!-- <ul class="scrolling-wrapper">
        <li
          v-for="post in posts.data"
          :key="post.id"
          class="scrolling-wrapper__card"
        >
          <template
            v-if="
              post.media_type === 'IMAGE' ||
              post.media_type === 'CAROUSEL_ALBUM'
            "
          >
            <img style="height: 320px; width: 320px" :src="post.media_url" />
          </template>
          <template v-else>
            <video style="height: 320px; width: 320px" controls>
              <source :src="post.media_url" />
            </video>
          </template>
        </li>
      </ul> -->
    </div>
  </app-section>
</template>

<script>
import { instaDetails } from '~/static/insta'
import AppCta from '~/components/ui/AppCta.vue'
import AppSection from '~/components/layout/AppSection.vue'
export default {
  name: 'ImagesSection',
  components: {
    AppCta,
    AppSection,
  },
  async asyncData({ $config: { inToken }, $axios }) {
    const url = `${instaDetails.RootUrl}/${instaDetails.UserId}/media?access_token=${inToken}&fields=id,caption,media_type,media_url,timestamp`
    const posts = await $axios.$get(url)
    return { posts }
  },
}
</script>
