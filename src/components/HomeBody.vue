<template>
  <div id="HomeBody"
  class="border-blue-500 border-solid border-2
  ">

    <Hero />
    
    <AboutPreview />

    <ProjectsPreview />

    <HobbiesPreview />
    

  </div>
</template>

<script>

// import "~/assets/css/global.css";
import Hero from "~/components/home/Hero.vue"
import AboutPreview from "~/components/home/AboutPreview.vue"
import ProjectsPreview from "~/components/home/ProjectsPreview.vue"
import HobbiesPreview from "~/components/home/HobbiesPreview.vue"

export default {
    name: 'HomeBody',
    components: {
        Hero,
        AboutPreview,
        ProjectsPreview,
        HobbiesPreview,
    },
};
</script>

<style></style>