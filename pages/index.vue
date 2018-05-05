<template>
  <div class="wrapper">
    <div class="menu-transition grid-1">
      <div class="col-5"></div>
      <div class="col-5"></div>
      <div class="col-2"></div>
    </div>
    <section class="header">
      <!-- <categories :categories="categories"></categories> -->
      <div class="header__logo">
        <img class="logo" src="~assets/logo.png">
      </div>
      <div class="header__menu">
        <button>Adhérer</button>
        <img v-if="!this.menu" src="~assets/menu-black.png" alt="" @click="animMenu()">
        <img v-else src="~assets/close.png" alt="" @click="animMenu()" class="menu__above">
      </div>
    </section>
    <section class="container grid-1">
      <div class="bg-lines grid-1">
        <div class="col-3"></div>
        <div class="col-3"></div>
        <div class="col-3"></div>
        <div class="col-3"></div>
      </div>
      <div class="content col-8">
        <div class="post">
          <h1>We live in interesting times.</h1>
          <p>
            The media business is in uncharted waters. Traditional models are broken. But the basics haven’t changed. Organizations need to know who they are, what they stand for, and what they’re here to do. They need to distinguish themselves by making every interaction a meaningful experience.
          </p>
          <p>And they need to supply an increasingly distracted audience with stories that are relevant and trustworthy. In a shaky time, these unshakeable truths drive everything we do.</p>
          </p>
        </div>
      </div>
      <div class="bg col-4">
        <img src="~assets/home1.jpg" alt="">
      </div>
      <transition name="fade">
        <sidemenu v-if="this.menu"></sidemenu>
      </transition>
      <!-- <post-list v-if="posts" :posts="posts" title="Recent Posts"></post-list> -->
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '../api/index'
import postList from '../components/postList.vue'
import recentPosts from '../components/recentPosts.vue'
import categories from '../components/categories.vue'
import sidemenu from '../components/menu.vue'
import anime from 'animejs'

export default {
  components: { postList, categories, recentPosts, sidemenu },
  async asyncData({ params }) {
    let { data } = await api.getPosts()

    return {
      posts: data
    }
  },
  head() {
    return {
      title: `Nuxt WordPress | Home`,
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
      title: 'default',
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
}
.container {
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .bg-lines {
    width: 65%;
    height: 80vh;
    position: absolute;
    left: 4.5rem;
    z-index: -1;
    .col-3 {
      border-left: 1px solid #eeeeee;
    }
  }
  .content {
    width: 65%;
    max-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 110px 0px 70px;
    h1 {
      font-family: 'PlayfairDisplay-Bold';
      font-size: 3rem;
      color: #1f1f1f;
      text-align: left;
      margin-bottom: 2rem;
    }
    p {
      font-family: 'Raleway Regular';
      font-size: 1rem;
      line-height: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
  .bg {
    width: 35%;
    height: 80vh;
    display: flex;
    overflow: hidden;
    padding: 0 4.5rem 0 0;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
