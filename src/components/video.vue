<template lang="html">
  <div class="video-wrapper">
    <video class="video" :srcObject.prop="stream" autoplay>
    </video>
    <div class="canvas-wrapper">
      <canvas class="photos-canvas" />
    </div>
    <div class="current-photo-wrapper">
      <img :src="currentPhoto">
    </div>
    <button @click="takePhoto">take photo</button>
  </div>
</template>

<script>
export default {
  name: 'Video',
  props: {
    stream: {
      type: MediaStream,
      require: true,
    }
  },
  data() {
    return {
      canvas: undefined,
      video: undefined,
      currentPhoto: undefined,
    };
  },
  mounted() {
    this.canvas = this.$el.querySelector('.photos-canvas');
    this.video = this.$el.querySelector('.video');
  },
  methods: {
    takePhoto() {
      const context = this.canvas.getContext('2d');
      context.drawImage(this.video, 0, 0, 300, 150);
      this.currentPhoto = this.canvas.toDataURL('image/png');
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
