<template>
<div class="container">
  <div class="video-wrapper">
    <video class="video" autoplay>
    </video>
  </div>
</div>
</template>

<script>
export default {
  name: 'mobileApp',
  data() {
    return {
      stream: null,
    }
  },
  created() {
    navigator.mediaDevices.getUserMedia({
        video: true,
      })
      .then((stream) => {
        this.$el.querySelector('.video')
          .srcObject = stream;
        this.stream = stream;
      })
      .catch((err) => {
        console.error(err);
      });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.video-wrapper {
    width: 100%;
}
</style>
