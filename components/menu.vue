<template>
  <div class='menu'>
    <div class="menu__header">

    </div>
    <div class="menu__content">
      <div class="content__bg-lines grid-1">
        <div class="col-5"></div>
        <div class="col-5"></div>
        <div class="col-2"></div>
      </div>
      <div class="content__nav">
        <div class="nav__block">
          <h3>À propos</h3>
          <a href="">Qu'est-ce que le BDA ?</a>
          <a href="">L'équipe</a>
          <a href="">Engagez-vous</a>
          <a href="">Partenaires</a>
        </div>
        <div class="nav__block">
          <h3>Nos activités</h3>
          <a href="">Lorem Ipsum</a>
          <a href="">L'équipe</a>
          <a href="">Engagez-vous</a>
          <a href="">Partenaires</a>
        </div>
        <div class="nav__block">
          <h3>Les cours du BDA</h3>
        </div>
        <div class="nav__block">
          <h3>À propos</h3>
          <a href="">Qu'est-ce que le BDA ?</a>
          <a href="">L'équipe</a>
          <a href="">Engagez-vous</a>
          <a href="">Partenaires</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu'
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
  .menu__header {
    width: 100%;
    height: 20vh;
    background-color: #212222;
  }
  .menu__content {
    width: 100%;
    max-height: 80vh;
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
        a {
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

