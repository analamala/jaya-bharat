<template>
  <v-card flat class="mt-3">
    <v-card-title class="text-center">
      <v-icon class="mr-1"><ProductsIcon/></v-icon>
      OUR PRODUCTS
    </v-card-title>
  </v-card>
  <SagesDetail class="mb-4"/>
  <v-divider></v-divider>
  <FeederBreakerDetail class="mt-2 mb-4"/>
  <v-divider></v-divider>
  <EquipmentRetrieverDetail class="mt-2 mb-4"/>
  <v-divider></v-divider>
  <ElectricDozerDetail class="mt-2 mb-4"/>
  <v-divider></v-divider>
  <HydraulicCylinderDetail class="mt-2 mb-4"/>
  <v-divider></v-divider>
  <DrillAndBolterDetail class="mt-2 mb-4"/>
  <v-divider></v-divider>
  <PowerPackDetail class="mt-2 mb-4"/>
</template>

<script setup lang="ts">
import SagesDetail from "@/components/Products/SagesDetail.vue";
import FeederBreakerDetail from "@/components/Products/FeederBreakerDetail.vue";
import EquipmentRetrieverDetail from "@/components/Products/EquipmentRetrieverDetail.vue";
import ElectricDozerDetail from "@/components/Products/ElectricDozerDetail.vue";
import HydraulicCylinderDetail from "@/components/Products/HydraulicCylinderDetail.vue";
import DrillAndBolterDetail from "@/components/Products/DrillAndBolterDetail.vue";
import PowerPackDetail from "@/components/Products/PowerPackDetail.vue";
import ProductsIcon from "@/components/icons/ProductsIcon.vue";
</script>
