<template lang="html">
  <div class="video-wrapper" v-resize="resize">
    <video @canplay="videoRdy" class="video" :srcObject.prop="stream" autoplay>
    </video>
    <takePhoto v-if="canPlay" @pushPhoto="pushPhoto" :video="video" :styleObj="styleObj" />
  </div>
</template>

<script>
import takePhoto from './takePhoto.vue';
export default {
  name: 'Video',
  props: {
    stream: {
      type: MediaStream,
      require: true,
    }
  },
  components: {
    takePhoto,
  },
  data() {
    return {
      video: undefined,
      styleObj: {
        width: 0,
        height: 0,
      },
      canPlay: false,
    };
  },
  mounted() {
    this.video = this.$el.querySelector('.video');
  },
  methods: {
    pushPhoto(amount) {
      this.$emit('pushPhoto', amount);
    },
    videoRdy() {
      this.styleObj = {
        width: `${this.video.clientWidth}px`,
        height: `${this.video.clientHeight}px`,
      };
      this.canPlay = true;
    },
    resize() {
      this.styleObj = {
        width: `${this.video.clientWidth}px`,
        height: `${this.video.clientHeight}px`,
      };
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
