<template>
  <app-section on-light full-bleed>
    <div class="split">
      <img
        class="split__img"
        src="~/assets/images/bouldering.png"
        alt="A person reaching a hold on a climbing wall"
        height="628"
        width="902"
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
        <p>
          Ut enim ad minima veniam,
          <span class="standout standout--bold standout--inverse"
            >quis nostrum exercitationem ullam</span
          >
          corporis suscipit, ex ea commodi consequatur? Quis autem
          <span class="standout standout--bold standout--inverse"
            >vel eum iure reprehenderit</span
          >
          qui in ea voluptate velit esse, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
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
