<template>
  <div class="home">
    <el-row :span="24" class="page-nav-bar">
      <BaseNavBar></BaseNavBar>
    </el-row>
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
          <BaseWordCloudChart height="270px" width="100%"></BaseWordCloudChart>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="40" class="el-row-notnav">
      <el-col :span="11" :offset="4"
        ><BaseHomePageArticleListItem
          v-for="count in 10"
          :key="count"
        ></BaseHomePageArticleListItem>
      </el-col>
      <el-col :span="5">
        <div style="margin-bottom:20px; color: #909399;text-align:left">
          <span>推荐作者</span>
          <span style="float:right"><i class="el-icon-refresh"></i>换一批</span>
        </div>
        <BaseHomePageAuthorListItem
          v-for="count in 10"
          :key="count"
        ></BaseHomePageAuthorListItem>
      </el-col>
    </el-row>
    <el-row :gutter="40" class="page-footer">
      <el-col :span="11" :offset="4">
        <BaseHomePageFooter></BaseHomePageFooter>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseNavBar from "@/components/BaseNavBar.vue";
import BaseWordCloudChart from "@/components/BaseWordCloudChart.vue";
import BaseHomePageArticleListItem from "@/components/BaseHomePageArticleListItem.vue";
import BaseHomePageAuthorListItem from "@/components/BaseHomePageAuthorListItem.vue";
import BaseHomePageFooter from "@/components/BaseHomePageFooter.vue";

export default {
  name: "Home",
  components: {
    BaseNavBar,
    BaseWordCloudChart,
    BaseHomePageArticleListItem,
    BaseHomePageAuthorListItem,
    BaseHomePageFooter
  }
};
</script>

<style scoped>
.home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.base-nav-bar {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #ffffff;
}
.el-row-notnav {
  margin-top: 40px;
}
.carousel-img {
  width: 100%;
  height: auto;
}
.page-footer {
  margin-top: 40px;
}
</style>
