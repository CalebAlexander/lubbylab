<template>
  <!-- layout class common to all pages -->
  <div class="">
    
    <NavBar />
    
    <!-- Single File Page Components go here -->
    <slot/>


    <Footer />

    
  </div>
</template>


<script>
import NavBar from "~/components/NavBar.vue"
import Footer from "~/components/Footer.vue"

export default {
  components: {
    NavBar,
    Footer,
  }
};
</script>

<style></style>
