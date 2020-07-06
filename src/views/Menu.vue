<template>
  <div>
    <div class="menu__banner">
      <img class="menu__banner-img" src="../assets/img/img-1.jpg" />
      <div class="menu__banner-overlay">
        <div class="menu__banner-text">
          <h1 class="banner-heading">MENU</h1>
        </div>
      </div>
    </div>

    <div class="container menu__content">
      <p class="body">
        Aquí encontrará nuestro menú a la carta. También disponemos de un menú
        del día.
      </p>
      <p class="body">
        Nuestros platos pueden contener alérgenos, por favor consulte al
        camarero.
      </p>
      <div class="row">
        <div class="col">
          <ul>
            <li
              v-for="category in categories"
              :key="category"
              class="menu__category"
            >
              <accordion>
                <template v-slot:header="props">
                  <div class="menu__category-label">
                    <span class="menu__category-label--filler"></span>
                    <h4>{{ category }}</h4>
                    <span class="menu__category-label--toggle">{{
                      props.expanded ? "−" : "+"
                    }}</span>
                  </div>
                </template>
                <template v-slot:content>
                  <ul class="menu__category-items">
                    <li
                      v-for="dish in getDishesFromCategory(category)"
                      :key="dish.name"
                      class="menu__dish"
                    >
                      <span>{{ capitalise(dish.name) }}</span>
                      <span class="menu__dish-dots"></span>
                      <span>{{ dish.price }}€</span>
                    </li>
                  </ul>
                </template>
              </accordion>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from "../components/Accordion.vue";

import menu from "../assets/data/menu.json";

export default {
  name: "Menu",
  components: {
    Accordion,
  },
  data() {
    return {
      menu,
      expanded: false,
    };
  },
  computed: {
    categories() {
      return Array.from(new Set(menu.map((a) => a.description)));
    },
  },
  methods: {
    capitalise(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    },
    getDishesFromCategory(string) {
      return this.menu.filter((item) => {
        return item.description === string;
      });
    },
  },
};
</script>

<style scoped lang="scss">
.menu {
  &__banner {
    position: relative;

    &-img {
      object-fit: cover;
      height: 320px;
      width: 100%;
      vertical-align: top;
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
    }

    &-text {
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
    }
  }

  &__content {
    margin: 56px auto;
  }

  &__category {
    &:last-of-type {
      border-bottom: 1px solid;
    }

    &-label {
      display: flex;
      justify-content: space-between;
      align-content: center;
      align-items: center;
      border-style: solid;
      border-width: 0;
      border-top-width: 1px;
      padding: 6px 0;
      transition: all 150ms ease-out;

      &--filler {
        width: 28px;
      }

      &--toggle {
        align-self: flex-end;
        font-size: 28px;
        font-weight: 300;
        width: 30px;
      }

      h4 {
        font-family: "Alegreya", serif;
        font-size: 20px;
        letter-spacing: 3px;
        margin: 0;
      }
    }

    &-items {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding: 10px 0;
      border-top: 1px solid;
    }
  }

  &__dish {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    width: 100%;
    font-family: "Neuzeit Office Soft Rounded", "Helvetica Neue", sans-serif;

    &-dots {
      flex-grow: 1;
      margin: 0 6px 6px;
      border-style: dotted;
      border-width: 0px;
      border-bottom-width: 1px;
    }
  }
}

.banner-heading {
  color: white;
  font-family: "Lato", "Helvetica Neue", sans-serif;
  font-size: 32px;
  font-weight: 300;
  letter-spacing: 12px;
  padding: 12px 28px 12px 36px;
  border: 1px solid white;
}

.body {
  width: 90%;
  margin: 0 auto 36px auto;
}

@media screen and (min-width: 768px) {
  .menu {
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
</style>
