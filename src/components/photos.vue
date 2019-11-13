<template lang="html">
  <ul class="photos-wrapper photos">
    <transition-group name="remove">
      <photosListItem class="photos__list-item" v-for="(photo, index) in photos" :key="photo" :photo="photo" @del="photos.splice(index, 1)" />
    </transition-group>
  </ul>
</template>

<script>
import photosListItem from './photos-list-item.vue';
export default {
  name: 'Photos',
  components: {
    photosListItem,
  },
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
.photos-wrapper {
    list-style: none;
    padding: 0;
}
.photos__list-item {
    transition: all 1s;
}
.remove-leave-to {
    transform: rotateZ(-90deg) translateY(100vh);
    opacity: 0;
}
.remove-leave-active {
    position: absolute;
}
</style>
