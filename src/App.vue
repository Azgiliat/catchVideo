<template>
<div v-resize="resize" id="app">
  <desktopApp />
</div>
</template>

<script>
import desktopApp from './components/desktopApp.vue';
export default {
  name: 'app',
  components: {
    desktopApp,
  },
  data() {
    return {
      isMobile: 'desktopApp',
    };
  },
  methods: {
    resize() {
      window.matchMedia('(min-width: 768px)')
        .matches ? this.isMobile = 'desktopApp' : this.isMobile = 'mobileApp';
    }
  },
  created() {
    window.matchMedia('(min-width: 768px)')
      .matches ? this.isMobile = 'desktopApp' : this.isMobile = 'mobileApp';
  },
}
</script>

<style lange="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.rebuild-enter,
.rebuild-leave-to {
  opacity: 0;
  transform: translateX(10%);
}
</style>
