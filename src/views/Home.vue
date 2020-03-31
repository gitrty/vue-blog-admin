<template>
  <div class="home">
    <el-container>
      <el-header class="header">
        <div class="title">
          <div>任天宇的后台管理系统</div>
          <div class="esc" @click="esc">退出系统</div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="-1"
            class="el-menu-vertical-demo"
            @open
            @close
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>文章</span>
              </template>
              <el-menu-item index="1-1" @click="$path('/')">管理文章</el-menu-item>
              <el-menu-item index="1-2" @click="$path('/home/release')">发布文章</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  private esc() {
    this.$confirm("确定要退出登录吗", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    })
      .then(() => {
        this.$store.state.userStatus = false;
        this.$router.push("/login");
        this.$message({
          type: "success",
          message: "退出登录成功!"
        });
      })
      .catch(() => {});
  }
}
</script>

<style lang="less" scoped>
.el-container,
.home {
  height: 100%;
}
.el-header {
  background: #2c3e50;
}
.title {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  text-align: left;
}
.esc {
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #ddd;
  }
}
.el-menu-vertical-demo {
  height: 100%;
}
.el-menu-item {
  background-color: transparent !important;
}
</style>
