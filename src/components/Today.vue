<template>
  <section class="today">
    <div class="today-left">
      <p class="today-left__dagree">{{ Math.round(current.temp) }}°</p>
      <p class="today-left__day">Today</p>
      <p class="today-left__time">Time: {{ time }}</p>
      <p class="today-left__city">City: {{ cityName }}</p>
      <div class="today-left__img">
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
    </div>

    <div class="today-right">
      <img
        src="@/assets/images/main-weather-right-bg.png"
        alt=""
        class="today-right__bg"
      />
      <div class="today-item">
        <img src="@/assets/icons/thermometer.svg" alt="" />
        <span class="today-item__name">Thermometer</span>
        <span class="today-item__temp">
          {{ Math.round(current.temp) }}° - feels like
          {{ Math.round(current.feels_like) }}°
        </span>
      </div>
      <div class="today-item">
        <img src="@/assets/icons/humidity.svg" alt="" />
        <span class="today-item__name">Pressure</span>
        <span class="today-item__temp">{{ current.pressure }} mm HG</span>
      </div>
      <div class="today-item">
        <img src="@/assets/icons/tide-high.svg" alt="" />
        <span class="today-item__name">Humidity</span>
        <span class="today-item__temp">{{
          current.humidity < 1 ? "no precipitation" : `${current.humidity}%`
        }}</span>
      </div>
      <div class="today-item">
        <img src="@/assets/icons/wind.svg" alt="" />
        <span class="today-item__name">Wind Speed</span>
        <span class="today-item__temp">{{ current.wind_speed }} m/s</span>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "today",
  computed: {
    ...mapGetters(["getFullWeather"]),
    current() {
      return this.getFullWeather.current;
    },
    cityName() {
      return this.getFullWeather.name;
    },
    time() {
      return new Date().toLocaleString("en-US", {
        timeZone: this.getFullWeather.timezone,
        timeStyle: "short",
        hourCycle: "h23",
      });
    },
    weatherMain() {
      return this.current.weather[0].main;
    },
  },
};
</script>
