import navigation from './navigation.vue'
import icon from '../../icons/icon.vue'

export default {
  title: 'navigation',
  component: { navigation },
  subcomponents: { icon }
}

const template = () => ({
  components: { navigation },
  template: '<navigation />'
})

export const Default = template.bind({ template })
