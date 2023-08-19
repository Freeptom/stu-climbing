<template>
  <app-section on-light right-bleed>
    <div class="image-container wrapper">
      <app-cta hide-button on-light>
        <template #byline>From the feed</template>
        <template #body><p>Where to next?</p></template>
      </app-cta>
      <ul class="media-scroller snaps-inline">
        <li v-for="post in imagePosts" :key="post.id">
          <a
            :href="post.permalink"
            class="media-scroller__element"
            target="_blank"
          >
            <nuxt-img
              v-if="post.media_url"
              :src="post.media_url"
              height="200"
              width="200"
              :alt="post.caption"
              loading="lazy"
              :placeholder="[200, 200, 2]"
            />
          </a>
        </li>
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
  methods: {
    scroll() {
      const scroller = this.$el.querySelector('.media-scroller')
      scroller.scrollLeft = 90
    },
  },
}
</script>
