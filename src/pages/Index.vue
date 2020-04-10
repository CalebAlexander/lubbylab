<template>
  <Layout>

    <!-- Container for Horizontal Orientation-->
    <div class="w-full mx-auto border-orange-600 border-2 bg-paletteYellow">
      <div class="hidden lg:flex lg:flex-row justify-center py-5">

        <!-- Card Component -->
        <Card />
        <!-- Horizontal Component -->
        <CircuitHorizontal />

      </div>

      <!-- Container for Horizontal Orientation-->
      <div class="flex flex-col lg:hidden justify-center border-2 border-orange-600">
        {{ width }}
        <!-- Card Component -->
        <Card />
        <!-- Vertical Circuit Component -->
        <CircuitVertical />

      </div>
    </div>

    

  </Layout>
</template>

<script>

import Card from "~/components/Card.vue";
import CircuitHorizontal from "~/components/CircuitHorizontal.vue";
import CircuitVertical from "~/components/CircuitVertical.vue";
// import "~/assets/css/global.css";

export default {
  metaInfo: {
    title: "Home"
  },
  components: {
    Card,
    CircuitHorizontal,
    CircuitVertical,
  },
};
</script>

<style></style>
