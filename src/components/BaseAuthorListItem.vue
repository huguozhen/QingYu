<template>
  <div class="wrapper">
    <el-row :gutter="60" type="flex" align="middle">
      <el-col :span="4">
        <router-link to="/author"
          ><el-avatar
            style="margin-top:16px"
            :size="40"
            :src="author_info.avatar"
          ></el-avatar
        ></router-link>
      </el-col>
      <el-col :span="20">
        <div>
          <el-row type="flex" align="middle" justify="space-between">
            <router-link to="author">{{ author_info.nickname }}</router-link>
            <el-button type="text" v-if="showFollowButton === true"
              >+关注</el-button
            >
          </el-row>
          <el-row class="author-wordage-and-likes">
            <span style="margin-right:10px"
              >写了{{ author_wordage_format }}字</span
            >
            <span>{{ author_likes_count_format }}人喜欢</span>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "BaseAuthorListItem",
  props: ["author_info", "showFollowButton"],
  computed: {
    author_wordage_format: function() {
      let res;
      if (this.author_info.total_wordage >= 1000) {
        res = (this.author_info.total_wordage / 1000).toFixed(1) + "k";
      } else {
        res = this.author_info.total_wordage;
      }
      return res;
    },
    author_likes_count_format: function() {
      let res;
      if (this.author_info.total_likes_count >= 1000) {
        res = (this.author_info.total_likes_count / 1000).toFixed(1) + "k";
      } else {
        res = this.author_info.total_likes_count;
      }
      return res;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-bottom: 20px;
}
a {
  color: $base-color-text-primary;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.author-wordage-and-likes {
  font-size: $base-font-size-small;
  color: $base-color-text-secondary;
}
</style>
