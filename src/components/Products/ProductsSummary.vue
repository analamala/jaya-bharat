<template>
  <v-card flat>
    <v-card-title class="text-center">
      <v-icon class="mr-1"><ProductsIcon/></v-icon>
      OUR PRODUCTS
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col>
            <SagesSummary/>
          </v-col>
          <v-col>
            <FeederBreakerSummary />
          </v-col>
          <v-col>
            <EquipmentRetrieverSummary />
          </v-col>
          <v-col>
            <ElectricDozerSummary />
          </v-col>
          <v-col>
            <HydraulicCylinderSummary />
          </v-col>
          <v-col>
            <DrillAndBolterSummary />
          </v-col>
          <v-col>
            <PowerPackSummary />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
//
import ProductsIcon from "@/components/icons/ProductsIcon.vue";
import SagesSummary from "@/components/Products/SagesSummary.vue";
import FeederBreakerSummary from "@/components/Products/FeederBreakerSummary.vue";
import EquipmentRetrieverSummary from "@/components/Products/EquipmentRetrieverSummary.vue";
import ElectricDozerSummary from "@/components/Products/ElectricDozerSummary.vue";
import HydraulicCylinderSummary from "@/components/Products/HydraulicCylinderSummary.vue";
import DrillAndBolterSummary from "@/components/Products/DrillAndBolterSummary.vue";
import PowerPackSummary from "@/components/Products/PowerPackSummary.vue";
</script>
