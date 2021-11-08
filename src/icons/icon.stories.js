import icon from './icon.vue'

export default {
  title: 'icon',
  component: { icon }
}

const template = () => ({
  components: { xIcon: icon },
  template: '<x-icon />'
})
export const Default = template.bind({})
