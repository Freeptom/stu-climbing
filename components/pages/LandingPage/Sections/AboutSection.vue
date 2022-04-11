<template>
  <app-section>
    <app-cols>
      <img
        class="app-cols__img"
        src="~/assets/images/stu-climbing.png"
        alt="Stu passing rope down to help a climber below him"
      />
      <app-list title="How Stu can help you" :intro="intro" :items="about" />
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
      intro: `<p>Lorem ipsum dolor, consectetur adipiscing elit. <span class="standout standout--bold">Nec id quam</span> Nisi vitae eu, etiam magna <span class="standout standout--bold">ornare dictum risus</span> ornare mattis.Quam venenatis volutpat.</p>`,

      about: [
        {
          message: `<p>Consectetur adipiscing elit. <span class="standout standout--bold">Nec id quam</span> ornare dictum risus. Nisi vitae eu, etiam magna <span class="standout standout--bold">ornare dictum risus</span>.<span class="standout standout--bold">tortor donec</span> quam venenatis volutpat.</p>`,
        },
        {
          message: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis varius sed feugiat at. Etiam magna <span class="standout standout--bold">ornare dictum risus</span> ornare mattis.</p>`,
        },
        {
          message: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ornare dictum risus, massa nunc rutrum. Etiam magna <span class="standout standout--bold">ornare dictum risus</span> ornare mattis.`,
        },
      ],
    }
  },
}
</script>
