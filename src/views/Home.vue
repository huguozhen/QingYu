<template>
  <div class="home">
    <el-row :span="24" id="base-nav-bar">
      <BaseNavBar></BaseNavBar>
    </el-row>
    <el-row :gutter="20" class="el-row-notnav">
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
          <img
            class="carousel-img"
            src="../assets/oss/carousel_img/carousel_01.png"
          />
        </div>
      </el-col>
    </el-row>
    <img src="../assets/logo.png" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import BaseNavBar from "@/components/BaseNavBar.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    BaseNavBar
  }
};
</script>

<style scoped>
.home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-row-notnav {
  margin-top: 40px;
}
.carousel-img {
  width: 100%;
  height: auto;
}
</style>
