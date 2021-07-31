import Paragraph from './index.vue';

export default {
  title: 'Components/Paragraph',
  component: Paragraph,
  argTypes: {
    text: {control: 'string'},
    colour: { control: 'color' },
    italic: {control: 'boolean'},
    bold: {control: 'boolean'},
    size: { control: { type: 'select', options: ['x-small', 'small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Paragraph },
  template: '<paragraph v-bind="$props" />',
});

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin nisl at justo placerat, sed accumsan ipsum finibus. Nullam non ultrices ante. Donec lobortis nisl sed ullamcorper pretium. Nulla consequat dictum ornare. Ut eu mauris iaculis, semper ipsum sed, venenatis lacus. Mauris non eleifend urna. Integer placerat quam tellus, vel pellentesque dui commodo elementum.';

export const Default = Template.bind({});
Default.args = {
  text,
};

export const Italic = Template.bind({});
Italic.args = {
  italic: true,
  text,
};

export const Bold = Template.bind({});
Bold.args = {
  bold: true,
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
