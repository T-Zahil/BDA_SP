<template>
  <div class='page'>
    <div v-if="$store.state.anglais">
      <h1>Texte par défaut</h1>
      <p>
        ANGLAIS
      </p>
      <p>And they need to supply an increasingly distracted audience with stories that are relevant and trustworthy. In a shaky time, these unshakeable truths drive everything we do.</p>
    </div>
    <div v-else>
      <h1>Texte par défaut</h1>
      <p>
        The media business is in uncharted waters. Traditional models are broken. But the basics haven’t changed. Organizations need to know who they are, what they stand for, and what they’re here to do. They need to distinguish themselves by making every interaction a meaningful experience.
      </p>
      <p>And they need to supply an increasingly distracted audience with stories that are relevant and trustworthy. In a shaky time, these unshakeable truths drive everything we do.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-default',
  key: to => to.fullPath,
  transition: 'slidepage'
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
