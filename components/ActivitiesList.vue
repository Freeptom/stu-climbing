<template>
  <div class="navigation">
    <nav>
      <ul role="menu" class="articles">
        <div
          v-for="activity in activityItems.activityCollection.items"
          :key="activity.title"
          class="article"
        >
          <Activity :activity="activity" />
        </div>
      </ul>
    </nav>
  </div>
</template>

<script>
import Activity from '~/components/Activity.vue'

export default {
  name: 'ActivitiesList',
  components: {
    Activity,
  },
  props: {
    activityItems: {
      type: Object,
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
</style>
