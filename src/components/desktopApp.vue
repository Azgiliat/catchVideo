<template lang="html">
  <div class="container">
    <div class="photos" v-if="!camera">
      <button class="button desktop-btn" v-for="btn in photosButtons" @click="btn === 'Open camera' ? turnOnCamera() : clearHistory()">{{btn}}</button>
      <Photos :photos="photos"/>
    </div>
    <div class="camera" v-else>
      <Video @pushPhoto="pushPhoto" @back="camera = false" :stream="stream"/>
    </div>
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
      photosButtons: ['Open camera', 'Clear history'],
      cameraButtons: ['Back'],
      camera: false,
      photos: [],
    };
  },
  methods: {
    pushPhoto(amount) {
      this.photos = [...this.photos, amount.photo];
    },
    turnOnCamera() {
      this.camera = true;
    },
    clearHistory() {
      this.photos = [];
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
.button {
    border: none;
    background-color: transparent;
    font-size: 2rem;
    color: #ffffff;
    background-color: #bcbcbc;
    transition: background-color 0.5s;
    border-radius: 8px;
    outline: none;
    padding: 0.5rem;

    &.activeBtn {
        background-color: #4f9b7a;
    }
}
</style>
