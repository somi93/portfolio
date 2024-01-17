<template>
  <v-container>
    <v-row :class="!$device.mobile && 'px-15'" style="position: relative">
      <v-col cols="12" class="pb-0">
        <p
          class="font-weight-medium text-uppercase"
          :style="$device.mobile ? 'font-size: 5rem;margin-top: 40px' : 'font-size: 9rem;'"
          style="font-family: 'Roboto Condensed' !important;">{{ project.name }}</p>
      </v-col>
      <v-col cols="12" md="6" xl="6" class="pt-0" v-if="project" style="z-index: 2">
        <p class="project-summary mb-4" style="text-shadow: 1px 1px #000">
          {{ project.description }}
        </p>
        <p class="text-uppercase text-accent mt-8 mb-2"
           style="font-family: 'Roboto Condensed' !important;font-size: 1.525rem">
          Technologies used
        </p>
        <p style="font-size: 1.25rem">
          {{ project.technologies.join(', ') }}
        </p>
        <p class="text-uppercase text-accent mt-8 mb-2"
           style="font-family: 'Roboto Condensed' !important;font-size: 1.525rem">
          Duration
        </p>
        <p style="font-size: 1.25rem">
          {{ project.date }}
        </p>
        <p class="text-uppercase text-accent mt-8 mb-2"
           style="font-family: 'Roboto Condensed' !important;font-size: 1.25rem">
          Client
        </p>
        <p style="font-size: 1.25rem">
          {{ project.client }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    project() {
      return this.$store.state.projects.find(project => project.id === Number(this.$route.params.id))
    }
  }
}
</script>

<style>
.project-summary {
  font-size: 1.2rem;
}
</style>
