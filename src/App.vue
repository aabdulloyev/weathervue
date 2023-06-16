<template>
  <div class="container" v-if="getFullWeather">
    <Navbar />
    <Main />
  </div>
  <div class="loading__element" v-else>
    <span class="loader"></span>
    <h2>Vue Weather</h2>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Main from "@/components/Main.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Navbar,
    Main,
  },
  methods: {
    ...mapActions(["getWeather"]),
  },
  computed: {
    ...mapGetters(["getFullWeather"]),
  },
  mounted() {
    setTimeout(() => {
      this.getWeather();
    }, 500);
  },
};
</script>

<style lang="scss">
.loading__element {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & h2 {
    margin-top: 30px;
    font-weight: 700;
    font-size: 25px;
    line-height: 0.8;
    color: #308d5e;
    text-transform: uppercase;
  }
}

.loader {
  position: relative;
  width: 64px;
  height: 64px;
  background-color: rgba(0, 0, 0, 0.5);
  transform: rotate(45deg);
  overflow: hidden;
}

.loader:after {
  content: "";
  position: absolute;
  inset: 8px;
  margin: auto;
  background: #222b32;
}

.loader:before {
  content: "";
  position: absolute;
  inset: -15px;
  margin: auto;
  background: #308d5e;
  animation: diamondLoader 2s linear infinite;
}

@keyframes diamondLoader {
  0%,
  10% {
    transform: translate(-64px, -64px) rotate(-45deg);
  }

  90%,
  100% {
    transform: translate(0px, 0px) rotate(-45deg);
  }
}
</style>
