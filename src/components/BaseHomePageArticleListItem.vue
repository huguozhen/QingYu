<template>
  <div class="base-div">
    <h3>{{ title }}</h3>
    <div class="item-abstract">{{ abstract }}</div>
    <div class="item-info">
      <span><i class="el-icon-view"></i>{{ views }}</span>
      <span>{{ author_name }}</span>
      <span><i class="el-icon-chat-line-square"></i>{{ reviews }}</span>
      <span><i class="el-icon-star-off"></i>{{ likes }}</span>
    </div>
    <hr class="split-line" />
  </div>
</template>

<script>
export default {
  name: "BaseHomePageArticleListItem",
  data() {
    return {
      title:
        "世界上最大的蛇确实是森蚺，但最长的蛇却不是森蚺！森蚺和网纹蟒谁厉害？",
      abstract:
        "世界上最大的蛇确实是森蚺，但最长的蛇却不是森蚺，而是网纹蟒！尽管它们都是蛇类，但两者所专长的技能也不一样，当然关键还是它们生活习性不尽相同！亚马...",
      views: "2.9k",
      author_name: "小黑大蓝鲸",
      reviews: 8,
      likes: 50
    };
  }
};
</script>

<style lang="scss" scoped>
.base-div {
  text-align: left;
}
span {
  margin-right: 10px;
}
.item-abstract {
  color: #909399;
}
.item-info {
  color: #909399;
  margin-top: 10px;
  margin-bottom: 10px;
}
.split-line {
  background-color: #e6e6e6;
  height: 1px;
  border: none;
}
</style>
