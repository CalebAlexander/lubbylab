<template>
  <Layout>

    <div id="Index">


      <NavBar />

      <HomeBody />
      
      
      <Footer />


    </div>

  </Layout>
</template>

<script>

// import "~/assets/css/global.css";
import NavBar from "~/components/NavBar.vue"
import HomeBody from "~/components/HomeBody.vue"
import Footer from "~/components/Footer.vue"

export default {
  metaInfo: {
    title: "Home"
  },
  name: 'Index',
  components: {
    NavBar,
    HomeBody,
    Footer,
  },
};
</script>

<style></style>
