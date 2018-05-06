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
          <h3>À propos</h3>
          <div v-for="item in pages" :key="item.id" v-if="item.parent == 65646" @click="changePage(item.slug)">
            {{ encode(item.title) }}
          </div>
        </div>
        <div class="nav__block">
          <h3>Nos activités</h3>
          <a href="" v-for="item in pages" :key="item.id" v-if="item.parent == 2113">
            <nuxt-link :to="slugToUrl(item.slug)">{{ encode(item.title) }}</nuxt-link>
          </a>
        </div>
        <div class="nav__block">
          <h3>Autres</h3>
          <a href="" v-for="item in pages" :key="item.id" v-if="item.parent == 65658">
            <nuxt-link :to="slugToUrl(item.slug)">{{ encode(item.title) }}</nuxt-link>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'sidemenu',
  props: ['pages'],
  methods: {
    slugToUrl(slug) {
      return `/${slug}`
    },
    encode(string) {
      var txt = document.createElement('textarea')
      txt.innerHTML = string
      return txt.value
    },
    changePage(slug) {
      this.$router.push({ path: `/${slug}` })
      var pageSlices = this.$el.querySelectorAll('.page-transition div')
      anime({
        targets: pageSlices,
        translateY: '-100%',
        easing: 'linear',
        duration: function(el, i, l) {
          return 50 + i * 50
        },
        complete: function() {
          anime({
            targets: pageSlices,
            translateY: '100%',
            easing: 'linear',
            delay: 700,
            duration: function(el, i, l) {
              return 200 + i * 200
            }
          })
        }
      })
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
  .menu__content {
    width: 100%;
    height: 80vh;
    overflow: scroll;
    position: relative;
    padding-right: 4.5rem;
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
      .nav__block {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-right: 3px;
        margin: 0.75rem 0;
        h3 {
          font-family: 'Raleway Bold';
          font-size: 1.1rem;
          color: #ffffff;
          margin: 1.15rem 0;
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
        }
      }
    }
  }
}
</style>

