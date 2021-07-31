<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
export default {
  name: 'custom-button',

  props: {
    colour: {
      type: String,
    },
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
  },

  computed: {
    classes() {
      return {
        'custom-button': true,
        [`custom-button--${this.size}`]: true,
      };
    },
    style() {
      const defaultButtonColour = this.primary ? '#6195b6' : 'white';
      const border = this.primary ? 'none' : '1px solid #c7c7c7';
      const backgroundColor = this.colour || defaultButtonColour;
      return {
        backgroundColor,
        color: this.primary ? 'white' : 'black',
        border,
      };
    },
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>


<style scoped>
.custom-button {
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 500;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}

.custom-button:hover {
  opacity: 0.95;
}

.custom-button--small {
  font-size: 12px;
  padding: 8px 16px;
}
.custom-button--medium {
  font-size: 14px;
  padding: 10px 20px;
}
.custom-button--large {
  font-size: 16px;
  padding: 12px 24px;
}

</style>