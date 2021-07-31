import StickySlides from './index.vue';
import images from '../../assets/images'

export default {
  title: 'Components/StickySlides',
  component: StickySlides,
  argTypes: {
    slides: {control: 'array'},
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { StickySlides },
  template: '<sticky-slides v-bind="$props" />',
});


export const Default = Template.bind({});
Default.args = {
  slides: images,
};
