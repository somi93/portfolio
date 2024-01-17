import {createStore} from 'vuex'

export const store = createStore({
  state() {
    return {
      count: 1,
      projects: [
        {
          id: 1,
          client: 'ITWeb',
          date: 'Jun 2023 - December 2023',
          technology: 'Nuxt 3, Vue 3 (Composition API)',
          name: 'ITWeb',
          description: "Daily technology news portal, recognised as the most trusted voice in South African IT publishing and is the first port of call for an audience that ranges from technology professionals to CEOs.",
          img: '/src/assets/portfolio/itweb.png',
          link: 'itweb.co.za',
          fullLink: 'https://www.itweb.co.za',
          technologies: [
            'Nuxt 3',
            'Vue 3 (Composition API)',
            'Vuetify.js',
            'SCSS'
          ],
        },
        {
          id: 2,
          client: 'Coachify',
          date: 'August 2020 - October 2021',
          name: 'Coachify',
          img: '/src/assets/portfolio/coachify.png',
          link: 'coachify.cloud',
          fullLink: 'https://coachify.cloud',
          technologies: [
            'Nuxt 2',
            'Vue 2',
            'Vuetify.js',
            'SCSS'
          ]
        },
        {
          id: 3,
          client: 'BitLab',
          date: 'February 2022 - November 2023',
          name: "Worktime",
          img: '/src/assets/portfolio/worktime.png',
          link: 'worktime.bitlab.host',
          fullLink: 'https://worktime.bitlab.host/',
          technologies: [
            'Nuxt 2',
            'Vue 2',
            'Vuetify.js',
            'SCSS'
          ]
        },
        {
          id: 4,
          client: 'Rapchat',
          date: 'February 2019 - July 2019',
          description: "The Rapchat app is the easiest way to record songs on your phone used by millions around the world with over 200,000 free beats and instrumentals at your fingertips.",
          name: 'Rapchat',
          img: '/src/assets/portfolio/rapchat.png',
          link: 'www.rapchat.com',
          fullLink: 'https://www.rapchat.com',
          technologies: [
            'Vue 2',
            'Bootstrap-Vue',
            'Stylus'
          ]
        },
        {
          id: 5,
          client: 'ITWeb',
          date: 'February 2023 - Jun 2023',
          name: 'Security summit 2023',
          img: '/src/assets/portfolio/ss2023.png',
          link: 'www.itweb.co.za/event/itweb-security-summit-2023',
          fullLink: 'https://www.itweb.co.za/event/itweb-security-summit-2023',
          technologies: [
            'Nuxt 2',
            'Vue 2',
            'Firebase',
            'Vuetify.js',
            'SCSS'
          ]
        },
        {
          id: 6,
          client: 'ITWeb',
          name: 'ITWeb Africa',
          date: 'January 2020 - September 2020',
          img: '/src/assets/portfolio/itweb-africa.png',
          link: 'itweb.africa',
          fullLink: 'https://itweb.africa',
          technologies: [
            'Nuxt 2',
            'Vue 2',
            'Vuetify.js',
            'SCSS'
          ]
        },
      ]
    }
  }
})






