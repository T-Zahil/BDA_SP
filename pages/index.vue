<template>
  <div>
    <section class="header">
      <!-- <categories :categories="categories"></categories> -->
      <div class="header__logo">
        <img class="logo" src="~assets/logo.png">
      </div>
      <div class="header__menu">
        <button>Adhérer</button>
        <img src="~assets/search-black.png" alt="">
        <img src="~assets/menu-black.png" alt="">
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

export default {
  components: { postList, categories, recentPosts },
  async asyncData({ params }) {
    // We can use async/await ES6 feature
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
      title: 'default'
    }
  },
  mounted() {
    if (this.categories.length === 0) {
      this.$store.dispatch('getCategories')
    }
  },
  computed: {
    ...mapGetters(['categories'])
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
    }
    img {
      height: 1rem;
      margin-left: 0.5rem;
      cursor: pointer;
    }
  }
}
.container {
  .bg-lines {
    width: 65%;
    height: 80vh;
    position: absolute;
    left: 4rem;
    z-index: -1;
    .col-3 {
      border-left: 1px solid #eeeeee;
    }
  }
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>
