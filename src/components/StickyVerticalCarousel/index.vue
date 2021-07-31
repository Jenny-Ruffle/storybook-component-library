<template>
  <div class="sticky-container">
    <div class="sticky-column">
      <img class="image-block" :src="images[0]" />
    </div>
    <div class="sticky-column">
      <div  v-for="(slide, index) in verticalSlides" class="slide-wrapper" :key="index">
        <img :src="slide" class="slide-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StickySlides',
  props: {
    images: Array,
  },
  computed: {
    verticalSlides() {
      const slides = this.images.slice(1, this.images.length);
      return slides;
    }
  },
}
</script>

<style scoped>
.sticky-container {
  position: relative;
  display: block;
  width: 100%;
}

.sticky-column {
  position: relative;
  width: 100%;
  top: 0;
  height: max-content;
  display: block;
  justify-content: center;
}

.image-block {
  width: 100%;
  object-fit: cover;
  height: 100vh;
}

.slide-wrapper {
  width: 100%;
  height: 100vh;
  padding: 0;
}

.slide-image {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

@media(min-width: 768px) {
  .sticky-container {
    display: flex;
  }
  .sticky-column {
    position: sticky;
    width: 50%;
  }
  .slide-wrapper {
    padding: 10% 20%;
  }
  .slide-image {
    width: 60%;
    height: 80%;
  }
}
</style>