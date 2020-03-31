<template>
  <div class="toyo-header">{{title}}</div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Header extends Vue {
  @Prop({
    required: true, // 是否必传
    default: "默认标题"
  })
  private title!: string; // ! 表示为非 null 或 undefined
}
</script>

<style lang="less" scoped>
.toyo-header {
  height: 60px;
  line-height: 60px;
  text-align: left;
  border-bottom: 1px solid #ccc;
  margin-bottom: 24px;
}
</style>