<template>
  <div class="wrapper">
    <div class="page-header">
      <BaseNavBar></BaseNavBar>
    </div>
    <div class="page-main">
      <el-row :gutter="40" class="el-row-notnav">
        <el-col :span="11" :offset="4">
          <div>
            <el-carousel height="270px">
              <el-carousel-item>
                <img
                  class="carousel-img"
                  src="../assets/oss/carousel_img/carousel_01.png"
                />
              </el-carousel-item>
              <el-carousel-item>
                <img
                  class="carousel-img"
                  src="../assets/oss/carousel_img/carousel_01.png"
                />
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
        <el-col :span="5">
          <div>
            <BaseWordCloudChart
              height="270px"
              width="100%"
            ></BaseWordCloudChart>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="40" class="el-row-notnav">
        <el-col :span="11" :offset="4"
          ><ul id="article-list" v-loading="loading_article">
            <li v-for="(article_obj, count) in article_info_list" :key="count">
              <BaseArticleListItem
                :article_info="article_obj.object"
              ></BaseArticleListItem>
            </li>
          </ul>
          <el-button type="primary" @click="loadMoreArticle"
            >加载更多</el-button
          >
        </el-col>
        <el-col :span="5">
          <div class="author-list-header">
            <span>推荐作者</span>
            <span
              ><el-button type="text" @click="refreshAuthorClicked"
                ><i class="el-icon-refresh"></i>换一批</el-button
              ></span
            >
          </div>
          <ul v-loading="loading_author">
            <li v-for="(author_obj, count) in author_info_list" :key="count">
              <BaseAuthorListItem
                :author_info="author_obj"
                :showFollowButton="true"
              ></BaseAuthorListItem>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <div class="page-footer">
      <el-row :gutter="40">
        <el-col :span="16" :offset="4">
          <BaseHomePageFooter></BaseHomePageFooter>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseNavBar from "@/components/BaseNavBar.vue";
import BaseWordCloudChart from "@/components/BaseWordCloudChart.vue";
import BaseArticleListItem from "@/components/BaseArticleListItem.vue";
import BaseAuthorListItem from "@/components/BaseAuthorListItem.vue";
import BaseHomePageFooter from "@/components/BaseHomePageFooter.vue";

export default {
  name: "Home",
  components: {
    BaseNavBar,
    BaseWordCloudChart,
    BaseArticleListItem,
    BaseAuthorListItem,
    BaseHomePageFooter
  },
  data() {
    return {
      article_info_list: [],
      author_info_list: [],
      loading_article: true,
      loading_author: true
    };
  },
  mounted() {
    this.initArticleList();
  },
  methods: {
    initArticleList() {
      this.axios
        .get("/api/asimov/trending/now")
        .then(response => {
          this.article_info_list = response.data.slice(0, 5);
          this.loading_article = false;
        })
        .then(() => {
          this.refreshAuthorList(this.article_info_list);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    refreshAuthorList(article_list) {
      for (let i in article_list) {
        let article_obj = article_list[i];
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
      this.loading_author = false;
    },
    loadMoreArticle() {
      this.loading_article = true;
      this.axios
        .get("/api/asimov/trending/now")
        .then(response => {
          this.article_info_list.push(...response.data.slice(0, 5));
          this.loading_article = false;
        })
        .catch(function(error) {
          // 请求失败处理
          console.log(error);
        });
    },
    refreshAuthorClicked() {
      this.loading_author = true;
      this.author_info_list = [];
      let article_list = [];
      this.axios
        .get("/api/asimov/trending/now")
        .then(response => {
          article_list = response.data.slice(0, 5);
        })
        .then(() => {
          this.refreshAuthorList(article_list);
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
.el-row-notnav {
  margin-top: 40px;
}
.page-main {
  flex: 1;
  width: 1600px;
  margin: 0 auto;
}
.carousel-img {
  width: 100%;
  height: auto;
}
.page-footer {
  padding-top: 80px;
  padding-bottom: 80px;
  width: 1600px;
  margin: 0 auto;
}
.author-list-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  color: #909399;
  text-align: left;
}
</style>
