<template>
  <div class="card">
    <div class="card__thumb">
      <img
        :src="`${activity.image.url}?w=500`"
        :alt="`${activity.image.description}`"
        class="card__image"
      />
    </div>
    <div class="card__content">
      <h2 class="card__title">{{ activity.text }}</h2>
      <ul class="chips">
        <nuxt-link
          v-for="(category, index) in activity.categoryReferencesCollection
            .items"
          :key="index"
          class="chip"
          :to="'/categories/' + category.slug"
          role="menuitem"
        >
          <li>
            {{ category.categoryName }}
          </li>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activity: {
      type: Object,
      required: true,
    },
  },
}
</script>
