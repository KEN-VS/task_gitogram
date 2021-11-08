import userCard from './userCard.vue'

export default {
  title: 'userCard',
  component: { userCard },
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
  components: { userCard },
  data: () => {
    return { args }
  },
  template: '<userCard :useravatar="args.avatar" :username="args.name"/>'
})

export const Default = template.bind({ template })

Default.args = {
  avatar: 'https://cdn.pixabay.com/photo/2020/10/26/15/46/autumn-5687698_960_720.jpg',
  name: 'Username'
}
