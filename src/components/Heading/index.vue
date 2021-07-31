<template>
    <h1 :class="classes" :style="styles">{{ text }}</h1>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    text: String,
    size: { 
        type: String, 
        default: 'medium',
    },
    colour: String,
    italic: Boolean,
  },
  computed: {
    classes() {
        return `heading heading--${this.size}`;
    },
    styles () {
        const fontStyle = this.italic ? 'italic' : 'normal';
        const color = this.colour || 'black';
        const styles = { color, fontStyle };
        return styles;
    },
  },
}
</script>

<style scoped>
.heading {
    text-align: left;
    font-family: 'Georama', Helvetica, Arial;
    margin: 0 0 8px;
}
.heading--x-small {
    font-size: 18px;
    font-weight: 300;
}
.heading--small {
    font-size: 22px;
    font-weight: 300;
}
.heading--medium {
    font-size: 24px;
    font-weight: 400;
}
.heading--large {
    font-size: 30px;
    font-weight: 400;
}
.heading--x-large {
    font-size: 36px;
    font-weight: 700;
}
</style>
