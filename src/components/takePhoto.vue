<template lang="html">
<div class="current-photo">
  <div class="canvas-wrapper">
    <canvas class="photos-canvas" :height="styleObj.height" :width="styleObj.width"/>
  </div>
  <button class="button button--capture" @click="takePhoto">Capture</button>
  <button class="button" @click="$emit('back')">Back</button>
</div>
</template>

<script>
export default {
  name: 'takePhoto',
  props: {
    video: {
      type: HTMLVideoElement,
      require: true,
    },
    styleObj: {
      type: Object,
      reauire: false,
    },
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
      context.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
      this.$emit('pushPhoto', {
        photo: this.canvas.toDataURL('image/png')
      });
    },
  },
}
</script>

<style lang="scss">
.button--capture:hover {
    background-color: #4f9b7a;
}
</style>
