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
            <v-card class="mx-auto" max-width="240">
              <v-card-item title="SAGES">
              </v-card-item>
              <v-card-text>
                <v-row>
                  <v-col>
                    <v-img width="220px" height="125px"
                           src="@/assets/images/SAGES-product.png">
                    </v-img>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    Self Advancing (mobile) Goaf Edge Support (SAGES) is a unique patented base lift design where
                    the base slides inside the under carriage.
                      <router-link to="/sagesDetail">MORE</router-link>
                  </v-col>
                </v-row>
              </v-card-text>

            </v-card>

          </v-col>
          <v-col>
            <v-img class="rounded-circle"
                   width="300px" height="180px"
                   src="@/assets/images/SAGES-product.png">
            </v-img>
          </v-col>
          <v-col>
            <v-img class="rounded-circle"
                   width="300px" height="180px"
                   src="@/assets/images/SAGES-product.png">
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
//
import ProductsIcon from "@/components/icons/ProductsIcon.vue";
</script>
