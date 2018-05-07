<template>
  <div class='page'>
    <h1>{{ encode(page.title.rendered) }}</h1>
    <div v-html="page.content.rendered"></div>
  </div>
</template>

<script>
import axios from 'axios'
import config from '../../api/config'

export default {
  name: 'page',
  key: to => to.fullPath,
  transition: 'slidepage',
  async asyncData({ params }) {
    params.slug = params.slug.replace('-', '_')
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
    }
  }
}
</script>
<style lang="scss">
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
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

