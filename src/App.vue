<template>
  <div id="app">
    <div class="header">
      <div class="container" style="height: 100%;">
        <div class="header__content">
          <div class="header__logo">
            <img width="32" height="32" src="./assets/img/logo.png" />
            <span class="header__logo-label">JANGTZE</span>
          </div>
        </div>
      </div>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue"

export default {
  name: "App",
  components: {
    Footer,
  }
};
</script>

<style scoped lang="scss">
@import "./assets/scss/styles";

#app {
  font-family: "Neuzeit Office Soft Rounded", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #212529;
}

.header {
  background-color: $bg-secondary;
  height: 60px;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #ddd;
  z-index: 999;

  &__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  &__logo {
    display: flex;
    flex-direction: row;
    align-items: center;

    &-label {
      font-size: 20px;
      font-family: "Cinzel", serif;
      font-weight: 700;
      color: $primary;
      letter-spacing: 3px;
      margin-left: 8px;
    }
  }
}

.footer {
  background-color: $body-1;
}
</style>
