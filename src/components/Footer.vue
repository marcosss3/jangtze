<template>
  <div class="footer">
    <img width="100" src="../assets/img/logo-white.png" class="footer__logo" />
    <p class="footer__logo-label">JANGTZE</p>
    <div class="footer__content">
      <a href="https://goo.gl/maps/1CqJNVKjV2c78sek9" class="body">
        <b-icon-geo-alt class="icon"></b-icon-geo-alt>
        Calle Alcalde Marcial Franco 3, San Fernando, Maspalomas, 35100
      </a>
      <div class="footer__content-phone">
        <b-icon-phone class="icon"></b-icon-phone>
        <a href="tel:928770180" class="body">
          928 77 01 80
        </a>
        <p class="body ml-1 mr-1">/</p>
        <a href="tel:928770180" class="body">
          928 76 55 87
        </a>
      </div>
      <p class="body">(Comida para llevar)</p>
    </div>
  </div>
</template>

<script>
import { BIconGeoAlt, BIconPhone } from "bootstrap-vue";

export default {
  name: "Footer",
  components: {
    BIconGeoAlt,
    BIconPhone,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/styles";

.footer {
  background-color: #35383c;
  padding: 80px 0;

  &__logo {
    margin-bottom: 16px;

    &-label {
      font-size: 24px;
      font-family: "Cinzel", serif;
      font-weight: 700;
      color: white;
      letter-spacing: 3px;
      margin-bottom: 48px;
    }
  }

  &__content {
    max-width: 60%;
    margin: 0 auto;

    &-phone {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 24px;
    }
  }
}

.icon {
  margin-right: 4px;
  color: white;
}

.body {
  display: block;
  color: white;
  font-size: 16px;
  font-family: "Alegreya", serif;
  margin-bottom: 0;

  &:hover {
    color: white;
  }
}
</style>
