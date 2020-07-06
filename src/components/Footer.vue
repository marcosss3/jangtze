<template functional>
  <div class="footer">
    <img width="100" src="../assets/img/logo-white.png" class="footer__logo" />
    <div class="footer__content">
      <p class="body">Calle Alcalde Marcial Franco 3, San Fernando, 35100, Las Palmas</p>
      <p class="body">(+34) 928 77 01 80</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/styles";

.footer {
  background-color: #35383c;
  padding: 80px 0;

  &__logo {
    margin-bottom: 42px;
  }

  &__content {
    max-width: 50%;
    margin: 0 auto;
  }
}

.body {
  color: white;
  font-size: 16px;
  font-family: "Alegreya";
  margin-bottom: 8px;
}
</style>
