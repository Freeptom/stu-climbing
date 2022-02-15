<!-- <template>
  <!-- <div>{{ activity }}</div> -->
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

<style lang="scss" scoped>
.card {
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  color: var(--clr-neutral-100);
  position: relative;
  display: grid;
  max-width: 35ch;
  transition: transform 500ms ease;
}

.card:hover,
.card:focus-within {
  transform: scale(1.05);
  cursor: pointer;
}

.card__thumb,
.card__content {
  grid-area: 1/-1;
}

.card__content {
  --padding: 1rem;
  padding: var(--padding);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background: linear-gradient(
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 0.2) 25%,
    hsl(0 0% 0% / 1)
  );
}

.card__title {
  margin-bottom: 0.5rem;
  position: relative;
  font-size: 1rem;
  width: max-content;
  &::after {
    content: '';
    height: 4px;
    position: absolute;
    left: calc(1rem * -1);
    bottom: 0;
    width: calc(100% + var(--padding));
    background: var(--clr-accent-400);
    transition: transform 500ms ease;
    transform-origin: left;
  }
}

.card:hover .card__title::after,
.card:focus-within .card__title::after {
  transform: scaleX(1);
}

.card__image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.card__button {
  cursor: pointer;
  border-radius: 0.25rem;
  display: inline-block;
  text-decoration: none;
  color: var(--clr-neutral-900);
  background: var(--clr-accent-400);
  padding: 0.5em 1em;
  &:hover,
  &:focus {
    background: var(--clr-neutral-100);
  }
}

@media (hover) {
  .card__content {
    transform: translateY(20%);
    transition: 500ms ease;
  }
  .card:hover .card__content,
  .card:focus-within .card__content {
    transform: translateY(0);
    transition-delay: 250ms;
  }
  .card:focus-within .card__content {
    transition-duration: 0ms;
  }
  .card__content > *:not(.card__title) {
    opacity: 0;
    transition: opacity 500ms linear;
  }
  .card:hover .card__content > *:not(.card-title),
  .card:focus-within .card__content > *:not(.card-title) {
    opacity: 1;
    transition-delay: 500ms;
  }
  .card:focus-within .card__content *:not(.card-title) {
    transition-duration: 150ms;
  }
  .card__title::after {
    transform: scaleX(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
    transition-delay: 0ms !important;
  }
}

.chips {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem 0;
}

.chip {
  text-transform: uppercase;
  display: inline-block;
  font-size: 0.66rem;
  border-radius: 1.5rem;
  border: 1px solid var(--clr-accent-400);
  letter-spacing: 0.8px;
  padding: 0.25rem 1rem;
  color: var(--clr-accent-400);
  font-weight: 600;
  margin-right: 0.875rem;
  text-decoration: none;
  list-style: none;
  a {
    color: inherit;
    text-decoration: none;
  }
  // transition: 1;
  &:hover {
    background: var(--clr-accent-400);
    color: var(--clr-neutral-900);
  }
}
</style> -->
