<template>
  <div class="wrapper">
    <div class="menu-transition grid-1">
      <div class="col-5"></div>
      <div class="col-5"></div>
      <div class="col-2"></div>
    </div>
    <section class="header">
      <div class="header__logo">
        <nuxt-link to="/" tag="img" :src="this.logo" class="logo"></nuxt-link>
      </div>
      <div class="header__menu">
        <nuxt-link :to="slugToUrl('adherer')" tag="button" v-on:click.native="closeMenu()" v-if="this.anglais">Join</nuxt-link>
        <nuxt-link :to="slugToUrl('adherer')" tag="button" v-on:click.native="closeMenu()" v-else>Adhérer</nuxt-link>
        <div v-if="!this.anglais" href="" @click="setEn()">English</div>
        <div v-else href="" @click="setFr()">Français</div>
        <img v-if="!this.menu" src="~assets/menu-black.png" alt="" @click="toggleMenu()">
        <img v-else src="~assets/close.png" alt="" @click="toggleMenu()" class="menu__above">
      </div>
    </section>
    <section class="container grid-1">
      <div class="bg-lines grid-1">
        <div class="col-3"></div>
        <div class="col-3"></div>
        <div class="col-3"></div>
        <div class="col-3"></div>
      </div>
      <div class="content col-8_md-10_sm-12">
        <div>
          <nuxt-child :key="$route.fullPath" />
        </div>
      </div>
      <div class="bg col-4 md-hidden">
        <img src="~assets/home1.jpg" alt="">
      </div>
      <transition name="slide">
        <sidemenu v-if="this.menu" :pages="pages"></sidemenu>
      </transition>
    </section>
  </div>
</template>

<script>
import api from '../api/index'
import sidemenu from '../components/menu.vue'

const logoUrl = require('~/assets/logo.png')

export default {
  components: { sidemenu },
  async asyncData({ params }) {
    let { data } = await api.getPages()
    return {
      pages: data,
      logo: logoUrl
    }
  },
  head() {
    return {
      title: `Bureau des Arts de Sciences Po`,
      meta: [
        {
          name: 'description',
          content: 'This is the meta description of the content.'
        }
      ]
    }
  },
  data() {
    return {
      title: 'default'
    }
  },
  computed: {
    menu: function() {
      return this.$store.state.menu
    },
    anglais: function() {
      return this.$store.state.anglais
    }
  },
  methods: {
    slugToUrl(slug) {
      if (this.$store.state.anglais) {
        return `/${slug}-en`
      } else {
        return `/${slug}`
      }
    },
    toggleMenu: function() {
      this.$store.commit('MENU')
    },
    closeMenu: function() {
      this.$store.commit('MENUCLOSE')
    },
    setEn: function() {
      this.$store.commit('ANGLAIS')
      this.$router.push({ path: '/' })
      // if (process.browser) {
      //   this.$router.push({ path: this.$route.path + '-en' })
      // }
    },
    setFr: function() {
      this.$store.commit('FRANCAIS')
      this.$router.push({ path: '/' })
      // if (process.browser) {
      //   this.$router.push({ path: this.$route.path.replace('-en', '') })
      // }
    }
  }
}
</script>

<style lang="scss">
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}
@import '~assets/scss/gridlex.scss';
@font-face {
  font-family: 'Raleway Bold';
  src: url('~static/Raleway-Bold.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway Regular';
  src: url('~static/Raleway-Regular.ttf') format('truetype');
}
@font-face {
  font-family: 'PlayfairDisplay Bold';
  src: url('~static/PlayfairDisplay-Bold.ttf') format('truetype');
}

.wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

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
    margin: 0 4rem;
    img {
      width: auto;
      height: 50%;
      cursor: pointer;
    }
  }
  @media (max-width: 64em) {
    .header__logo {
      margin: 0 1rem;
    }
  }
  .header__menu {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 4rem;
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
      transition: all 0.2s ease;
      z-index: 1;
      &:hover {
        background: #fff;
        color: #ec7c74;
      }
    }
    @media (max-width: 64em) {
      button {
        position: absolute;
        left: 0;
        width: 100%;
        top: 20%;
        border-radius: 0;
        margin: 0;
        height: 3rem;
      }
    }
    img {
      height: auto;
      width: 1.5rem;
      margin-left: 1rem;
      cursor: pointer;
      z-index: 2;
    }
    div {
      margin: 0 1rem;
      cursor: pointer;
      font-family: 'Raleway Bold';
    }
    .menu__above {
      z-index: 2;
    }
  }
  @media (max-width: 64em) {
    .header__menu {
      margin: 0 1rem;
    }
  }
}
.container {
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  .bg-lines {
    width: 60%;
    height: 80vh;
    position: absolute;
    left: 4.5rem;
    z-index: -1;
    .col-3 {
      height: 100%;
      border-left: 1px solid #eeeeee;
    }
    .col-3--last {
      border-right: 1px solid #eeeeee;
    }
  }
  @media (max-width: 64em) {
    .bg-lines {
      display: none;
    }
  }
  .content {
    width: 65%;
    max-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 0 4rem;
    @media (max-width: 64em) {
      padding: 0;
    }
    div {
      width: 100%;
    }
  }
  .col-4 {
    width: 35%;
    height: 80vh;
    // display: flex;
    overflow: hidden;
    padding: 0 4rem 0 0;
    img {
      width: 100%;
      height: auto;
      max-height: calc(100% - 2rem);
      margin-top: 2rem;
      mask: url('~assets/mask.png');
      mask-size: 100% calc(80vh - 2rem);
    }
  }
}
.menu-transition {
  width: 35vw;
  height: 100%;
  position: absolute;
  right: 0.5rem;
  bottom: -100vh;
  z-index: 10;
  div {
    background-color: black;
    border-left: 1px solid rgba(51, 51, 51, 0.4);
    z-index: 10;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
.slidepage-enter-active,
.slidepage-leave-active {
  transition: all 0.5s ease;
}
.slidepage-enter,
.slidepage-leave-to {
  transform: translateY(20%);
  opacity: 0;
}
</style>
