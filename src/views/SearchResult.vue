<template>
  <div class="wrapper">
    <div class="page-header">
      <BaseNavBar></BaseNavBar>
    </div>
    <el-row class="page-main">
      <el-col :span="16" :offset="4">
        <el-tabs :tab-position="'left'">
          <el-tab-pane label="文章">
            <div class="author-and-topic-wrapper">
              <div class="flex-row-between">
                <span>相关用户</span>
                <el-button type="text">查看全部</el-button>
              </div>
              <el-row :gutter="40">
                <el-col
                  :span="8"
                  v-for="(author_obj, count) in author_info_list.slice(0, 3)"
                  :key="count"
                >
                  <BaseAuthorListItem
                    :author_info="author_obj"
                    :showFollowButton="true"
                  ></BaseAuthorListItem>
                </el-col>
              </el-row>
              <div class="flex-row-between">
                <span>相关专题</span>
                <el-button type="text">查看全部</el-button>
              </div>
              <el-row :gutter="40">
                <el-col
                  :span="8"
                  v-for="(topic_obj, count) in topic_list"
                  :key="count"
                >
                  <BaseTopicListItem
                    :topic_info="topic_obj"
                    :showFollowButton="true"
                  ></BaseTopicListItem>
                </el-col>
              </el-row>
            </div>
            <div class="flex-row-between">
              <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelectArticleTab"
              >
                <el-menu-item index="1">综合排序</el-menu-item>
                <el-menu-item index="2">热门文章</el-menu-item>
                <el-menu-item index="3">最新发布</el-menu-item>
                <el-menu-item index="4">最新评论</el-menu-item>
                <el-submenu index="5">
                  <template slot="title">时间不限</template>
                  <el-menu-item index="5-1">时间不限</el-menu-item>
                  <el-menu-item index="5-2">最近一天</el-menu-item>
                  <el-menu-item index="5-3">最近一周</el-menu-item>
                  <el-menu-item index="5-4">最近三月</el-menu-item>
                </el-submenu>
              </el-menu>
              <span class="result-num">10个结果</span>
            </div>
            <ul class="margin-top:20px">
              <li
                v-for="(article_obj, count) in article_info_list"
                :key="count"
              >
                <BaseArticleListItem
                  :article_info="article_obj.object"
                ></BaseArticleListItem>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="用户" lazy="true">
            <div class="flex-row-between">
              <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelectUserTab"
              >
                <el-menu-item index="1">综合排序</el-menu-item>
                <el-submenu index="2">
                  <template slot="title">时间不限</template>
                  <el-menu-item index="2-1">时间不限</el-menu-item>
                  <el-menu-item index="2-2">最近一天</el-menu-item>
                  <el-menu-item index="2-3">最近一周</el-menu-item>
                  <el-menu-item index="2-4">最近三月</el-menu-item>
                </el-submenu>
              </el-menu>
              <span class="result-num">10个结果</span>
            </div>
            <ul style="margin-top:20px">
              <li v-for="(author_obj, count) in author_info_list" :key="count">
                <div class="flex-row-between">
                  <BaseAuthorListItem
                    style="width:220px"
                    :author_info="author_obj"
                    :showFollowButton="false"
                  ></BaseAuthorListItem>
                  <el-button type="primary" round>+关注</el-button>
                </div>
                <el-divider></el-divider>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="专题" lazy="true">
            <div class="flex-row-between">
              <el-menu
                :default-active="activeIndex3"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelectTopicTab"
              >
                <el-menu-item index="1">综合排序</el-menu-item>
                <el-menu-item index="2">最近更新</el-menu-item>
                <el-menu-item index="3">热门专题</el-menu-item>
                <el-submenu index="4">
                  <template slot="title">时间不限</template>
                  <el-menu-item index="4-1">时间不限</el-menu-item>
                  <el-menu-item index="4-2">最近一天</el-menu-item>
                  <el-menu-item index="4-3">最近一周</el-menu-item>
                  <el-menu-item index="4-4">最近三月</el-menu-item>
                </el-submenu>
              </el-menu>
              <span class="result-num">3个结果</span>
            </div>
            <ul style="margin-top:20px">
              <li v-for="(topic_obj, count) in topic_list" :key="count">
                <div class="flex-row-between">
                  <BaseTopicListItem
                    style="width:220px"
                    :topic_info="topic_obj"
                    :showFollowButton="false"
                  ></BaseTopicListItem>
                  <el-button type="primary" round>+关注</el-button>
                </div>
                <el-divider></el-divider>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="文集" lazy="true">
            <div class="flex-row-between">
              <el-menu
                :default-active="activeIndex4"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelectCollectionTab"
              >
                <el-menu-item index="1">综合排序</el-menu-item>
                <el-submenu index="2">
                  <template slot="title">时间不限</template>
                  <el-menu-item index="2-1">时间不限</el-menu-item>
                  <el-menu-item index="2-2">最近一天</el-menu-item>
                  <el-menu-item index="2-3">最近一周</el-menu-item>
                  <el-menu-item index="2-4">最近三月</el-menu-item>
                </el-submenu>
              </el-menu>
              <span class="result-num">3个结果</span>
            </div>
            <ul style="margin-top:20px">
              <li v-for="(topic_obj, count) in topic_list" :key="count">
                <div class="flex-row-between">
                  <BaseTopicListItem
                    style="width:220px"
                    :topic_info="topic_obj"
                    :showFollowButton="false"
                  ></BaseTopicListItem>
                  <el-button type="primary" round>+关注</el-button>
                </div>
                <el-divider></el-divider>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-divider class="divide-line"></el-divider>
      <div class="search-history">
        <div class="flex-row-between">
          <span>最近搜索</span><el-button type="text">清空</el-button>
        </div>
        <ul>
          <li
            class="flex-row-between"
            v-for="(record, count) in search_history"
            :key="count"
          >
            <el-button type="text" icon="el-icon-time">{{ record }}</el-button
            ><el-button type="text"><i class="el-icon-close"></i></el-button>
          </li>
        </ul>
      </div>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseNavBar from "@/components/BaseNavBar.vue";
