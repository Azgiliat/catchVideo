<template>
<div id="app">
  <transition name="rebuild" mode="out-in">
    <component :is="isMobile" />
  </transition>
</div>
</template>

<script>
import mobileApp from './components/mobileApp.vue';
import desktopApp from './components/desktopApp.vue';
export default {
  name: 'app',
  components: {
    mobileApp,
    desktopApp,
  },
  data() {
    return {
      isMobile: 'desktopApp',
    };
  },
  created() {
    setInterval(() => {
      window.matchMedia('(min-width: 768px)')
        .matches ? this.isMobile = 'desktopApp' : this.isMobile = 'mobileApp';
    }, 200);
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

.container {
  transition: all 0.5s;
  max-width: 750px;
  margin: 0 auto;
}

.rebuild-enter,
.rebuild-leave-to {
  opacity: 0;
  transform: translateX(10%);
}
</style>
