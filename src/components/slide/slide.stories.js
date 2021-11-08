import slide from './slide.vue'
import userCard from '../userCard/userCard.vue'
import progress from '../progress/progress.vue'
import xButton from '../button/xButton.vue'

export default {
    title: 'slide',
    component: { slide },
    subComponents: { userCard, progress, xButton },
    argTypes: {
        name: {
            type: 'text'
        },
        avatar: {
            type: 'text'
        },
        image: {
            type: 'text'
        }
    }
}

const template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { slide },
    data: () => {
        return { args }
    },
    template: `<slide v-bind="args" />`
})

export const Default = template.bind({ template })

Default.args = {
    avatar: 'https://cdn.pixabay.com/photo/2020/10/26/15/46/autumn-5687698_960_720.jpg',
    name: 'Username',
    image: 'https://cdn.pixabay.com/photo/2020/10/26/15/46/autumn-5687698_960_720.jpg'
}