<template>
  <div class="navigation">
    <nav>
      <ul role="menu" class="articles">
        <li
          v-for="(activity, index) in activityItems"
          :key="index"
          class="article"
        >
          <p>{{ activity.fields.Text }}</p>
          <img
            :src="`${activity.fields.image.fields.file.url}?w=500`"
            :alt="`${activity.fields.image.fields.description}`"
            class="article__image"
          />

          <ul class="chips">
            <li
              v-for="(category, index) in activity.fields.categoryReferences"
              :key="index"
              class="chip"
            >
              <nuxt-link
                :to="'/categories/' + category.fields.slug.trim()"
                role="menuitem"
              >
                {{ category.fields.categoryName }}
              </nuxt-link>
            </li>
          </ul>

          <p>{{ activity.fields }}</p>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'ActivitiesList',
  props: {
    activityItems: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.articles {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  h2 {
    min-height: 50px;
  }
}

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
