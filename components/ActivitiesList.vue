<template>
  <div class="navigation">
    <nav>
      <ul role="menu" class="articles">
        <Activity
          v-for="activity in activityItems.activityCollection.items"
          :key="activity.title"
          :activity="activity"
        />
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
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1rem;
  justify-items: center;
}
</style>
