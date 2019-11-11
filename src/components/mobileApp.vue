<template>
<div class="container">
  <button class="mobile-btn" v-for="btn in buttons" @click="currentComponent = btn.data">{{btn.text}}</button>
  <transition name="slide" mode="out-in">
    <component :is="currentComponent" v-bind="currentProp" class="slider-element" @pushPhoto="pushPhoto" />
  </transition>
</div>
</template>

<script>
import Video from './video.vue';
import Photos from './photos.vue';
export default {
  name: 'mobileApp',
  components: {
    Video,
    Photos,
  },
  data() {
    return {
      buttons: [{
        text: 'Камера',
        data: 'Video',
      }, {
        text: 'Снимки',
        data: 'Photos',
      }],
      stream: null,
      currentComponent: 'Video',
      photos: [],
    }
  },
  computed: {
    currentProp() {
      if(this.currentComponent === 'Video') return {
        stream: this.stream
      };
      if(this.currentComponent === 'Photos') return {
        photos: this.photos
      };
    }
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
.video-wrapper {
    width: 100%;
}
.video {
    width: 100%;
    height: auto;
}
.slider-element {
    transition: all 0.5s;
}
.slide-enter {
    opacity: 0;
    transform: translateX(100vw);
};
.slide-leave-to {
    transform: translateX(-100vw);
    opacity: 0;
}
</style>
