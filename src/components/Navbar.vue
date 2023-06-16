<template>
  <header class="header">
    <nav class="navbar">
      <a href="" @click.prevent class="navbar__logo">
        <img src="@/assets/icons/partly-cloudy-day.svg" alt="" />
        <span>vue weather</span>
      </a>
      <div class="navbar__search">
        <input
          type="text"
          placeholder="Search..."
          class="navbar__search-input"
          v-model="country"
          @keydown.enter="getWeather(country), (country = '')"
        />
      </div>
    </nav>
  </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      country: "",
    };
  },
  methods: {
    ...mapActions(["getWeather"]),
  },
};
</script>
