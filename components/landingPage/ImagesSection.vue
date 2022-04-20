<template>
  <app-section on-light full-width>
    <div class="max-container image-reel row">
      <app-cta hide-button on-light>
        <template #byline>From the feed</template>
        <template #body><p>Where to next?</p></template>
      </app-cta>
      <ul class="scrolling-wrapper">
        <div
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
            <img style="height: 240px; width: 240px" :src="post.media_url" />
          </template>
          <template v-else>
            <video style="height: 240px; width: 240px" controls>
              <source :src="post.media_url" />
            </video>
          </template>
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
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
