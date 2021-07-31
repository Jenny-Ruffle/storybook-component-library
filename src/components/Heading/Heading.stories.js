import Heading from './index.vue';

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    text: {control: 'string'},
    colour: { control: 'color' },
    italic: {control: 'boolean'},
    size: { control: { type: 'select', options: ['x-small', 'small', 'medium', 'large', 'x-large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Heading },
  template: '<heading v-bind="$props" />',
});

const text = 'Heading';

export const Default = Template.bind({});
Default.args = {
  text,
};

export const XSmall = Template.bind({});
XSmall.args = {
  size: 'x-small',
  text,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  text,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  text,
};

export const XLarge = Template.bind({});
XLarge.args = {
  size: 'x-large',
  text,
};

export const Italic = Template.bind({});
Italic.args = {
  italic: true,
  text,
};