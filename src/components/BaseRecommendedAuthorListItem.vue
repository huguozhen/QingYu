<template>
  <div class="base-recommended-author-list-item">
    <div style="float:left">
      <img class="avatar-img" src="../assets/oss/avatar_img/001.jpg" />
    </div>
    <div style="float:right"><a>+关注</a></div>
    <div style="padding-left:50px; text-align:left">{{ user_name }}</div>
    <div class="author-list-item-info">
      <span>写了{{ article_num }}篇文章</span>
      <span>{{ likes }}人喜欢</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseRecommendedAuthorListItem",
  data() {
    return { user_name: "董克平日记", article_num: 107, likes: "4.3k" };
  }
};
</script>

<style lang="scss" scoped>
.base-recommended-author-list-item {
  margin-bottom: 20px;
}
.avatar-img {
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
span {
  margin-right: 10px;
}
.author-list-item-info {
  padding-left: 50px;
  text-align: left;
  color: #909399;
}
</style>
