<template>
  <div class="wrapper">
    <div class="footer-links">
      <span v-for="(obj, idx) in footer_links" :key="idx">
        <router-link v-bind:to="obj.url">{{ obj.text }}</router-link>
      </span>
    </div>
    <div>
      <div class="footer-info">
        @©2012-2020 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 /<img
          src="https://images.weserv.nl/?url=https://cdn2.jianshu.io/assets/web/smrz-557fa318122c99a66523209bf9753a27.png"
        /><a href="http://www.beian.gov.cn/" target="_blank"
          >沪公网安备31010402002252号/</a
        >
      </div>
      <div class="footer-info">
        <a href="https://www.12377.cn/" target="_blank"
          ><img
            src="https://images.weserv.nl/?url=https://cdn2.jianshu.io/assets/web/wxb-e6e244a25f15a58bc91ceb4ea6d0e70a.png"/></a
        ><a href="http://www.shjbzx.cn/" target="_blank"
          ><img
            src="https://images.weserv.nl/?url=https://cdn2.jianshu.io/assets/web/weifa-57fe174be588966e9ae70967539666e3.jpg"
        /></a>
        <span>简书网举报电话：021-34770013 /</span>
      </div>
      <div class="footer-info">
        <img
          src="https://images.weserv.nl/?url=https://cdn2.jianshu.io/assets/web/fanzha-10518f0f6b33635180b190975ae68ca6.jpg"
        />亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听
        /
        <img
          src="https://images.weserv.nl/?url=https://cdn2.jianshu.io/assets/web/zggsrz-5695587dccf490ca3e651f4228f7479e.png"
        />
      </div>
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
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
}
.footer-links span {
  margin-right: 10px;
}
a {
  color: $base-color-text-secondary;
  text-decoration: none;
}
a:hover {
  color: $base-color-text-regular;
}

.footer-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  font-size: $base-font-size-small;
  color: $base-color-text-secondary;
}
img {
  height: 30px;
  width: auto;
  margin-right: 5px;
}
</style>
