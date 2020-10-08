<template>
  <div class="wrapper">
    <el-row>
      <el-col :span="5">
        <div class="collection-menu">
          <el-menu
            default-active="2"
            class="el-menu-vertical"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <div><el-button round class="back-button">回到首页</el-button></div>
            <div>
              <el-button
                type="text"
                class="new-item"
                icon="el-icon-circle-plus-outline"
                >新建文集</el-button
              >
            </div>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-row
              type="flex"
              align="middle"
              justify="space-between"
              class="collection-menu-footer"
            >
              <el-button type="text">设置</el-button>
              <el-button type="text">遇到问题</el-button>
            </el-row>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="6">
        <el-menu default-active="2" class="el-menu-vertical">
          <el-button
            type="text"
            class="new-item"
            icon="el-icon-circle-plus-outline"
            >新建文章</el-button
          >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <div class="editor">
        <el-col :span="13">
          <el-input v-model="title" placeholder="文章标题"></el-input>
          <BaseTinyMCE
            ref="editor"
            v-model="msg"
            :disabled="disabled"
            :height="editor_height"
            @onClick="onClick"
          />
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
import BaseTinyMCE from "@/components/BaseTinyMCE.vue";

export default {
  name: "Editor",
  components: {
    BaseTinyMCE
  },
  data() {
    return {
      title: "",
      msg: "Welcome to Use Tinymce Editor",
      disabled: false,
      editor_height: `${document.documentElement.clientHeight}` - 40
    };
  },
  methods: {
    // 鼠标单击的事件
    onClick(e, editor) {
      console.log("Element clicked");
      console.log(e);
      console.log(editor);
    },
    // 清空内容
    clear() {
      this.$refs.editor.clear();
    }
  }
};
</script>

<style lang="scss">
.el-menu-vertical {
  height: 100vh;
}
.editor {
  height: 100vh;
}
.back-button {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10%;
  width: 80%;
}
.new-item {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 25px;
  width: 80%;
  text-align: left;
}
.collection-menu-footer {
  position: fixed;
  bottom: 0px;
  width: 20.8%;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
