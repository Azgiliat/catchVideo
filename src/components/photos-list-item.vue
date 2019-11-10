<template lang="html">
  <li>
    <button class="photos__delete-btn" @click.prevent="$emit('del')">X</button>
    <img class="photos__img" :src="photo">
  </li>
</template>

<script>
export default {
  name: 'photos-list-item',
  props: {
    photo: {
      type: String,
      reauire: true,
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
