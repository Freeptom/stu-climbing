<template>
  <app-section on-light full-bleed>
    <div class="split">
      <nuxt-img
        class="split__img"
        src="/sunset.jpg"
        alt="A sunset from of a mountain view"
        height="628"
        width="902"
        loading="lazy"
        placeholder
      />
      <div class="split__container">
        <h2 class="split__heading">What people are saying</h2>

        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="split__testimonial"
        >
          <div v-html="testimonial.message"></div>
          <p class="split__testimonial-meta">
            <span class="split__name">{{ testimonial.name }}</span> &#8212;
            {{ testimonial.title }}
          </p>
        </div>
      </div>
    </div>
  </app-section>
</template>

<script>
import AppSection from '~/components/layout/AppSection.vue'
export default {
  name: 'SplitSection',
  components: {
    AppSection,
  },
  data() {
    return {
      testimonials: [
        {
          name: 'Rebekah',
          title: 'New adventurer',
          message: `<p>I really appreciated the way you guided us through a lesser known trail in the Peaks. It was exactly what I was looking for, out of my comfort zone, away from crowds but amongst some interesting landscape. Thank you so much!!</p>`,
        },
        {
          name: 'Tom',
          title: 'Hiker and new climber',
          message: `<p>I love the way you coach me through a range of options during a climb and help me feel in control of the route.</p>`,
        },
        {
          name: 'Carla',
          title: 'Experienced climber & hiker',
          message: `<p>My confidence has improved so much on outdoor climbs. He teaches me something new in every session.</p>`,
        },
      ],
    }
  },
}
</script>
