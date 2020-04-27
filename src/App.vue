<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./assets/component/homepage/header.vue";
import Home from "./assets/component/homepage/home.vue";

export default {
  name: "App",
  components: {
    appHeader: Header,
    appHome: Home,
  },
  methods : {
    handleSyles () {
      if (['/login'].includes(this.$route.path)) document.body.style.backgroundColor = '#262424'
      else document.body.style.backgroundColor = 'white'
    }
  },
  mounted() {
    this.handleSyles()
  },
  watch : {
    '$route'() {
      this.handleSyles()
    }
  }
};
</script>

<style></style>