import BaseArticleListItem from "@/components/BaseArticleListItem.vue";
import BaseAuthorListItem from "@/components/BaseAuthorListItem.vue";
import BaseTopicListItem from "@/components/BaseTopicListItem.vue";

export default {
  name: "SearchResult",
  components: {
    BaseNavBar,
    BaseAuthorListItem,
    BaseTopicListItem,
    BaseArticleListItem
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      activeIndex3: "1",
      activeIndex4: "1",
      search_history: ["java", "a", "故乡", "简书"],
      article_info_list: [],
      author_info_list: [],
      topic_list: []
    };
  },
  mounted() {
    this.initArticleAndAuthorList();
    this.initTopicList();
  },
  methods: {
    handleSelectArticleTab(key, key_path) {
      console.log(key, key_path);
    },
    handleSelectUserTab(key, key_path) {
      console.log(key, key_path);
    },
    handleSelectTopicTab(key, key_path) {
      console.log(key, key_path);
    },
    handleSelectCollectionTab(key, key_path) {
      console.log(key, key_path);
    },
    initArticleAndAuthorList() {
      this.axios
        .get("/api/asimov/trending/now")
        .then(response => {
          this.article_info_list = response.data.slice(0, 10);
        })
        .then(() => {
          this.initAuthorList();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    initAuthorList() {
      for (let article_obj of this.article_info_list) {
        let user_slug = article_obj.object.data.user.slug;
        this.axios
          .get("/api/asimov/users/slug/" + user_slug + "/")
          .then(response => {
            this.author_info_list.push(response.data);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    initTopicList() {
      this.axios
        .get("/api/asimov/subscriptions/recommended_collections")
        .then(response => {
          this.topic_list = response.data.slice(0, 3);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss">
ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}
.wrapper {
  display: flex;
  flex-direction: column;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $base-color-text-regular;
}
.page-header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: $base-color-background;
}
.page-main {
  margin-top: 40px;
}
.el-tabs__header {
  width: 20%;
}
.el-tabs--left .el-tabs__item.is-left {
  text-align: center;
  font-family: $base-font;
  font-size: $base-font-size-large;
}
.el-tabs__item.is-active {
  background-color: mix($base-color-white, $base-color-black, 90%);
}
.el-tabs__active-bar,
.el-tabs__nav-wrap::after {
  display: none;
}
.el-tabs__content {
  padding-left: 40px;
}
.el-menu {
  background-color: $base-color-background;
}
.el-menu.el-menu--horizontal,
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom: none;
}
.el-menu--horizontal > .el-menu-item {
  height: auto;
  line-height: normal;
  padding-right: 10px;
  padding-left: 0;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid transparent;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
  height: auto;
  line-height: normal;
  padding: 0;
}
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-submenu:focus .el-submenu__title,
.el-menu--horizontal > .el-submenu:hover .el-submenu__title {
  background-color: $base-color-background;
}

.divide-line {
  width: 13%;
  position: absolute;
  left: 17%;
  top: 180px;
}
.search-history {
  //   height: auto;
  width: 13%;
  position: absolute;
  left: 17%;
  top: 240px;
  color: $base-color-text-secondary;
}
.el-button--text,
.result-num {
  color: $base-color-text-secondary;
}
.flex-row-between {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: left;
}
.author-and-topic-wrapper {
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  border: 1px solid $base-color-border-1;
  border-radius: 5px;
  background-color: mix($base-color-white, $base-color-black, 90%);
}
</style>
