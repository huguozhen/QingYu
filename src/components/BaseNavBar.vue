<template>
  <div class="BaseNavBar">
    <div class="wrapper">
      <el-row type="flex" align="middle" justify="center">
        <el-col :span="4">
          <router-link to="/"
            ><img
              class="logo"
              src="../assets/oss/logo_img/qylogo.png"/></router-link
        ></el-col>
        <el-col :span="2"
          ><el-button
            type="text"
            v-if="login_status === true"
            class="nav-button"
          >
            关注
          </el-button></el-col
        >
        <el-col :span="2"
          ><div v-if="login_status === true">
            <el-dropdown class="nav-button">
              <span> 消息<i class="el-icon-arrow-down"></i> </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>评论</el-dropdown-item>
                <el-dropdown-item>私信</el-dropdown-item>
                <el-dropdown-item>投稿请求</el-dropdown-item>
                <el-dropdown-item>喜欢和赞</el-dropdown-item>
                <el-dropdown-item>关注</el-dropdown-item>
                <el-dropdown-item>赞赏和付费</el-dropdown-item>
                <el-dropdown-item>其它提醒</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div></el-col
        >
        <el-col :span="6"
          ><div>
            <el-input placeholder="搜索" v-model="searchText"
              ><el-button
                slot="append"
                icon="el-icon-search"
                @click="searchButtonClicked"
              ></el-button>
            </el-input></div
        ></el-col>
        <el-col :span="2" :offset="4"
          ><div v-if="login_status === true">
            <el-switch
              v-model="night_mode"
              active-icon-class="el-icon-moon"
              inactive-icon-class="el-icon-sunny"
            >
            </el-switch></div
        ></el-col>
        <el-col :span="2"
          ><div v-if="login_status === true">
            <el-dropdown class="nav-button">
              <div class="avatar-dropdown">
                <el-avatar :size="40" :src="user_info.avatar_url"></el-avatar
                ><span><i class="el-icon-arrow-down"></i></span>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的主页</el-dropdown-item>
                <el-dropdown-item>收藏的文章</el-dropdown-item>
                <el-dropdown-item>喜欢的文章</el-dropdown-item>
                <el-dropdown-item>已购内容</el-dropdown-item>
                <el-dropdown-item>我的钱包</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item>帮助和反馈</el-dropdown-item>
                <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div v-else><el-button round @click="login">登录</el-button></div>
        </el-col>
        <el-col :span="2"
          ><div v-if="login_status === true">
            <el-button type="primary" round @click="writeButtonClicked"
              >写文章</el-button
            >
          </div>
          <div v-else>
            <el-button type="primary" round>注册</el-button>
          </div></el-col
        >
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseNavBar",
  data() {
    return {
      login_status: false,
      user_info: null,
      night_mode: false,
      searchText: ""
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    login() {
      let user_info = {
        username: "Claps",
        avatar_url: "https://i.loli.net/2020/07/31/JrFk4t6MjHgi1oy.jpg"
      };
      let dataStr = JSON.stringify({
        val: user_info,
        timer: new Date().getTime()
      });
      localStorage.setItem("user", dataStr);
      this.user_info = user_info;
      this.login_status = true;
    },
    logout() {
      localStorage.removeItem("user");
      this.login_status = false;
    },
    checkLogin() {
      const exp = 600000; // 设置保留时间为10分钟
      if (localStorage.getItem("user")) {
        let vals = localStorage.getItem("user"); // 获取本地存储的值
        let dataObj = JSON.parse(vals); // 将字符串转换成JSON对象
        // 如果(当前时间 - 存储的元素在创建时候设置的时间) > 过期时间
        let isTimed = new Date().getTime() - dataObj.timer > exp;
        if (!isTimed) {
          this.user_info = dataObj.val;
          this.login_status = true;
        } else {
          localStorage.removeItem("user");
        }
      }
    },
    searchButtonClicked() {
      this.$router.push("/searchResult");
    },
    writeButtonClicked() {
      this.$router.push("/Editor");
    }
  }
};
</script>

<style lang="scss" scoped>
.BaseNavBar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  text-align: center;
  height: 60px;
}
.wrapper {
  width: 1600px;
  margin: 0 auto;
}
.logo {
  height: 60px;
}
.nav-button {
  color: $base-color-text-regular;
}
.nav-button:hover {
  color: $base-color-primary;
  cursor: pointer;
}
.avatar-dropdown {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
