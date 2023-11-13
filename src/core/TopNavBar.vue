<template>
  <v-app-bar>
    <v-app-bar-title class="text-primary text-h5 font-weight-bold">
      Jaya Bharat Equipments
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn >
      <v-icon>mdi-home</v-icon>
      <router-link class="text-black" to="/">
        HOME
      </router-link>
    </v-btn>
    <v-btn>
      <v-icon class="mr-1"><ProductsIcon /></v-icon>
      <router-link class="text-black" to="/products">
        PRODUCTS
      </router-link>
    </v-btn>
    <v-btn>
      <v-icon class="mr-1"><ServicesIcon /></v-icon>
      <router-link class="text-black" to="/services">
        SERVICES
      </router-link>
    </v-btn>
    <v-btn>
      <v-icon class="mr-1">mdi-phone</v-icon>
      <router-link class="text-black" to="/contact">
        CONTACT
      </router-link>
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
//
import ProductsIcon from "@/components/icons/ProductsIcon.vue";
import ServicesIcon from "@/components/icons/ServicesIcon.vue";
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
