<template>
  <div>
    <p>{{ activity.text }}</p>
    <img
      :src="`${activity.image.url}?w=500`"
      :alt="`${activity.image.description}`"
      class="article__image"
    />

    <ul class="chips">
      <li
        v-for="(category, index) in activity.categoryReferencesCollection.items"
        :key="index"
        class="chip"
      >
        <nuxt-link :to="'/categories/' + category.slug" role="menuitem">
          {{ category.categoryName }}
        </nuxt-link>
      </li>
    </ul>
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

<style lang="scss">
.article {
  &__image {
    width: 100%;
    max-height: 200px;
    min-height: 200px;
    object-fit: cover;
  }
}

.chips {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
}

.chip {
  display: inline-block;
  font-size: 0.875rem;
  border-radius: 1.5rem;
  padding: 0.25rem 1rem;
  background-color: #eef1f3;
  color: #5f6970;
  font-weight: 600;
  margin-right: 0.875rem;
  a {
    color: inherit;
    text-decoration: none;
  }
}
</style>
