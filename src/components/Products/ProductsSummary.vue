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
            <SAGESSummary/>
          </v-col>
          <v-col>
            <FeederBreakerSummary />
          </v-col>
          <v-col>
            <EquipmentRetrieverSummary />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
//
import ProductsIcon from "@/components/icons/ProductsIcon.vue";
import SAGESSummary from "@/components/Products/SAGESSummary.vue";
import FeederBreakerSummary from "@/components/Products/FeederBreakerSummary.vue";
import EquipmentRetrieverSummary from "@/components/Products/EquipmentRetrieverSummary.vue";
</script>
