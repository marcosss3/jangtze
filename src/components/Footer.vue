<template>
  <div class="footer">
    <img width="100" src="../assets/img/logo-white.png" class="footer__logo" />
    <p class="footer__logo-label">JANGTZE</p>
    <div class="footer__content">
      <a href="https://goo.gl/maps/1CqJNVKjV2c78sek9" class="body">
        <b-icon-geo-alt class="icon"></b-icon-geo-alt>
        Calle Alcalde Marcial Franco 3, San Fernando, 35100, Las Palmas
      </a>
      <a href="tel:928770180" class="body">
        <b-icon-phone class="icon"></b-icon-phone>
        (+34) 928 77 01 80
      </a>
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
    max-width: 50%;
    margin: 0 auto;
  }
}

.icon {
  margin-right: 4px;
}

.body {
  display: block;
  color: white;
  font-size: 16px;
  font-family: "Alegreya", serif;
  margin-bottom: 16px;

  &:hover {
    color: white;
  }
}
</style>
