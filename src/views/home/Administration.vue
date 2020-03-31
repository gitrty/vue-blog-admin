<template>
  <div>
    <toyo-header :title="'管理文章'" />
    <div class="search">
      <div class="search-con">
        <span>分类：</span>
        <el-select v-model="value" placeholder="请选择分类">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            width="50"
          ></el-option>
        </el-select>
      </div>
      <div class="search-con">
        <span>标题：</span>
        <el-input v-model="input" placeholder="请输入标题"></el-input>
      </div>
      <div class="search-btn">
        <el-button type="primary" round @click="search">查询</el-button>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="id" label="id" width="100"></el-table-column>
      <el-table-column prop="type" label="分类" width="100"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="time" label="发布时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      :page-size="10"
      layout="prev, pager, next, jumper"
      :total="this.$store.state.tableData.length"
    ></el-pagination>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import tableDataFace from "@/interface/tableDataFace";
import { system } from "@/api/index.ts";
// const { getTianQi } = system;

@Component
export default class Administration extends Vue {
  // created 生命周期获取表格数据
  private async created() {
    this.everyData = JSON.parse(JSON.stringify(this.$store.state.tableData));
    this.tableData = this.everyData.slice(0, 10);

    // const data = await getTianQi();
    // console.info(data);
  }

  // 表格总数据
  private everyData: any[] = [];

  // 当前页表格数据 (指定数组中 - 对象中的键类型)
  private tableData: tableDataFace[] = [
    {
      id: 1000,
      type: "java",
      title: "并发编程从入门到入魔",
      time: "2020-3-31"
    }
  ];

  // 分类搜索 - 选项
  private options = [
    {
      value: "0",
      label: "html"
    },
    {
      value: "1",
      label: "css"
    },
    {
      value: "2",
      label: "js"
    },
    {
      value: "3",
      label: "vue"
    },
    {
      value: "4",
      label: "react"
    },
    {
      value: "5",
      label: "其他"
    }
  ];

  // 分类搜索 - 选中内容
  private value = "";

  // 搜索 - 标题
  private input = "";

  // 查询按钮
  private search() {
    console.info(this.value, this.input);
  }

  // 编辑当前行
  private handleEdit(index: any, row: any): void {
    this.$router.push({ path: "/home/edit", query: { id: row.id } });
  }

  // 删除当前行
  private handleDelete(index: any, row: any): void {
    this.$confirm("删除此条后不可恢复，确定要删除吗？", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    })
      .then(() => {
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      })
      .catch(() => {});
  }

  // 当前页码
  private handleCurrentChange(val: any): void {
    this.tableData = this.everyData.slice((val - 1) * 10, val * 10);
    console.log(`当前页: ${val}`);
  }
}
</script>

<style lang="less" scoped>
.search {
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.search-con {
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-right: 50px;
  > span {
    width: 60px;
  }
}
.el-select {
  width: 120px;
}
.search-btn {
  flex-grow: 1; //这三个元素只有它在有空余空间时可伸缩，也就是它占据了所有剩余空间
  display: flex; //将它设置为flex,就可以单独对他进行主轴右对齐
  justify-content: flex-end;
}
.el-table {
  margin-bottom: 30px;
}
</style>