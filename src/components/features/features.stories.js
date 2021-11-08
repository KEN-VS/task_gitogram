import features from './features.vue'

export default {
  title: 'features',
  component: { features }
}

const template = () => ({
  components: { features },
  template: '<features stars=165 fork=4 />'
})

export const Default = template.bind({ template })
