<template>
  <li>
    <a
      class="nav-btn text_hover_animation"
      :class="active && 'active'"
      :href="href">
      <span>
        <slot name="icon"></slot>
      </span>
      <div style="position:relative;display:inline-block;" class="menu-text">
        <template v-for="char in characters">
          <div style="position:relative;display:inline-block;">{{ char }}</div>
        </template>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    characters() {
      return this.text.split('')
    }
  }
}
</script>

<style lang="scss">

@media only screen and (max-width: 600px) {
  .nav-btn-list {
    padding: 8px !important;
    padding-top: 0px !important;

    .nav-btn {
      margin-top: 8px !important;
    }
  }
}

.nav-btn-list {
  list-style: none;
  padding: 30px;
  max-height: 730px;
  overflow: hidden;
  overflow-y: auto;
  transition: all linear 0.6s;
  -webkit-transition: all linear 0.6s;
  -moz-transition: all linear 0.6s;
  -ms-transition: all linear 0.6s;
  -o-transition: all linear 0.6s;
  display: flex;
  flex-direction: column;
  margin: auto !important;

  .nav-btn:hover, .nav-btn.active {
    div {
      color: #55e6a5;
    }

    span {
      background: #55e6a5;

      svg {
        path {
          fill: #09101a;
        }
      }
    }
  }

  .nav-btn {
    border-radius: 5px !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    display: block;
    margin-top: 30px;
    font-weight: 500;
    font-size: 0.875rem;
    cursor: pointer;
    line-height: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0;
    background: none !important;
    transition: all linear 0.6s;
    -webkit-transition: all linear 0.6s;
    -moz-transition: all linear 0.6s;
    -ms-transition: all linear 0.6s;
    -o-transition: all linear 0.6s;

    span {
      display: inline-block;
      width: 60px;
      height: 60px;
      padding: 15px;
      line-height: 25px;
      text-align: center;
      border-radius: 5px;
      margin-right: 17px;
      font-size: 1.5rem;
      transition: all linear 0.6s;
      -webkit-transition: all linear 0.6s;
      -moz-transition: all linear 0.6s;
      -ms-transition: all linear 0.6s;
      -o-transition: all linear 0.6s;
      background: #222831;
    }

    .menu-text {
      display: -webkit-box;
      display: -ms-flexbox;
      overflow: hidden;
      text-shadow: 0 16px 0 #55e6a5;
      display: flex;
      color: #a2a2a2;
      margin-left: 8px;
    }
  }
}

.text_hover_animation {
  line-height: 15px;
}

.text_hover_animation:hover .menu-text div:nth-child(1) {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}

.text_hover_animation:hover .menu-text div:nth-child(2) {
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

.text_hover_animation:hover .menu-text div:nth-child(3) {
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
}

.text_hover_animation:hover .menu-text div:nth-child(4) {
  -webkit-transition-delay: 0.4s;
  transition-delay: 0.4s;
}

.text_hover_animation:hover .menu-text div:nth-child(5) {
  -webkit-transition-delay: 0.5s;
  transition-delay: 0.5s;
}

.text_hover_animation:hover .menu-text div:nth-child(6) {
  -webkit-transition-delay: 0.6s;
  transition-delay: 0.6s;
}

.text_hover_animation:hover .menu-text div:nth-child(7) {
  -webkit-transition-delay: 0.7s;
  transition-delay: 0.7s;
}

.text_hover_animation:hover .menu-text div:nth-child(8) {
  -webkit-transition-delay: 0.8s;
  transition-delay: 0.8s;
}

.text_hover_animation:hover .menu-text div:nth-child(9) {
  -webkit-transition-delay: 0.9s;
  transition-delay: 0.9s;
}

.text_hover_animation:hover .menu-text div:nth-child(10) {
  -webkit-transition-delay: 1s;
  transition-delay: 1s;
}

.text_hover_animation:hover .menu-text div:nth-child(11) {
  -webkit-transition-delay: 1.1s;
  transition-delay: 1.1s;
}
</style>
