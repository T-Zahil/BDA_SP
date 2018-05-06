<template>
  <div class='header'>
    <div class="header__logo">
      <img class="logo" src="~assets/logo.png">
    </div>
    <div class="header__menu">
      <button>Adhérer</button>
      <img v-if="!this.menu" src="~assets/menu-black.png" alt="" @click="animMenu()">
      <img v-else src="~assets/close.png" alt="" @click="animMenu()" class="menu__above">
    </div>
    <transition name="fade">
      <sidemenu v-if="this.menu" :pages="pages"></sidemenu>
    </transition>
    <div class="menu-transition grid-1">
      <div class="col-5"></div>
      <div class="col-5"></div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '../api/index'
import sidemenu from '../components/menu.vue'
import anime from 'animejs'

export default {
  components: { sidemenu },
  async asyncData({ params }) {
    let { data } = await api.getPages()

    return {
      pages: data
    }
  },
  data() {
    return {
      menu: false
    }
  },
  mounted() {
    if (this.categories.length === 0) {
      this.$store.dispatch('getCategories')
    }
  },
  computed: {
    ...mapGetters(['categories'])
  },
  methods: {
    toggleMenu: function() {
      this.menu = !this.menu
    },
    animMenu: function() {
      var menuSlices = this.$el.querySelectorAll('.menu-transition div')
      var instance = this
      anime({
        targets: menuSlices,
        translateY: '-100%',
        easing: 'linear',
        duration: function(el, i, l) {
          return 200 + i * 200
        },
        complete: function() {
          instance.toggleMenu()
          anime({
            targets: menuSlices,
            translateY: '100%',
            easing: 'linear',
            delay: 500,
            duration: function(el, i, l) {
              return 600 + i * 600
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
.header {
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fbfbfb;
  text-align: center;
  .header__logo {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 4.5rem;
    img {
      width: auto;
      height: 50%;
    }
  }
  .header__menu {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 4.5rem;
    z-index: 2;
    button {
      border: 2px solid #ec7c74;
      background: #ec7c74;
      border-radius: 44px;
      font-size: 1rem;
      font-family: 'Raleway Bold';
      padding: 0.25rem 2rem;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      margin: 0 0.5rem;
      cursor: pointer;
      z-index: 1;
    }
    img {
      height: auto;
      width: 1.5rem;
      margin-left: 1rem;
      cursor: pointer;
    }
    .menu__above {
      z-index: 1;
    }
  }
  .menu-transition {
    width: 35vw;
    height: 100%;
    position: fixed;
    right: 0.5rem;
    bottom: -100vh;
    z-index: 10;
    div {
      background-color: black;
      border-left: 1px solid rgba(51, 51, 51, 0.4);
      z-index: 10;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
