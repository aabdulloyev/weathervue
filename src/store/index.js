import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    apiKey: "d44f8f733f6e94e1058ff899dcd385b2",
    limit: 1,
    part: "minutely,hourly,alerts",
    baseUrl: "https://api.openweathermap.org",
    units: "metric",
    fullWeather: null,
  },
  mutations: {
    saveWeather(state, obj) {
      state.fullWeather = obj;
    },
  },
  actions: {
    async getWeather({ state, commit }, city = "Tashkent") {
      try {
        let res = await axios.get(
          `${state.baseUrl}/geo/1.0/direct?q=${city}&limit=${state.limit}&appid=${state.apiKey}`
        );

        const { lat, lon, name } = res.data[0];

        let res2 = await axios.get(
          `${state.baseUrl}/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=${state.part}&appid=${state.apiKey}&units=${state.units}`
        );

        const weatherObject = {
          ...res2.data,
          name: name,
        };
        console.log(weatherObject);
        commit("saveWeather", weatherObject);
      } catch (error) {
        console.error("Ошибка при получении данных о погоде", error);
      }
    },
  },
  getters: {
    getFullWeather: (state) => state.fullWeather,
    getDailyWeather: (state) => state.fullWeather.daily,
  },
});
