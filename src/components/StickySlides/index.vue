<template>
  <div class="slides-container">
      <div v-for="(slide, index) in slides" class="slide-wrapper" :style="getZIndex(index)" :key="index">
        <img class="slide-image" :src="slide"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'StickySlides',
  props: {
    slides: Array,
  },
  methods: {
    getZIndex(index) {
      const zIndex = (index + 1) * 2;
      return { 
          zIndex,
      };
    },
  },
}
</script>

<style scoped>
.slides-container {
  scroll-snap-type: y proximity;
  position: relative;
  overflow: scroll;
  height: 100vh;
}
.slide-wrapper {
  width: 100%;
  scroll-snap-align: start;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
}
.slide-image{
  width: 100%;
  object-fit: cover;
  height: 100vh;
}
</style>