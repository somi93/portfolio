<template>
  <v-row
    id="portfolio"
    :class="!$device.mobile ? lg ? 'pt-15 mt-15' : 'px-15 pt-15 mt-15' : 'mt-10'"
    align="center"
    justify="center">
    <v-col cols="12" md="9" class="mb-15 text-center">
      <p class="mp-subtitle">
        Portfolio
      </p>
      <p class="mp-title mt-4">
        From Concept to Reality: My Development Projects
      </p>
    </v-col>
    <v-col cols="12" md="4" v-for="project in projects" :key="project.id">
      <router-link :to="{name: 'project-id', params: {id: project.id}}">
        <div class="bg-primary services-card" style="overflow: hidden;" :style="!$device.mobile && 'aspect-ratio: 1.51'">
          <v-img class="portfolio-item" :src="project.img"></v-img>
          <div class="px-4 py-2">
            <p style="font-size: 1.5rem" class="mb-0">{{ project.name }}</p>
            <a :href="project.fullLink" target="_blank" style="text-decoration: none">
              <small class="text-accent">{{ project.link }}</small>
            </a>
          </div>
        </div>
      </router-link>
    </v-col>
  </v-row>
</template>

<script setup>
import { useDisplay } from 'vuetify'
const {lg} = useDisplay();
</script>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  }
}
</script>

<style>
.portfolio-item .v-img__img{
  transition: transform .4s; /* Animation */
  transition-timing-function: ease-in-out;
}
.portfolio-item .v-img__img:hover{
  transform: scale(1.2);
}
</style>
