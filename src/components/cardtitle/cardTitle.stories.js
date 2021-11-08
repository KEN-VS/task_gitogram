import cardTitle from './cardTitle.vue'

export default {
  title: 'cardTitle',
  component: { cardTitle }
}

const template = () => ({
  components: { cardTitle },
  template: '<card-title title="Repository Name" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />'
})

export const Default = template.bind({ template })
