<template lang="html">
<div class="current-photo">
  <div class="canvas-wrapper">
    <canvas class="photos-canvas" />
  </div>
  <button @click="takePhoto">take photo</button>
</div>
</template>

<script>
export default {
  name: 'takePhoto',
  props: {
    video: {
      type: HTMLVideoElement,
      require: true,
    }
  },
  data() {
    return {
      canvas: undefined,
    };
  },
  mounted() {
    this.canvas = this.$el.querySelector('.photos-canvas');
  },
  methods: {
    takePhoto() {
      const context = this.canvas.getContext('2d');
      context.drawImage(this.video, 0, 0, 300, 150);
      this.$emit('pushPhoto', {
        photo: this.canvas.toDataURL('image/png')
      });
    },
  },
}
</script>

<style lang="scss">
</style>
