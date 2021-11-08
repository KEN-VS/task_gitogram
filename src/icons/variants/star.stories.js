import svg from './star.vue'

export default {
  title: 'svg',
  component: { svg }
}

const template = () => ({
  components: { xSvg: svg },
  template: '<x-svg />'
})

export const Default = template.bind({ template })
