<template>
  <v-row
    id="services"
    :class="!$device.mobile ? lg ? 'pt-15 mt-15' : 'px-15 pt-15 mt-15' : 'mt-15 pt-10'"
    align="center"
    justify="center">
    <v-col cols="12" md="9" class="pb-5 text-center">
      <p class="mp-subtitle">
        My Services
      </p>
      <p class="mp-title mt-4">
        Bringing your vision to life with
        precision and passion
      </p>
    </v-col>
    <v-col cols="12" md="4" :class="!$device.mobile && 'pr-4 mt-8'">
      <div class="px-10 py-12 bg-primary services-card">
        <p class="services-card-title">Pixel Perfect Websites</p>
        <p class="services-card-description">
          I craft stunning and user-friendly websites that convert visitors into customers. From responsive design and
          intuitive interfaces to cutting-edge animations and interactive elements, I build websites that elevate your
          brand and achieve your online goals.
        </p>
      </div>
    </v-col>
    <v-col cols="12" md="4" :class="!$device.mobile ? 'px-2 mt-8' : ''">
      <div class="px-10 py-12 bg-primary services-card">
        <p class="services-card-title"> Blazing-Fast Single-Page Applications</p>
        <p class="services-card-description">
          I build lightning-fast and engaging Single-Page Applications that provide a seamless user experience. Optimize
          performance and user engagement with modern web technologies, ensuring your application is dynamic,
          interactive, and delivers a truly immersive experience.
        </p>
      </div>
    </v-col>
    <v-col cols="12" md="4" :class="!$device.mobile && 'pl-4 mt-8'">
      <div class="px-10 py-12 bg-primary services-card">
        <p class="services-card-title">Unleashing Peak Performance</p>
        <p class="services-card-description">
          I optimize your website's performance and ensure it ranks high in search engine results. I utilize advanced
          techniques to reduce loading times, improve mobile responsiveness, and optimize content for search engines,
          ultimately driving more traffic and conversions to your website.
        </p>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import { useDisplay } from 'vuetify'
const {lg} = useDisplay();
</script>

<style lang="scss">
.services-card {
  position: relative;
  border-radius: 8px;

  .services-card-image {
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

  .services-card-title {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff !important;
  }

  .services-card-description {
    font-weight: 300;
    color: #a2a2a2;
  }
}
</style>

