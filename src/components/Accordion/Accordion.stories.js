import Accordion from './index.vue';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    points: {control: 'array'},
  },
};

const mockSlot = '<p>Here is some mock content that should appear when the accordion is opened</p>'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Accordion },
  template: `<accordion v-bind="$props">${mockSlot}</accordion>`,
});

export const Default = Template.bind({});
Default.args = {
  heading: 'Heading',
};

