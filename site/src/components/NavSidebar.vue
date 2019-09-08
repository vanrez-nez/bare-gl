<template>
  <nav class="NavSidebar">
    <router-link
      v-for="(demo, index) in demos"
      :key="index"
      :to="{ name: demo.slug }"
    >{{ demo.title }}</router-link>
  </nav>
</template>

<script>
import demos from '../demos.json';

export default {
  name: 'NavSidebar',
  data() {
    return {
      demos,
    }
  }
}
</script>
