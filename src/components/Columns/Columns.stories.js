import Columns from './index.vue';

export default {
  title: 'Components/Columns',
  component: Columns,
  argTypes: {
    type: { control: { type: 'select', options: ['one', 'two', 'three', 'four', 'sixty-forty', 'forty-sixty'] } },
    centerVertically: {control: 'boolean'},
    mobileColumns: {control: 'boolean'},
  },
};

const MockSlot = '<div style="width: 100%; height: 100px; backgroundColor: green"></div><div style="width: 100%; height: 100px; backgroundColor: cyan"></div><div style="width: 100%; height: 100px; backgroundColor: yellow"></div><div style="width: 100%; height: 100px; backgroundColor: fuchsia"></div><div style="width: 100%; height: 100px; backgroundColor: orange"></div>'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Columns },
  template: `<columns v-bind="$props"> ${MockSlot} </columns>`,
});

export const Default = Template.bind({});

export const TwoColumn = Template.bind({});
TwoColumn.args = {
  type: 'two',
};

export const ThreeColumn = Template.bind({});
ThreeColumn.args = {
  type: 'three',
};

export const FourColumn = Template.bind({});
FourColumn.args = {
  type: 'four',
};

export const SixtyForty = Template.bind({});
SixtyForty.args = {
  type: 'sixty-forty',
};

export const FortySixty = Template.bind({});
FortySixty.args = {
  type: 'forty-sixty',
};