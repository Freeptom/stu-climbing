<template>
  <app-section on-light full-width right-bleed>
    <div class="max-container image-section">
      <app-cta hide-button on-light>
        <template #byline>From the feed</template>
        <template #body><p>Where to next?</p></template>
      </app-cta>
      <ul class="media-scroller snaps-inline">
        <div
          v-for="post in imagePosts"
          :key="post.id"
          class="media-scroller__element"
        >
          <img :src="post.media_url" height="120" width="120" />
        </div>
      </ul>
    </div>
  </app-section>
</template>

<script>
import AppCta from '~/components/ui/AppCta.vue'
import AppSection from '~/components/layout/AppSection.vue'
export default {
  name: 'ImagesSection',
  components: {
    AppCta,
    AppSection,
  },
  props: {
    posts: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    imagePosts() {
      return this.posts.data.filter((el) => {
        return el.media_type === 'IMAGE' || el.media_type === 'CAROUSEL_ALBUM'
      })
    },
  },
}
</script>
