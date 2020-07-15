<template>
  <div class="banner" @scroll="blur">
    <img ref="img" class="banner-img" src="../assets/img/img-1.jpg" />
    <div class="banner-overlay">
      <div class="banner-text">
        <img
          width="100"
          src="../assets/img/logo-white.png"
          class="banner__logo"
        />
        <p class="banner__logo-label">JANGTZE</p>
        <p class="banner__logo-description">RESTAURANTE CHINO</p>
        <b-icon-chevron-down class="icon" @click="scroll"></b-icon-chevron-down>
      </div>
    </div>
  </div>
</template>

<script>
import { BIconChevronDown } from "bootstrap-vue";

export default {
  name: "Banner",
  components: {
    BIconChevronDown,
  },
  created() {
    window.addEventListener("scroll", this.blur);
  },
  methods: {
    blur() {
      if (window.pageYOffset > 100) {
        this.$refs.img.setAttribute(
          "style",
          `-webkit-filter:blur(${window.pageYOffset / 60}px)`
        );
      } else {
        this.$refs.img.setAttribute("style", "-webkit-filter:blur(0)");
      }
    },
    scroll() {
      document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped lang="scss">
.banner {
  position: relative;
  overflow: hidden;

  &-img {
    object-fit: cover;
    object-position: 80%;
    height: 100vh;
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

  &__logo {
    width: 160px;
    margin-bottom: 20px;

    &-label {
      font-size: 32px;
      font-family: "Cinzel", serif;
      font-weight: 700;
      color: white;
      letter-spacing: 5px;
      margin-bottom: 8px;
    }

    &-description {
      color: white;
      font-size: 24px;
      letter-spacing: 2px;
      line-height: 32px;
    }
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

.icon {
  color: white;
  font-size: 40px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.6;
    transition: all 0.3s;
  }
}

@media screen and (min-width: 992px) {
  .banner {
    &-img {
      object-position: center;
    }

    &__logo {
      width: 220px;

      &-label {
        font-size: 42px;
      }

      &-description {
        font-size: 28px;
        letter-spacing: 3px;
      }
    }
  }

  .icon {
    font-size: 56px;
    margin-top: 16px;
  }
}
</style>
