<template>
  <div class="base-div">
    <el-row :gutter="20" type="flex" align="middle">
      <el-col :span="article_info_text_width">
        <router-link to="article" class="article-title"
          ><h3>{{ article_info.data.title }}</h3></router-link
        >
        <div class="article-abstract">{{ article_info.data.public_abbr }}</div>
        <div class="article-info">
          <!-- <span><i class="el-icon-view"></i>{{ views }}</span> -->
          <router-link to="author" class="author-nickname">{{
            article_info.data.user.nickname
          }}</router-link>
          <router-link to="comments" class="comments-count"
            ><i class="el-icon-chat-line-square"></i
            >{{ article_info.data.public_comments_count }}</router-link
          >
          <el-button type="text" class="likes"
            ><i class="el-icon-star-off"></i
            >{{ article_info.data.likes_count }}</el-button
          >
        </div>
      </el-col>
      <el-col :span="7" v-if="list_img === true">
        <img
          class="list-img"
          :src="
            'https://images.weserv.nl/?url=' + article_info.data.list_image_url
          "
        />
      </el-col>
    </el-row>

    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  name: "BaseArticleListItem",
  props: ["article_info"],
  data() {
    return {
      list_img: false,
      article_info_text_width: 24
    };
  },
  mounted() {
    if (this.article_info.data.list_image_url != "") {
      this.list_img = true;
      this.article_info_text_width = 17;
    }
  }
};
</script>

<style lang="scss" scoped>
.base-div {
  text-align: left;
}
i {
  margin-right: 5px;
}
span {
  margin-right: 10px;
}
a.article-title {
  color: $base-color-text-primary;
  text-decoration: none;
}
a.article-title:hover {
  color: $base-color-text-primary;
  text-decoration: underline;
}
.article-abstract {
  color: $base-color-text-secondary;
}
.article-info {
  color: $base-color-text-secondary;
  margin-top: 10px;
}
.article-info a {
  color: $base-color-text-secondary;
  margin-right: 10px;
  text-decoration: none;
}
.article-info a:hover {
  color: $base-color-text-regular;
}
.likes {
  color: $base-color-text-secondary;
}
.likes:hover {
  color: $base-color-text-regular;
}
.list-img {
  width: 150px;
  height: 100px;
}
</style>
