<template>
  <div class="base-div">
    <div class="footer-links">
      <span v-for="(obj, idx) in footer_links" :key="idx">
        <router-link v-bind:to="obj.url">{{ obj.text }}</router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseHomePageFooter",
  data() {
    return {
      footer_links: [
        { text: "关于轻语", url: "/about" },
        { text: "联系我们", url: "/test" },
        { text: "加入我们", url: "/test" },
        { text: "轻语出版", url: "/test" },
        { text: "品牌与徽标", url: "/test" },
        { text: "帮助中心", url: "/test" },
        { text: "合作伙伴", url: "/test" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
span {
  margin-right: 10px;
}
</style>
