<template>
  <div class="mp-slide" id="home">
    <v-row class="fill-height" align="center" no-gutters>
      <v-col cols="12" md="9" lg="7" xl="6" :class="!$device.mobile ? lg ? 'mt-15' : 'px-15 pt-15' : ''">
        <div class="mp-headline mb-6 text-md-left">
          <h1>HI, I'M MILOŠ!</h1>
          <v-row align="center" no-gutters :justify="$device.mobile ? 'center' : 'start'">
            <div>Creative</div>
            <div style="position: relative;width: 300px;height: 90px;" class="ml-4">
              <v-row :justify="$device.mobile ? 'center' : 'start'" no-gutters id="word-container">
                <span id="text1"></span>
                <span id="text2"></span>
              </v-row>
            </div>
          </v-row>
        </div>
        <p class="text-center text-md-left">
          Passionate and ambitious front-end web developer with
          a strong focus on detail and quality. Always looking for
          new challenges and opportunities to learn and grow.
          Always ready to take on new responsibilities and
          challenges. I am committed to providing excellent
          service and creating a positive user experience.
        </p>
        <v-row no-gutters class="mt-15" :justify="$device.mobile ? 'center' : 'start'">
          <v-btn tile color="accent" rounded="0" width="200px" height="56px" href="/src/assets/cv.pdf" target="_blank">
            Download CV
            <v-icon class="ml-2" :icon="mdiDownload"></v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import {mdiDownload} from '@mdi/js'
import { useDisplay } from 'vuetify'
const {lg} = useDisplay();
</script>

<script>
export default {
  mounted() {
    const elts = {
      text1: document.getElementById("text1"),
      text2: document.getElementById("text2")
    };

    const texts = [
      "Coder",
      "Player",
      "Designer",
    ];

    const morphTime = 1;
    const cooldownTime = 0.25;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];

    function doMorph() {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    }

    function setMorph(fraction) {
      elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      fraction = 1 - fraction;
      elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      elts.text1.textContent = texts[textIndex % texts.length];
      elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    }

    function doCooldown() {
      morph = 0;

      elts.text2.style.filter = "";
      elts.text2.style.opacity = "100%";

      elts.text1.style.filter = "";
      elts.text1.style.opacity = "0%";
    }

    function animate() {
      requestAnimationFrame(animate);

      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime - time) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    }

    animate();

  }
}
</script>

<style lang="scss">
.mp-slide {
  height: 100vh;
  background-image: url("/src/assets/slide4.png");
  background-size: cover;
}

body {
  margin: 0px;
}

#word-container {
  //filter: url(#threshold) blur(0.6px);
}

#text1,
#text2 {
  position: absolute;
  user-select: none;
  color: #55e6a5;
  top: 14px;
}

.mp-headline {
  font-weight: 900;
  font-size: 3.8rem;
  line-height: 1;
  font-family: system-ui;
  h1 {
    font-weight: 900;
    font-size: 3.8rem;
    line-height: 1;
  }
}

</style>
