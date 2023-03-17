<template>
  <app-section on-light right-bleed>
    <div class="image-container wrapper">
      <app-cta hide-button on-light>
        <template #byline>From the feed</template>
        <template #body><p>Where to next?</p></template>
      </app-cta>
      <ul class="media-scroller snaps-inline full-bleed">
        <div
          v-for="post in imagePosts"
          :key="post.id"
          class="media-scroller__element"
        >
          <img
            v-if="post.media_url"
            :src="post.media_url"
            height="160"
            width="160"
          />
        </div>
      </ul>
    </div>
    <!-- <button type="button" @click="scroll">Scroll</button> -->
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
    // visibleElements() {
    //   return this.imagePosts.filter((child) => {
    //     const childRect = child.getBoundingClientRect()
    //     return rect.left <= childRect.left && rect.right >= childRect.right
    //   })
    // },
  },
  methods: {
    scroll() {
      const scroller = this.$el.querySelector('.media-scroller')
      scroller.scrollLeft = 90
    },
  },
}
</script>
