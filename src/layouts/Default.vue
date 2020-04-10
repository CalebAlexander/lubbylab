<template>
  <!-- layout class common to all pages -->
  <div class="layout bg-paletteYellow lg:h-screen">
    
    <!-- Header -->
    <NavBar />

    <!-- Single File Page Components go here -->
    <slot/>

    <!-- Footer -->
    <footer>

    </footer>
  </div>
</template>


<script>
import NavBar from "~/components/NavBar.vue";

export default {
  components: {
    NavBar,
  }
};
</script>

<style></style>
