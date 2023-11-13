<template>
  <v-card className="mx-auto" min-width="240" max-width="240">
    <v-card-item title="Drill and Bolter">
    </v-card-item>
    <v-card-text>
      <v-row>
        <v-col>
          <v-img width="166" height="125px"
                 src="@/assets/images/drill-and-bolter-product.jpeg">
          </v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          This is a compact crawler mounted Universal Drilling and Bolting machine. The Drill heads rotation
          is by Hydraulic Motor through a Gear...
          <router-link to="/products/drillAndBolterDetail">MORE</router-link>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
//
</script>
