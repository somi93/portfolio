<template>
  <div>
    <slide></slide>
    <about-me></about-me>
    <services></services>
    <resume></resume>
    <portfolio></portfolio>
  </div>
</template>

<script setup>
import Slide from '@/components/slide'
import AboutMe from '@/components/about'
import Services from '@/components/services'
import Resume from '@/components/resume'
import Portfolio from '@/components/portfolio.vue'
</script>

<script>
export default {
  mounted() {
    if(window.location.hash) {
      document.getElementById(window.location.hash.slice(1)).scrollIntoView({ behavior: "smooth"});
    }
  }
}
</script>
