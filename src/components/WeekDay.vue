<template>
  <div class="week__day">
    <h3 class="week__day-title">{{ getWeekday }}</h3>
    <p class="week__day-date">{{ getDay }} {{ getMonth }}</p>
    <div class="week__day-img">
        <img src="../assets/icons/thunderstorms.svg" alt="" v-if="weatherMain == 'Thunderstorm'"/>
        <img src="../assets/icons/drizzle.svg" alt="" v-else-if="weatherMain == 'Drizzle'"/>
        <img src="../assets/icons/rain.svg" alt="" v-else-if="weatherMain == 'Rain'"/>
        <img src="../assets/icons/snow.svg" alt="" v-else-if="weatherMain == 'Snow'"/>
        <img src="../assets/icons/mist.svg" alt="" v-else-if="weatherMain == 'Mist'"/>
        <img src="../assets/icons/smoke.svg" alt="" v-else-if="weatherMain == 'Smoke'"/>
        <img src="../assets/icons/haze.svg" alt="" v-else-if="weatherMain == 'Haze'"/>
        <img src="../assets/icons/dust.svg" alt="" v-else-if="weatherMain == 'Dust'"/>
        <img src="../assets/icons/fog.svg" alt="" v-else-if="weatherMain == 'Fog'"/>
        <img src="../assets/icons/dust.svg" alt="" v-else-if="weatherMain == 'Sand'"/>
        <img src="../assets/icons/mist.svg" alt="" v-else-if="weatherMain == 'Ash'"/>
        <img src="../assets/icons/mist.svg" alt="" v-else-if="weatherMain == 'Squall'"/>
        <img src="../assets/icons/tornado.svg" alt="" v-else-if="weatherMain == 'Tornado'"/>
        <img src="../assets/icons/clear-day.svg" alt="" v-else-if="weatherMain == 'Clear'"/>
        <img src="../assets/icons/cloudy.svg" alt="" v-else-if="weatherMain == 'Clouds'"/>
        <img src="../assets/icons/mist.svg" alt="" v-else/>
    </div>
    <div class="week__day-temp">
      {{ Math.round(day.temp.day) }}°
      <span>{{ Math.round(day.feels_like.day) }}°</span>
    </div>
    <p class="week__day-info">{{ day.weather[0].description }}</p>
  </div>
</template>

<script>
import unix from "@/timestamp";
export default {
  name: "weekDay",
  props: {
    day: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getWeekday() {
      return unix(this.day.dt, "weekday");
    },
    getMonth() {
      return unix(this.day.dt, "month");
    },
    getDay() {
      return unix(this.day.dt, "day");
    },
    weatherMain(){
      return this.day.weather[0].main
    }
  },
};
</script>
