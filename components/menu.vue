<template>
  <div class='menu'>
    <div class="page-transition grid-1">
      <div class="col-2"></div>
      <div class="col-4"></div>
      <div class="col-4"></div>
      <div class="col-4"></div>
      <div class="col-4"></div>
    </div>
    <div class="menu__header"></div>
    <div class="menu__content">
      <div class="content__bg-lines grid-1">
        <div class="col-5"></div>
        <div class="col-5"></div>
        <div class="col-2"></div>
      </div>
      <div class="content__nav">
        <div class="nav__block">
          <h3 v-if="anglais">About</h3>
          <h3 v-else>À propos</h3>
          <nuxt-link :to="slugToUrl(item.slug)" v-for="item in pages" :key="item.slug" v-if="anglais && item.parent == 65646 && item.slug.includes('-en')" v-on:click.native="toggleMenu()">
            {{ encode(item.title) }}
          </nuxt-link>
          <nuxt-link :to="slugToUrl(item.slug)" v-for="item in pages" :key="item.slug" v-if="!anglais && item.parent == 65646 && !item.slug.includes('-en')" v-on:click.native="toggleMenu()">
            {{ encode(item.title) }}
          </nuxt-link>
        </div>
        <div class="nav__block">
          <h3 v-if="anglais">Our activities</h3>
          <h3 v-else>Nos activités</h3>
          <nuxt-link :to="slugToUrl(item.slug)" v-for="item in pages" :key="item.slug" v-if="anglais && item.parent == 2113 && item.slug.includes('-en')" v-on:click.native="toggleMenu()">
            {{ encode(item.title) }}
          </nuxt-link>
          <nuxt-link :to="slugToUrl(item.slug)" v-for="item in pages" :key="item.slug" v-if="!anglais && item.parent == 2113 && !item.slug.includes('-en')" v-on:click.native="toggleMenu()">
            {{ encode(item.title) }}
          </nuxt-link>
        </div>
        <div class="nav__block">
          <h3 v-if="anglais">Others</h3>
          <h3 v-else>Autres</h3>
          <nuxt-link :to="slugToUrl(item.slug)" v-for="item in pages" :key="item.slug" v-if="anglais && item.parent == 65658 && item.slug.includes('-en')" v-on:click.native="toggleMenu()">
            {{ encode(item.title) }}
          </nuxt-link>
          <nuxt-link :to="slugToUrl(item.slug)" v-for="item in pages" :key="item.slug" v-if="!anglais && item.parent == 65658 && !item.slug.includes('-en')" v-on:click.native="toggleMenu()">
            {{ encode(item.title) }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidemenu',
  props: ['pages'],
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
      return `/${slug}`
    },
    toggleMenu: function() {
      this.$store.commit('MENU')
    },
    encode(string) {
      var txt = document.createElement('textarea')
      txt.innerHTML = string
      return txt.value
    }
  }
}
</script>

<style lang="scss">
.menu {
  width: 35vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  background-color: #1f1f1f;
  transition: all 0.2s ease;
  @media (max-width: 64em) {
    width: 100%;
    z-index: 1;
  }
  .page-transition {
    width: calc(60% + 4rem);
    height: 100%;
    position: fixed;
    left: 0.5rem;
    top: 100vh;
    z-index: 10;
    div {
      background-color: black;
      border-left: 1px solid rgba(51, 51, 51, 0.4);
      z-index: 10;
    }
    .col-2 {
      width: 4rem;
      flex-basis: auto;
    }
    .col-4 {
      flex-basis: calc(25% - 1rem);
    }
  }
  .menu__header {
    width: 100%;
    height: 20vh;
    background-color: #212222;
  }
  @media (max-width: 64em) {
    .menu__header {
      display: none;
    }
  }
  .menu__content {
    width: 100%;
    height: 80vh;
    overflow: scroll;
    position: relative;
    padding-right: 4.5rem;
    @media (max-width: 64em) {
      padding-right: 1rem;
      height: 100vh;
    }
    .content__bg-lines {
      width: 100%;
      height: 100%;
      position: absolute;
      margin: 0;
      left: 0;
      top: 0;
      z-index: -1;
      .col-5,
      .col-2 {
        border-left: 1px solid rgba(51, 51, 51, 0.4);
      }
    }
    .content__nav {
      height: 100%;
      display: flex;
      flex-direction: column;
      background-image: url('../assets/zigwigwi.png');
      background-position-x: 90%;
      background-size: auto 100%;
      background-repeat: no-repeat;
      @media (max-width: 64em) {
        // margin-top: 3rem;
      }
      .nav__block {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-right: 3px;
        margin: 0.75rem 0;
        @media (max-width: 64em) {
          align-items: center;
          &:first-child {
            margin-top: 3rem;
          }
        }
        h3 {
          font-family: 'Raleway Bold';
          font-size: 1.1rem;
          color: #ffffff;
          margin: 1.15rem 0;
          @media (max-width: 64em) {
            font-size: 1.5rem;
          }
        }
        a,
        div {
          height: 1.3rem;
          display: flex;
          align-items: center;
          font-family: 'Raleway Regular';
          font-size: 0.9rem;
          color: #c9c9c9;
          text-decoration: none;
          margin: 0.15rem 0;
          cursor: pointer;
          transition: 0.2s all ease;
          &:hover {
            font-family: 'Raleway Bold';
            font-size: 1.3rem;
            color: #ec7c74;
            text-shadow: -1.5rem 0px 1px #2f2f2f;
          }
          @media (max-width: 64em) {
            font-size: 1.1rem;
          }
        }
      }
    }
  }
}
</style>

