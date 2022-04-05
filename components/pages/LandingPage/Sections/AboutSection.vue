<template>
  <app-section>
    <app-cols>
      <img
        class="app-cols__img"
        src="~/assets/images/stu-climbing.png"
        alt="Stu passing rope down to help a climber below him"
      />
      <app-list title="A little about Stu" :intro="intro" :items="about" />
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
      intro: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span class="standout">Nec id quam</span> ornare dictum risus, massa nunc rutrum. Iaculis varius sed feugiat at. Nisi vitae eu, etiam magna <span class="standout">ornare dictum risus</span> ornare mattis. Tempor, interdum aenean phasellus <span class="standout">tortor donec</span> quam venenatis volutpat.</p>`,

      about: [
        {
          message: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span class="standout">Nec id quam</span> ornare dictum risus, massa nunc rutrum. Iaculis varius sed feugiat at. Nisi vitae eu, etiam magna <span class="standout">ornare dictum risus</span> ornare mattis. Tempor, interdum aenean phasellus <span class="standout">tortor donec</span> quam venenatis volutpat.</p>`,
        },
        { message: `<h1>test2</h1>` },
        { message: `test3` },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
