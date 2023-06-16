<template>
  <main class="main">
    <Today />
    <Week />
  </main>
</template>

<script>
import Today from "./Today";
import Week from "./Week.vue";
export default {
  components: {
    Today,
    Week,
  },
};
</script>
