<template>
  <app-section class="section--about">
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
      intro: `<p>Yorkshire born and bred, Stu has spent the last decade supporting others to explore and <span class="standout standout--bold">conquer the best hikes and climbs </span> within God's Own Country and beyond &#8212; regardless of experience!
`,

      about: [
        {
          message: `<p>Stu's best memories of days out have been hanging off crags and on top of peaks, and he wants to help you create <span class="standout standout--bold">unforgettable experiences</span> too. Whether you're an experienced climber hoping to <span class="standout standout--bold">improve on your technique</span> or just starting out and wanting to  <span class="standout standout--bold">build confidence</span>, Stu can help anyone looking to overcome their next challenge or explore somewhere new.</p>`,
        },
        {
          message: `<p>Stu has experience guiding many clients from <span class="standout standout--bold">indoor bouldering and rope climbs</span> to <span class="standout standout--bold">outdoor rock climbing and abseiling</span>. He has helped others reach the top of mountains and <span class="standout standout--bold">always ensures you make it back to your car</span>. You're guaranteed to have an enjoyable day amongst <span class="standout standout--bold">fantastic scenery, in the best company</span>.</p>`,
        },
      ],
    }
  },
}
</script>
