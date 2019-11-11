<template lang="html">
  <div class="container">
    <Video @pushPhoto="pushPhoto" :stream="stream"/>
    <Photos :photos="photos"/>
  </div>
</template>

<script>
import Video from './video.vue';
import Photos from './photos.vue';
export default {
  name: 'desktopApp',
  components: {
    Video,
    Photos,
  },
  data() {
    return {
      stream: undefined,
      photos: [],
    };
  },
  methods: {
    pushPhoto(amount) {
      this.photos = [...this.photos, amount.photo];
    },
  },
  created() {
    navigator.mediaDevices.getUserMedia({
        video: true,
      })
      .then((stream) => {
        this.stream = stream;
      })
      .catch((err) => {
        console.error(err);
      });
  },
}
</script>

<style lang="scss">
</style>
