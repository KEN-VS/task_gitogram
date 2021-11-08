import storyUserItem from './storyUserItem.vue'

export default {
  title: 'storyUserItem',
  component: { storyUserItem },
  argTypes: {
    name: {
      type: 'text'
    },
    avatar: {
      type: 'text'
    }
  }
}

const template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { storyUserItem },
  data: () => {
    return { args }
  },
  template: '<storyUserItem :avatar="args.avatar" :username="args.name"/>'
})

export const Default = template.bind({ template })

Default.args = {
  avatar: 'https://cdn.pixabay.com/photo/2020/10/26/15/46/autumn-5687698_960_720.jpg',
  name: 'Username'
}
