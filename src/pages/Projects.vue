<template>
  <Layout>
    
    <!-- Container for Horizontal Orientation-->
    <div class="lg:flex h-auto overflow-x-auto justify-center border-2 border-orange-600">
      <!-- Card Component -->
      
      <Card />
      <!-- Horizontal Component -->
      <Card />

      <Card />

      <Card />

      <Card />

    </div>

  </Layout>
</template>

<script>
import Card from "~/components/utilities/Card.vue";

export default {
  metaInfo: {
    title: 'Projects'
  },
  components: {
    Card,

  }
}
</script>