<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      scrim
      :temporary="$device.mobile || isLarge"
      :width="250"
      color="primary"
      style="border-right: 2px solid #151c25">
      <v-row no-gutters style="padding: 50px" justify="center" align="center" class="bg-secondary">
<!--        <v-img-->
<!--          height="40px"-->
<!--          src="https://wp.shsarker.xyz/zyan/wp-content/themes/zyan/assets/img/logo/logo2.png">-->
<!--        </v-img>-->
        <div class="test">
         <span class="text-accent">M</span>ILOŠ
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display: none">
          <defs>
            <filter id="squiggly-0">
              <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0"/>
              <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
            </filter>
            <filter id="squiggly-1">
              <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
            </filter>

            <filter id="squiggly-2">
              <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
            </filter>
            <filter id="squiggly-3">
              <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
            </filter>

            <filter id="squiggly-4">
              <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
            </filter>
          </defs>
        </svg>
      </v-row>
      <ul class="nav-btn-list">
        <global-button
          v-for="(item, i) in items"
          :key="i"
          :text="item.name"
          :href="`/#${item.id}`"
          :active="item.active">
          <template v-slot:icon>
            <v-icon size="28px" color="#a2a2a2" :icon="item.icon"/>
          </template>
        </global-button>

        <global-button text="Contact" href="mailto:shomi1773@gmail.com">
          <template v-slot:icon>
            <v-icon size="28px" color="#a2a2a2" :icon="mdiEmailOutline"/>
          </template>
        </global-button>
      </ul>
    </v-navigation-drawer>

    <v-main class="bg-body pb-8">
      <v-container :class="!$device.mobile && 'pa-0'">
        <v-btn
          style="z-index: 1000000000000000"
          position="fixed"
          color="transparent"
          flat
          icon @click="drawer = true;"
          v-if="$device.mobile || isLarge">
          <v-icon :icon="mdiMenu"></v-icon>
        </v-btn>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import GlobalButton from '@/components/global/button'
import {mdiMenu} from '@mdi/js'
</script>

<script>
import {useDisplay} from 'vuetify'
import {
  mdiHomeOutline,
  mdiBriefcaseOutline,
  mdiCardTextOutline,
  mdiLightbulbOnOutline,
  mdiProjectorScreenOutline,
  mdiEmailOutline
} from '@mdi/js'

export default {
  data: () => ({
    drawer: true,
    mdiEmailOutline,
    items: [
      {
        id: 'home',
        name: 'Home',
        icon: mdiHomeOutline,
        active: true
      },
      {
        id: 'about',
        name: 'About',
        icon: mdiCardTextOutline,
        active: false
      },
      {
        id: 'services',
        name: 'Services',
        icon: mdiBriefcaseOutline,
        active: false
      },
      {
        id: 'resume',
        name: 'Resume',
        icon: mdiProjectorScreenOutline,
        active: false
      },
      {
        id: 'portfolio',
        name: 'Portfolio',
        icon: mdiLightbulbOnOutline,
        active: false
      },
    ]
  }),
  created() {
    this.drawer = !this.$device.mobile && !useDisplay().lg.value;
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const activeElement = this.items.findLast(item => document.getElementById(item.id).getBoundingClientRect().top < 400)
      this.items.forEach(item => item.active = false);
      if (activeElement) activeElement.active = true;
    })
  },
  computed: {
    display() {
      return this.$vuetify.display.xl
    },
    isLarge() {
      return useDisplay().lg.value;
    }
  }
}
</script>

<style>

@media only screen and (max-width: 600px) {
  html {
    font-size: 13px !important;
  }
}

html {
  scroll-behavior: smooth;
}

.mp-subtitle {
  font-size: 1.25rem;
  font-weight: 500;
  color: #55e6a5;
  text-transform: uppercase;
}

.mp-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;
  line-height: 1.2;
}

h3 {
  font-size: 2rem;
}

.mp-description {
  font-size: 1.125rem;
  color: #a2a2a2;
}

a {
  text-decoration: none !important;
}

@media (min-width: 1520px) {
  .v-container {
    max-width: 1430px;
  }
}

.test {
  -webkit-animation: squiggly-anim 0.34s linear infinite;
  animation: squiggly-anim 0.34s linear infinite;
}
.test {
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  outline: none;
  text-align: center;
  line-height: 1;
  font-size: 40px;
}
@-webkit-keyframes squiggly-anim {
  0% {
    filter: url("#squiggly-0");
  }
  25% {
    filter: url("#squiggly-1");
  }
  50% {
    filter: url("#squiggly-2");
  }
  75% {
    filter: url("#squiggly-3");
  }
  100% {
    filter: url("#squiggly-4");
  }
}
@keyframes squiggly-anim {
  0% {
    filter: url("#squiggly-0");
  }
  25% {
    filter: url("#squiggly-1");
  }
  50% {
    filter: url("#squiggly-2");
  }
  75% {
    filter: url("#squiggly-3");
  }
  100% {
    filter: url("#squiggly-4");
  }
}

body::-webkit-scrollbar {
  display: none;
}
</style>
