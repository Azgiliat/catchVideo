<template lang="html">
  <div class="video-wrapper">
    <video class="video" :srcObject.prop="stream" autoplay>
    </video>
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
}
</script>

<style lang="scss" scoped>
</style>
