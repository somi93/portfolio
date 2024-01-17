<template>
  <v-row id="about" :class="$device.mobile || lg ? '' : 'px-15'">
    <v-col cols="12" md="9" :class="$device.mobile ? 'mb-4' : 'mb-15'">
      <p class="mp-subtitle text-center text-md-left">
        ABOUT ME
      </p>
      <p class="mp-title mt-6 text-center text-md-left">
        Beyond the Lines of Code: My Story
      </p>
    </v-col>
    <v-col cols="12" md="6">
      <div class="text-center text-md-left">
        <img
          src="https://wp.shsarker.xyz/zyan/wp-content/uploads/2023/10/about_1.png"
          style="height: 120px;width: 120px"/>

        <p class="mp-description mb-4">
          I'm Miloš, a web developer with a passion for [Skills/Interests].
          I was born and raised in a tiny in a tiny town in western Serbia.
          It was a place that fostered my creativity and instilled in me a deep appreciation for [Values or lessons
          learned].
        </p>

        <p class="mp-description mb-4">
          Today, I call Belgrade home, a dynamic city that fuels my sense of adventure and offers endless
          opportunities for growth. Here, I've cultivated a career in web development, focusing on User experience.
          For over 10 years, I've been immersed in the world of design and technology, helping businesses and
          individuals achieve their online goals.
        </p>

        <p class="mp-description">
          But my life isn't just about code and pixels. When I'm not engrossed in the digital realm, I find joy in
          playing chess, hanging with "Grobari" on BC Partizan matches.
          I'm constantly seeking new ways to challenge myself and explore the world around me.
          These passions not only provide me with balance and perspective but also inspire my creative endeavors.
        </p>
      </div>
    </v-col>
    <v-col cols="12" md="6">
      <div class="about-img float-right" style="max-width: 500px">
        <img
          :style="$device.mobile && 'width: 100%'"
          style="max-width: 100%"
          class="rounded-lg"
          src="/src/assets/cover.jpg"/>
        <div class="about-experience bg-accent pa-6 rounded">
          <v-row no-gutters align="center">
            <div class="bg-white pa-2 rounded">
              <v-icon color="accent" :icon="mdiMedal" size="42px"></v-icon>
            </div>
            <div class="ml-4">
              <p class="about-experience-title mb-0">10+</p>
              <p class="about-experience-subtitle mb-0">Years of experience</p>
            </div>
          </v-row>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import {mdiMedal} from '@mdi/js'
import { useDisplay } from 'vuetify'
const {lg} = useDisplay();
</script>

<style lang="scss">
.about-img {
  position: relative;
  z-index: 1;
}

@media only screen and (max-width: 600px) {
  .about-img::before, .about-experience {
    right: 0 !important;
  }
}

.about-img::before {
  position: absolute;
  content: "";
  background: url('https://wp.shsarker.xyz/zyan/wp-content/themes/zyan/assets/img/shapes/about_shapes.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 250px;
  height: 250px;
  top: -40px;
  right: -50px;
  z-index: -1;
  animation: aboutAmini linear 2s infinite alternate;
  -webkit-animation: aboutAmini linear 2s infinite alternate;
}

@keyframes aboutAmini {
  from {
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
  }

  to {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
  }
}

.about-experience {
  position: absolute;
  bottom: -50px;
  right: -32px;
  font-weight: 600;

  .about-experience-title {
    font-size: 2.5rem;
    line-height: 1;
  }

  .about-experience-subtitle {
    font-size: 1.25rem;
  }
}
</style>
