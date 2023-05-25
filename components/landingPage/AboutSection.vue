<template>
  <app-section class="section--about">
    <app-cols>
      <img
        class="app-cols__img"
        src="~/assets/images/stu-climbing.png"
        alt="Stu passing rope down to help a climber below him"
      />
      <app-list>
        <template #intro
          ><p>
            Behind Crag Stories is Stu Serrechia. Former librarian turned
            outdoor instructor, Stu has seen how stories help to shape the way
            we see ourselves and the world.
          </p>
          <p>
            As a qualified climbing instructor and developing walking guide, he
            can help you find new stories to add to your own, at climbing walls,
            crags and hills.
          </p></template
        >
      </app-list>
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
}
</script>
