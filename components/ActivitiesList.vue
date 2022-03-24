<template>
  <div class="navigation">
    <nav>
      <ul role="menu" class="activity-list">
        <activity-card
          v-for="activity in activityItems.activityCollection.items"
          :key="activity.title"
          :activity="activity"
        />
      </ul>
    </nav>
  </div>
</template>

<script>
import ActivityCard from '~/components/ActivityCard.vue'

export default {
  name: 'ActivitiesList',
  components: {
    ActivityCard,
  },
  props: {
    activityItems: {
      type: Object,
      required: true,
    },
  },
}
</script>
