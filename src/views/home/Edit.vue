<template>
  <div class="release">
    <el-page-header @back="$path('/')" content="编辑文章"></el-page-header>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="文章分类">
        <el-select v-model="form.type" placeholder="请选择文章类型">
          <el-option label="html" value="0"></el-option>
          <el-option label="css" value="1"></el-option>
          <el-option label="js" value="2"></el-option>
          <el-option label="vue" value="3"></el-option>
          <el-option label="react" value="4"></el-option>
          <el-option label="其他" value="5"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="文章标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>

      <el-form-item label="文章内容">
        <vue-editor v-model="form.content"></vue-editor>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import { VueEditor } from "vue2-editor";

// 表单接口
import formFace from "@/interface/formFace";

@Component({
  components: {
    VueEditor
  }
})
export default class Release extends Vue {
  private created() {
    // 获取文章id
    console.info(this.$route.query.id);
  }

  private form: formFace = {
    type: "",
    title: "",
    content: ""
  };

  // 立即修改
  private onSubmit() {
    console.info(this.form);
    // if()
    this.$message.success("修改成功");
  }
}
</script>

<style lang="less" scoped>
.release {
  text-align: left;
}
.el-input {
  width: 500px;
}
.el-page-header {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
</style>