<template>
  <section class="week">
    <button class="week__btn" @click="getWeather()">Отменить</button>
    <ul class="week__list">
      <li v-for="(day, index) in getDailyWeather.slice(0, 7)" :key="index">
        <WeekDay :day="day" />
      </li>
    </ul>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import WeekDay from "./WeekDay.vue";
export default {
  name: "Week",
  components: {
    WeekDay,
  },
  methods: {
    ...mapActions(["getWeather"]),
  },
  computed: {
    ...mapGetters(["getDailyWeather"]),
  },
};
</script>
