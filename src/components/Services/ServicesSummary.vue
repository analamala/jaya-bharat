<template>
  <v-card flat="true">
    <v-card-title class="text-center">
      <v-icon class="mr-1"><ServicesIcon/></v-icon>
      OUR SERVICES
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col>
            <v-card width="350px" height="340px">
              <v-card-title>Hydraulic Cylinders Repair</v-card-title>
              <v-card-text>
                We undertake repairs of all makes of Hydraulic Cylinders of Surface Mining, Construction and
                Underground Mining equipment. The repairs include rebuilding of scratch lines, dents, straightening
                of the bent Piston Rods and Electro plating. After replacement of Seals the Cylinders will be
                subjected to performance tests including over load test.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card width="350px" height="340px">
              <v-card-title>High Pressure Plunger Pumps Repair</v-card-title>
              <v-card-text>
                Plunger Pumps are repaired by replacing the damaged Plungers are by restoring their damaged surface
                by Ceramic/Carbide coatings. The Crank shaft journals are ground to the next standard size and the
                Connecting rod Shell bearings are made to suit the reduced journal sizes. The repaired Pumps are
                tested at their rated operating Pressure.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card width="350px" height="340px">
              <v-card-title>Armoured Conveyors Refurbishment</v-card-title>
              <v-card-text>
                Worn out Armoured Conveyors of Longwalls and Continuous Miners will be refurbished by cutting out the
                worn out Chain races and Chain guides and replacing the parts by Wear resistant Plates (AR/CCO) and
                Chain guides. The re-furbished Conveyors will give at-least the O.E.M predicted life in terms of
                Production volumes handled.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card width="350px" height="344px">
              <v-card-title>Hydraulic Pumps & Motors Repair</v-card-title>
              <v-card-text>
                Failed Hydraulic Pumps and Motors of all major makes like “Rexroth”, “Poclain”, “Hagglunds” and
                “Danfoss” etc will be restored to their original condition by replacing the entire internals with new
                ones. The repaired units will be subjected to tests at their rated working pressure to ensure rated
                operating parameters. The Sandvik make Hydraulic Drifters series HLX are discarded when the casing
                bores become oversized. We can repair these casings by restoring the oversized casing bores to their
                initial dimensional tolerances. We also undertake complete refurbishment of HLX Drifters by replacing
                all the internals at a fraction of their initial cost.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card width="350px" height="340px">
              <v-card-title>Gear Boxes Refurbishment</v-card-title>
              <v-card-text>
                Gear boxes of Imported equipment will be refurbished by restoring the oversized Bearing bores to
                original dimensional tolerances and by replacing the failed Gears with Precession Gears manufactured
                to AGMA Quality No 10/DIN 8 standard. The re-built Gear units will be tested for heat, noise and
                vibration levels by running on a test bench.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card width="350px" height="340px">
              <v-card-title>Cutting Drums Refurbishment</v-card-title>
              <v-card-text>
                Cutting Drums of Longwall Shearers, Continuous Miners (CM) and Crusher Rolls will be restored to
                their initial condition by replacing the Pick boxes as per O.E.M Lacing diagram and rebuilding the
                worn out parts and hard facing of the wear prone surfaces.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import SAGESSummary from "@/components/Products/SAGESSummary.vue";
import FeederBreakerSummary from "@/components/Products/FeederBreakerSummary.vue";
import EquipmentRetrieverSummary from "@/components/Products/EquipmentRetrieverSummary.vue";
import ElectricDozerSummary from "@/components/Products/ElectricDozerSummary.vue";
import HydraulicCylinderSummary from "@/components/Products/HydraulicCylinderSummary.vue";
import DrillAndBolterSummary from "@/components/Products/DrillAndBolterSummary.vue";
import PowerPackSummary from "@/components/Products/PowerPackSummary.vue";
import ServicesIcon from "@/components/icons/ServicesIcon.vue";
</script>
