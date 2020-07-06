<template>
  <div class="accordion" :class="{ expanded: expanded }">
    <div class="accordion__header" @click="expanded = !expanded">
      <slot name="header" :expanded="expanded" />
    </div>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:leave="leave"
    >
      <div v-show="expanded" style="overflow: hidden;">
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    // Animation hooks
    beforeEnter(el) {
      el.style.height = "0";
      el.style.opacity = "0.5";
    },
    enter(el) {
      el.style.transition = "all .3s ease-out";
      // Sets height to 'auto' when scrollHeight is 1px due to v-cloak (happens when accordion was already expanded)
      el.style.height = el.scrollHeight > 1 ? `${el.scrollHeight}px` : "auto";
      el.style.opacity = 1;
    },
    afterEnter(el) {
      el.style.height = `${el.scrollHeight}px`;
      el.style.opacity = 1;
    },
    leave(el) {
      el.style.transition = "all .2s ease-out";
      el.style.height = "0";
      el.style.opacity = "0";
    },
  },
};
</script>

<style scoped lang="scss">
.accordion {
  &__header {
    cursor: pointer;
  }
}
</style>
