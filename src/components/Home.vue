<template>
  <v-img src="@/assets/images/products-collage.jpeg" />
  <AboutUs class="my-5"></AboutUs>
  <v-divider color="grey-darken-4"/>
  <ProductsSummary class="my-5"></ProductsSummary>
  <v-divider color="grey-darken-4"/>
  <ServicesSummary class="my-5"></ServicesSummary>
</template>

<script setup lang="ts">
//
import AboutUs from "@/components/AboutUs.vue";
import ProductsSummary from "@/components/Products/ProductsSummary.vue";
import ServicesSummary from "@/components/Services/ServicesSummary.vue";
</script>
