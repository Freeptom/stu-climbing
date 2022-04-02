<template>
  <app-section>
    <app-cols>
      <img
        class="app-cols__img"
        src="~/assets/images/stu-climbing.png"
        alt="Stu passing rope down to help a climber below him"
      />
      <app-list title="A little about Stu" :items="about" />
    </app-cols>
  </app-section>
</template>

<script>
import AppSection from '~/components/layout/AppSection.vue'
import AppCols from '~/components/layout/AppCols.vue'
import AppList from '~/components/ui/AppList.vue'
export default {
  name: 'IntroSection',
  components: {
    AppSection,
    AppCols,
    AppList,
  },
  data() {
    return {
      about: [{ message: `test1` }, { message: `test2` }, { message: `test3` }],
    }
  },
}
</script>

<style lang="scss" scoped></style>
