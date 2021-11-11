<template>
<div class="slide__wrapper">
  <div class="slide__progress">
    <progress />
  </div>
  <user-card
      :useravatar="useravatar"
      :username="username"
  />
  <div class="slide__img">
    <img class="slide__pic" :src="slidepic" alt="slide image">
  </div>
  <div class="slide__content">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vero voluptatum nesciunt repudiandae. Explicabo, nesciunt sapiente voluptatem sequi expedita eos amet fugiat natus animi quo molestias, mollitia dolor quis veritatis.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vero voluptatum nesciunt repudiandae. Explicabo, nesciunt sapiente voluptatem sequi expedita eos amet fugiat natus animi quo molestias, mollitia dolor quis veritatis.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vero voluptatum nesciunt repudiandae. Explicabo, nesciunt sapiente voluptatem sequi expedita eos amet fugiat natus animi quo molestias, mollitia dolor quis veritatis.</p>
  </div>
  <div class="slide__btn-wrapper">
    <x-button />
  </div>
</div>
</template>

<script>
import { progress } from '../../components/progress'
import { xButton } from '../../components/xButton'
import { userCard } from '../../components/usercard'

export default {
  name: 'slide',
  components: {
    progress,
    xButton,
    userCard
  },
  props: {
    slidepic: {
      type: String,
      required: true
    },
    useravatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style src='./slide.scss' lang='scss' scoped>
</style>
