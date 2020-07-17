<template>
  <div>
    <div class="container menu__content">
      <div class="row">
        <div class="col">
          <h2 id="menu" class="menu__content-heading">Nuestra Carta</h2>
          <div class="menu__content-body">
            <p class="body--large">
              Aquí encontrará nuestro menú a la carta. También disponemos de un
              menú del día.
            </p>
            <p class="body--large mb-5">
              Nuestros platos pueden contener alérgenos, por favor consulte al
              camarero.
            </p>
          </div>
          <div class="menu__options">
            <button
              class="menu__option"
              :class="{ active: option === 'comida' }"
              @click="option = 'comida'"
            >
              COMIDA
            </button>
            <button
              class="menu__option"
              :class="{ active: option === 'bebida' }"
              @click="option = 'bebida'"
            >
              BEBIDA
            </button>
          </div>

          <template v-if="option === 'comida'">
            <div class="menu__content-allergens">
              <div class="menu__content-allergens--item">
                <img
                  class="menu__content-allergens--icon"
                  src="../assets/img/egg.jpg"
                />
                <p class="menu__content-allergens--label body">
                  Huevos
                </p>
              </div>
              <div class="menu__content-allergens--item">
                <img
                  class="menu__content-allergens--icon"
                  src="../assets/img/gluten.jpg"
                />
                <p class="menu__content-allergens--label body">
                  Gluten
                </p>
              </div>
              <div class="menu__content-allergens--item">
                <img
                  class="menu__content-allergens--icon"
                  src="../assets/img/nuts.jpg"
                />
                <p class="menu__content-allergens--label body">
                  Frutos secos
                </p>
              </div>
              <div class="menu__content-allergens--item">
                <spicy class="menu__content-allergens--icon" />
                <p class="menu__content-allergens--label body">
                  Picante
                </p>
              </div>
            </div>
            <ul class="menu__accordion">
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
                      <span class="menu__category-label--toggle">
                        {{ props.expanded ? "−" : "+" }}
                      </span>
                    </div>
                  </template>
                  <template v-slot:content>
                    <ul class="menu__category-items">
                      <li
                        v-for="dish in getDishesFromCategory(category)"
                        :key="dish.name"
                        class="menu__dish"
                      >
                        <div class="menu__dish-container">
                          <div class="menu__dish-allergens">
                            <img
                              v-if="dish.egg === 'TRUE'"
                              class="menu__dish-allergens-item"
                              src="../assets/img/egg.jpg"
                            />
                            <img
                              v-if="dish.gluten === 'TRUE'"
                              class="menu__dish-allergens-item"
                              src="../assets/img/gluten.jpg"
                            />
                            <img
                              v-if="dish.nuts === 'TRUE'"
                              class="menu__dish-allergens-item"
                              src="../assets/img/nuts.jpg"
                            />
                          </div>
                          <span class="menu__dish-name">
                            {{ capitalise(dish.name) }}
                          </span>
                        </div>
                        <spicy
                          v-if="dish.spicy === 'TRUE'"
                          class="menu__dish-spicy"
                        />
                        <span class="menu__dish-dots"></span>
                        <span class="menu__dish-price">{{ dish.price }}€</span>
                      </li>
                    </ul>
                  </template>
                </accordion>
              </li>
            </ul>
          </template>

          <template v-if="option === 'bebida'">
            <ul class="menu__accordion">
              <li
                v-for="category in drinkCategories"
                :key="category"
                class="menu__category"
              >
                <accordion>
                  <template v-slot:header="props">
                    <div class="menu__category-label">
                      <span class="menu__category-label--filler"></span>
                      <h4>{{ category }}</h4>
                      <span class="menu__category-label--toggle">
                        {{ props.expanded ? "−" : "+" }}
                      </span>
                    </div>
                  </template>
                  <template v-slot:content>
                    <ul class="menu__category-items">
                      <li
                        v-for="dish in getDrinksFromCategory(category)"
                        :key="dish.name"
                        class="menu__dish"
                      >
                        <span class="menu__dish-name">
                          {{ capitalise(dish.name) }}
                        </span>
                        <span class="menu__dish-dots"></span>
                        <span>{{ dish.price }}€</span>
                      </li>
                    </ul>
                  </template>
                </accordion>
              </li>
            </ul>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from "./Accordion";
import Spicy from "./Spicy";

import menu from "../assets/data/menu.json";
import drinks from "../assets/data/drinks.json";

export default {
  name: "Menu",
  components: {
    Accordion,
    Spicy,
  },
  data() {
    return {
      menu,
      drinks,
      option: "comida",
    };
  },
  computed: {
    categories() {
      return Array.from(new Set(menu.map((a) => a.category)));
    },
    drinkCategories() {
      return Array.from(new Set(drinks.map((a) => a.category)));
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
    getDrinksFromCategory(string) {
      return this.drinks.filter((item) => {
        return item.category === string;
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

.container {
  margin: 38px auto 56px;
}

.menu {
  &__content {
    &-heading {
      font-family: "Alegreya";
      font-weight: bold;
      margin-bottom: 24px;
      padding-top: 20px;
    }

    &-body {
      width: 90%;
      margin: 0 auto;
    }

    &-allergens {
      margin: 40px auto;
      display: flex;
      justify-content: center;
      width: 90%;

      &--item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
      }

      &--icon {
        width: 36px;
        height: auto;
      }

      &--label {
        padding: 10px 16px 0;
        margin: 0;
        font-weight: bold;
      }
    }
  }

  &__options {
    margin-bottom: 42px;
  }

  &__option {
    outline: 0;
    background: 0;
    border: 1px solid rgb(150, 150, 150);
    color: rgb(150, 150, 150);
    font-family: Alegreya;
    letter-spacing: 2px;
    padding: 10px 18px;
    margin: 0 16px;

    &:hover {
      background-color: $body-1;
      border-color: $body-1;
      color: white;
      transition: all 0.2s;
    }

    &.active {
      border-color: $body-1;
      color: $body-1;

      &:hover {
        color: white;
      }
    }
  }

  &__accordion {
    width: 90%;
    margin: 0 auto;
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
        font-size: 16px;
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
    align-items: flex-end;
    padding: 8px 0;
    width: 100%;

    &-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    &-allergens {
      display: flex;
      height: 18px;

      &-item {
        width: 18px;
        margin-right: 4px;
      }
    }

    &-name {
      white-space: nowrap;
    }

    &-spicy {
      margin-left: 6px;
      margin-bottom: 6px;
    }

    &-dots {
      flex-grow: 1;
      margin: 0 6px 6px;
      border-style: dotted;
      border-width: 0px;
      border-bottom-width: 1px;
    }
  }
}

.timetable {
  &__day {
    font-weight: bold;
    font-size: 1.125rem;
  }

  &__time {
    font-size: 1.25rem;
    margin-bottom: 2px;
  }
}

@media screen and (min-width: 992px) {
  .menu {
    &__accordion {
      width: 92%;
      max-width: 850px;
    }

    &__dish {
      width: 50%;

      &:nth-child(odd) {
        padding-right: 24px;
      }
      &:nth-child(even) {
        padding-left: 24px;
      }

      &-allergens {
        height: 24px;
        margin-bottom: 2px;

        &-item {
          width: 24px;
          margin-right: 6px;
        }
      }
    }

    &__content {
      &-allergens {
        &--item {
          width: auto;
          padding: 12px 20px 0;
        }

        &--icon {
          width: 42px;
        }
      }
    }
  }
}
</style>
