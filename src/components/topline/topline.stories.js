import topline from './topline.vue'

export default {
  title: 'topline',
  component: { topline }
}

const template = () => ({
  components: { topline },
  template: '<topline>Content</topline>'
})

export const Default = template.bind({ template })
