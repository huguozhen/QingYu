<template>
  <div class="wrapper">
    <el-row :gutter="60" type="flex" align="middle">
      <el-col :span="4">
        <router-link to="/topic"
          ><el-avatar
            style="margin-top:16px"
            shape="square"
            :size="40"
            :src="topic_info.image_url"
          ></el-avatar
        ></router-link>
      </el-col>
      <el-col :span="20">
        <div>
          <el-row type="flex" align="middle" justify="space-between">
            <router-link to="/topic">{{ topic_info.title }}</router-link>
            <el-button type="text" v-if="showFollowButton === true"
              >+关注</el-button
            >
          </el-row>
          <el-row
            ><div class="author-wordage-and-likes">
              <span style="margin-right:10px">8192文章</span>
              <span>12327关注</span>
            </div></el-row
          >
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "BaseTopicListItem",
  props: ["topic_info", "showFollowButton"]
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
