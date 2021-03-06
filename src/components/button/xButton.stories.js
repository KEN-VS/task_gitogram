import xButton from './xButton.vue'

export default {
  title: 'xButton',
  component: { xButton },
  argTypes: {
    hoverText: {
      control: { type: 'text' }
    }
  }

}

const template = (args) => ({
  components: { xButton },
  data () {
    return { args }
  },
  template: `
    <x-button v-bind="args">Follow</x-button>
    `
})

export const Default = template.bind({ template })

Default.args = {
  hoverText: 'Unfollow'
}
