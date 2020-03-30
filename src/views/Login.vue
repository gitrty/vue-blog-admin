<template>
  <div class="login">
    <div class="login-con">
      <h3>系统登录</h3>
      <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="uName" class="login-input"></el-input>
      <el-input
        type="password"
        placeholder="请输入密码"
        prefix-icon="el-icon-goods"
        v-model="uPwd"
        class="login-input"
      ></el-input>
      <el-button type="primary" class="login-btn" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Login extends Vue {
  // 用户名、密码
  private uName: any = "";
  private uPwd: any = "";

  // 登录验证
  private login() {
    // 输入是否为空验证
    if (this.uName == "" || this.uPwd == "")
      return this.$message.error("用户名和密码不能为空");
    // 账号密码验证
    if (this.uName == "admin" && this.uPwd == "admin") {
      this.$message.success("登录成功");
      this.$store.state.userStatus = true;
      this.$router.push("/home");
    } else {
      return this.$message.error("用户名或密码错误");
    }
  }
}
</script>

<style lang="less" scope>
.login {
  background-color: #2d3a4b;
  height: 100%;
  .login-con {
    width: 520px;
    height: 500px;
    padding: 160px 35px 0;
    margin: 0 auto;
    > h3 {
      font-size: 26px;
      color: #eee;
      margin: 0 auto 40px auto;
      text-align: center;
      font-weight: 700;
    }
  }
}
.login-input {
  margin-bottom: 30px;
}
.login-btn {
  width: 100%;
  background-color: #1890ff;
}
</style>