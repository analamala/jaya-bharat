<template>
  <SAGESDetail class="mb-4"/>
  <v-divider></v-divider>
  <FeederBreakerDetail class="mt-2"/>
  <v-divider></v-divider>
  <EquipmentRetrieverDetail class="mt-2"/>
  <v-divider></v-divider>
  <ElectricDozerDetail class="mt-2"/>
</template>

<script setup lang="ts">
import SAGESDetail from "@/components/Products/SAGESDetail.vue";
import FeederBreakerDetail from "@/components/Products/FeederBreakerDetail.vue";
import EquipmentRetrieverDetail from "@/components/Products/EquipmentRetrieverDetail.vue";
import ElectricDozerDetail from "@/components/Products/ElectricDozerDetail.vue";
</script>
