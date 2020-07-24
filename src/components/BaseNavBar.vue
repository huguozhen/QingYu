<template>
  <div class="BaseNavBar">
    <el-row type="flex" align="middle">
      <el-col :span="6"
        ><div id="logo">
          <router-link to="/">轻语</router-link>
        </div></el-col
      >
      <el-col :span="6"
        ><div>
          <el-input placeholder="搜索" v-model="searchText"
            ><el-button slot="append" icon="el-icon-search"></el-button>
          </el-input></div
      ></el-col>
      <el-col :span="2" :offset="8"><el-button round>登录</el-button></el-col>
      <el-col :span="2"
        ><el-button type="primary" round>注册</el-button></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: "BaseNavBar",
  data() {
    return {
      seatchText: ""
    };
  }
};
</script>

<style lang="scss" scoped>
#logo {
  text-align: center;
}
.BaseNavBar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 10px;
}
</style>
