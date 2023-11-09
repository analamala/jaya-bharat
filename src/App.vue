<template>
  <v-app>
    <v-main>
      <TopNavBar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import TopNavBar from '@/core/TopNavBar.vue'
</script>
