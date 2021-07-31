import BulletPoints from './index.vue';

export default {
  title: 'Components/BulletPoints',
  component: BulletPoints,
  argTypes: {
    points: {control: 'array'},
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BulletPoints },
  template: '<bullet-points v-bind="$props" />',
});

const points = ['Bullet point','Another bullet point', 'This bullet point is a bit longer than the others', 'And this bullet point is much longer than the others and might even drop to two lines on some breakpoints','This is the last bullet point'];

export const Default = Template.bind({});
Default.args = {
  points,
};

