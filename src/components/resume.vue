<template>
  <v-row
    id="resume"
    :class="!$device.mobile ? lg ? 'mt-15 pt-13' : 'px-15 pt-13 mt-15' : ''"
    align="center"
    justify="center">
    <v-col cols="12" md="12" xl="9" class="pb-0 text-center" :class="$device.mobile ? 'mb-5 mt-8' : 'mb-15'">
      <p class="mp-subtitle">
        My Resume
      </p>
      <p class="mp-title mt-4">
        Shaping My Future
      </p>
    </v-col>
    <v-col cols="12" md="12" xl="10">
      <div class="developer-resume__tab-menu">
        <ul>
          <li
            v-for="(tab, i) in tabs"
            :key="i"
            class="has_fade_anim"
            data-fade-from="left"
            data-delay="0.5"
            @click="setActiveTab(tab)"
            style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);">
            <span
              :class="tab.active && 'active'"
              :data-rel="`resume-tab-${i + 1}`">
              {{ tab.name }}
            </span>
          </li>
        </ul>
      </div>
      <component :is="activeTab"></component>
    </v-col>
  </v-row>
</template>

<script setup>
import { useDisplay } from 'vuetify'
const {lg} = useDisplay();
</script>

<script>
import {defineAsyncComponent} from "vue";

export default {
  data: () => ({
    tabs: [
      {
        name: 'Education',
        active: true
      },
      {
        name: 'Experience',
        active: false
      },
      {
        name: 'Skills',
        active: false
      },
      {
        name: 'CV',
        active: false
      },
    ]
  }),
  methods: {
    setActiveTab(tab) {
      this.tabs.forEach(tab => tab.active = false);
      tab.active = true;
    }
  },
  computed: {
    activeTab() {
      const activeTab = this.tabs.find(tab => tab.active)
      const path = './resume/' + activeTab.name.toLowerCase()
      const component = () => import(path);
      return defineAsyncComponent(component);
    }
  }
}
</script>

<style lang="scss">

@media only screen and (max-width: 600px) {
  .developer-resume__tab-menu {
    ul {
      gap: 0 !important;
      height: 36px !important;
      border-radius: 16px !important;
      margin-bottom: 30px !important;
      li {
        span {
          padding: 8px !important;
          font-size: 0.9rem !important;
        }
      }
    }
  }
}

.developer-resume__tab-menu {
  ul {
    gap: 10px;
    display: flex;
    height: 60px;
    max-width: 100%;
    border-radius: 30px;
    margin: 0 auto 60px;
    background-color: #09101a;

    li {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
      text-align: center;
      transition: color 200ms;
      list-style: none;
      cursor: pointer;

      span {
        display: inline-block;
        padding: 18px;
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.5;
        color: #fff;
        border-radius: 100px;
        width: 100%;
        position: relative;
        text-transform: uppercase;
        transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
        overflow: hidden;
        text-decoration: none;

        &::before {
          position: absolute;
          top: 0px;
          right: 0px;
          height: 100%;
          width: 0px;
          z-index: -1;
          content: "";
          border-radius: 100px;
          background-color: #09101a;
          transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1) 0s;
        }

        &:hover {
          background-color: #55e6a5;
          transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1) 0s;
          color: #151c25;

          &::before {
            left: 0%;
            right: auto;
            width: 100%;
          }
        }

        &.active {
          transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1) 0s;
          color: #151c25;
          background-color: #55e6a5;
        }
      }
    }
  }
}
</style>
