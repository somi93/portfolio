<template>
  <v-row>
    <v-col cols="12">
      <div class="bg-primary skill-card" style="position: relative">
        <div class="skill-card-title skill-card-title-line" style="position: relative">Coding</div>
        <v-row class="mt-4" justify="start">
          <v-col
            cols="4"
            md="auto"
            class="text-center"
            :class="$device.mobile ? 'px-2' : 'px-6'"
            v-for="(skill, i) in codingSkills"
            :key="i">
            <v-progress-circular
              :model-value="skill.value"
              :width="6"
              color="accent"
              :size="$device.mobile ? 64 : 80">
              <template v-slot:default>
                <v-row no-gutters class="fill-height" align="center" justify="center">
                  <img :width="$device.mobile ? '30px' : '36px'" :src="skill.logo"/>
                </v-row>
              </template>
            </v-progress-circular>
            <br/>
            <p class="mt-2">{{ skill.name }}</p>
          </v-col>
        </v-row>
      </div>
    </v-col>
    <v-col cols="12" md="6">
      <div class="bg-primary skill-card" style="position: relative">
        <div class="skill-card-title skill-card-title-line" style="position: relative">Knowledge</div>
        <v-list bg-color="transparent">
          <v-list-item
            class="pl-0"
            v-for="(item, i) in knowledgeSkills"
            :key="i"
            :title="item">
            <template v-slot:prepend>
              <v-icon color="accent" :icon="mdiCheck"></v-icon>
            </template>
          </v-list-item>
        </v-list>
      </div>
    </v-col>
    <v-col cols="12" md="6">
      <div class="bg-primary skill-card" style="position: relative">
        <div class="skill-card-title skill-card-title-line" style="position: relative">Languages</div>
        <v-row class="mt-0" justify="start">
          <v-col cols="12" v-for="(skill, i) in languageSkills" :key="i">
            <p class="mt-2">{{ skill.name }}</p>
            <v-progress-linear
              :model-value="skill.value"
              :height="6"
              color="accent"
              :size="80">
            </v-progress-linear>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>

import {mdiCheck} from '@mdi/js'
</script>

<script>

export default {
  data: () => ({
    knowledgeSkills: [
      'Real time applications',
      'Microservices, Mixins, State management',
      'Page performance',
      'Mobile first',
      'PWA & AMP',
      'AWS, Jenkins',
    ],
    languageSkills: [
      {
        name: 'Serbian (Native)',
        value: 100
      },
      {
        name: 'English',
        value: 70
      },
      {
        name: 'Slovakian',
        value: 18
      },
    ],
    codingSkills: [
      {
        name: 'Vanilla JS',
        logo: '/src/assets/js.webp',
        value: '95'
      },
      {
        name: 'Vue 2',
        logo: '/src/assets/vue.png',
        value: '90'
      },
      {
        name: 'Vue 3',
        logo: '/src/assets/vue.png',
        value: '85'
      },
      {
        name: 'Nuxt',
        logo: '/src/assets/nuxt.png',
        value: '85'
      },
      {
        name: 'Vuetify',
        logo: '/src/assets/vuetify.png',
        value: '95'
      },
      {
        name: 'BS-Vue',
        logo: '/src/assets/bootstrap-vue.png',
        value: '75'
      },
      {
        name: 'Express JS',
        logo: '/src/assets/express.png',
        value: '60'
      },
    ]
  })
}
</script>

<style lang="scss">
.skill-card-title-line::after {
  content: "";
  border-bottom: 1px solid #151c25;
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
}

.skill-card {
  position: relative;
  border-radius: 8px;
  padding: 1px 20px 10px;

  .v-list-item__prepend{
    width: 40px !important;
  }

  .skill-card-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    padding: 12px;
    border-radius: 5px;
    position: absolute;
    top: -50px;
    left: 40px;
  }

  .skill-card-title {
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff !important;
  }

  .skill-card-description {
    font-weight: 300;
    color: #a2a2a2;
  }
}
</style>
