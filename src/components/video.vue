<template lang="html">
  <div class="video-wrapper">
    <video class="video" :srcObject.prop="stream" autoplay>
    </video>
    <takePhoto @pushPhoto="pushPhoto" :video="video"/>
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
    };
  },
  mounted() {
    this.video = this.$el.querySelector('.video');
  },
  methods: {
    pushPhoto(amount) {
      this.$emit('pushPhoto', amount);
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
