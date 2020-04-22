<template>
  <Layout>

    <div id="Index" class="bg-paletteBlack relative block z-0">


      

      <HomeBody />
      
      
      <Footer />


    </div>

  </Layout>
</template>

<script>

// import "~/assets/css/global.css";

import HomeBody from "~/components/HomeBody.vue"


export default {
  metaInfo: {
    title: "Home"
  },
  name: 'Index',
  components: {
    // NavBar,
    HomeBody,
    // Footer,
  },
};
</script>

<style></style>
