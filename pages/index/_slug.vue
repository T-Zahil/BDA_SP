<template>
  <div class='page'>
    <h1>{{ encode(page.title.rendered) }}</h1>
    <div v-html="page.content.rendered"></div>
  </div>
</template>

<script>
import axios from 'axios'
import config from '../../api/config'
import anime from 'animejs'

export default {
  name: 'page',
  async asyncData({ params }) {
    let { data } = await axios.get(config.baseUrl + `pages?slug=${params.slug}`)
    return {
      page: data[0]
    }
  },
  methods: {
    encode(string) {
      if (process.browser) {
        var txt = document.createElement('textarea')
        txt.innerHTML = string
        return txt.value
      }
    },
    mounted() {
      var pageSlices = this.$el.querySelectorAll('.page-transition div')
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
  }
}
</script>
<style lang="scss">
.page {
  max-height: 80vh;
  overflow-y: scroll;
  padding-right: 4.5rem;
  h1 {
    font-family: 'PlayfairDisplay-Bold';
    font-size: 3rem;
    color: #1f1f1f;
    text-align: left;
    margin: 3rem 0;
  }
  p,
  li,
  a {
    font-family: 'Raleway Regular';
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 1rem;
    .aligncenter {
      margin: 0 auto;
      display: block;
    }
  }
}
</style>

