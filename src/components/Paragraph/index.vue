<template>
    <p :class="classes" :style="styles">{{ text }}</p>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    text: String,
    size: String,
    colour: String,
    italic: Boolean,
    bold: Boolean,
  },
  computed: {
    classes() {
       return `paragraph paragraph--${this.size}`;
    },
    styles () {
        const fontWeight = this.bold ? '400' : '300';
        const fontStyle = this.italic ? 'italic' : 'none';
        const color = this.colour || 'black';
        return { 
            color, 
            fontWeight,
            fontStyle,
        };
    },
  },
}
</script>

<style scoped>
.paragraph {
    text-align: left;
    font-weight: 300;
    margin: 0 0 8px;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}
.paragraph--small {
    font-size: 14px;
}
.paragraph--medium {
    font-size: 16px;
}
.paragraph--large {
    font-size: 18px;
}
</style>
