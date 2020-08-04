<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  overflow-x: hidden;
  background-color: $base-color-background;
}
</style>
