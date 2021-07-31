import CustomButton from './index.vue';

export default {
  title: 'Components/Button',
  component: CustomButton,
  argTypes: {
    primary: {control: 'boolean'},
    colour: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CustomButton },
  template: '<custom-button @onClick="onClick" v-bind="$props" />',
});

const buttonLabel = 'Click click';

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: buttonLabel,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: buttonLabel,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: buttonLabel,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: buttonLabel,
};
