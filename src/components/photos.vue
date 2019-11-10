<template lang="html">
  <ul class="photos-wrapper photos">
    <li v-for="(photo, index) in photos" :key="index">
      <img :src="photo">
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Photos',
  props: {
    photos: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {};
  },
}
</script>

<style lang="scss">
</style>
