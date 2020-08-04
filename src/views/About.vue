<template>
  <div class="about">
    <BaseNavBar></BaseNavBar>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import BaseNavBar from "@/components/BaseNavBar.vue";

export default {
  name: "About",
  components: {
    BaseNavBar
  }
};
</script>
