<template>
  <div>
    <Banner />
    <Menu />

    <!--
    <div class="menu__gallery">
      <div class="menu__gallery-wrapper">
        <img src="../assets/img/img-2.jpg" />
      </div>
      <div class="menu__gallery-wrapper">
        <img src="../assets/img/img-3.jpg" />
      </div>
      <div class="menu__gallery-wrapper">
        <img src="../assets/img/img-5.jpg" />
      </div>
      <div class="menu__gallery-wrapper">
        <img src="../assets/img/img-4.jpg" />
      </div>
    </div>
    -->

    <div class="menu__banner">
      <img src="../assets/img/img-8.jpeg" />
      <div class="menu__banner-overlay">
        <p class="menu__banner-heading">Comida para llevar</p>
      </div>
    </div>

    <div class="container timetable__content">
      <div class="row">
        <div class="col">
          <h2 class="timetable__content-heading">Horario</h2>
          <p class="body--large mb-4">
            Abrimos todos los días, incluyendo festivos.
          </p>
          <h4 class="timetable__day">De lunes a sábado</h4>
          <p class="timetable__time">12:30 − 16:00</p>
          <p class="timetable__time">19:00 − 00:00</p>
          <h4 class="timetable__day mt-4">Domingo (y festivos)</h4>
          <p class="timetable__time">13:00 − 00:00</p>
        </div>
      </div>
    </div>

    <div class="menu__gallery">
      <div class="menu__gallery-wrapper">
        <img src="../assets/img/img-14.jpeg" />
      </div>
      <div class="menu__gallery-wrapper">
        <img src="../assets/img/img-2.jpg" />
      </div>
      <div class="menu__gallery-wrapper">
        <img src="../assets/img/img-5.jpg" />
      </div>
      <div class="menu__gallery-wrapper">
        <img src="../assets/img/img-4.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner";
import Menu from "./Menu";

import menu from "../assets/data/menu.json";

export default {
  name: "Main",
  components: {
    Banner,
    Menu,
  },
  data() {
    return {
      menu,
      expanded: false,
    };
  },
  computed: {
    categories() {
      return Array.from(new Set(menu.map((a) => a.category)));
    },
  },
  methods: {
    capitalise(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    },
    getDishesFromCategory(string) {
      return this.menu.filter((item) => {
        return item.category === string;
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

.container {
  margin: 56px auto;
}

.menu {
  &__banner {
    overflow: hidden;
    position: relative;

    & img {
      object-fit: cover;
      object-position: center;
      height: 220px;
      width: 150%;
    }

    &-overlay {
      background-color: rgba(0, 0, 0, 0.3);
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-heading {
      color: white;
      font-family: Cinzel;
      letter-spacing: 3px;
      font-size: 28px;
      line-height: 32px;
      width: 80%;
    }
  }

  &__gallery {
    display: flex;
    flex-wrap: wrap;

    &-wrapper {
      max-height: 250px;
      width: 50%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      width: auto;
      height: auto;
      min-width: 100%;
      min-height: 300px;
      max-width: 130%;
      max-height: 130%;
      object-fit: cover;
    }
  }
}

.timetable {
  &__content {
    &-heading {
      font-family: "Alegreya";
      font-weight: bold;
      margin-bottom: 24px;
    }
  }

  &__day {
    font-family: "Alegreya";
    font-weight: bold;
    font-size: 1.25rem;
  }

  &__time {
    font-size: 1.25rem;
    margin-bottom: 2px;
  }
}

@media screen and (min-width: 768px) {
  .menu {
    &__banner {
      & img {
        height: 300px;
      }

      &-heading {
        font-size: 52px;
        line-height: 40px;
      }
    }

    &__dish {
      width: 50%;

      &:nth-child(odd) {
        padding-right: 24px;
      }
      &:nth-child(even) {
        padding-left: 24px;
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .menu {
    &__banner {
      & img {
        height: 400px;
        width: 100%;
      }
    }

    &__accordion {
      max-width: 832px;
    }

    &__gallery {
      &-wrapper {
        width: 25%;
        max-height: 300px;
      }
    }
  }
}
</style>
