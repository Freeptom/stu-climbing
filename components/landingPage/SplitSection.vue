<template>
  <app-section on-light full-bleed>
    <div class="split">
      <img
        class="split__img"
        src="~/assets/images/bouldering.png"
        alt="A person reaching a hold on a climbing wall"
      />
      <div class="split__content">
        <p>
          Lorem ipsum dolor sit amet,
          <span class="standout standout--bold standout--inverse"
            >consectetur adipiscing</span
          >
          elit. Nec id quam ornare dictum risus,
          <span class="standout standout--bold standout--inverse"
            >massa nunc rutrum</span
          >. Iaculis varius sed feugiat at. Nisi vitae eu, etiam magna eget
          <span class="standout standout--bold standout--inverse"
            >lectus ornare mattis. Tempor, interdum aenean</span
          >
          phasellus tortor donec quam venenatis volutpat.
        </p>
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
}
</script>
