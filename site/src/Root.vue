<template>
  <div id="app" class="Root">
    <nav-sidebar></nav-sidebar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavSidebar from './components/NavSidebar.vue';

export default {
  name: 'Root',
  components: {
    NavSidebar,
  }
}
</script>

<style lang="stylus">
  @import './styles/root'
</style>
