import StickyVerticalCarousel from './index.vue';
import images from '../../assets/images'

export default {
  title: 'Components/StickyVerticalCarousel',
  component: StickyVerticalCarousel,
  argTypes: {
    images: {control: 'array'},
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { StickyVerticalCarousel },
  template: '<sticky-vertical-carousel v-bind="$props" />',
});


export const Default = Template.bind({});
Default.args = {
  images,
};
