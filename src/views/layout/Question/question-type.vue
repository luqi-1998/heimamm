<template>
  <div class="question-type">
    <!-- 渲染单选 -->
    <div v-if="form.type === 1">
      <!-- 根据form.select_options来循环生成4个单选项 -->
      <div class="item" v-for="item in form.select_options" :key="item.label">
        <!-- 左边的el-radio -->
        <!-- v-model双向绑定，最终给单选答案赋值 label就是每一个el-radio的唯一值 -->
        <el-radio v-model="form.single_select_answer" :label="item.label">{{
          item.label
        }}</el-radio>
        <!-- 中间的input -->
        <el-input style="margin-right:15px;" v-model="item.text"></el-input>
        <!-- 右边的上传子组件 -->
        <upload-file type="image" :obj="item" />
      </div>
    </div>
    <!-- 渲染多选 -->
    <div v-if="form.type === 2">
      <!-- 根据form.select_options来循环生成4个多选的选项 -->
      <div class="item" v-for="item in form.select_options" :key="item.label">
        <!-- 左边checkbox -->
        <el-checkbox
          v-model="form.multiple_select_answer"
          :label="item.label"
          >{{ item.label }}</el-checkbox
        >
        <!-- 中间的input -->
        <el-input
          style="margin-left:15px;margin-right:15px;"
          v-model="item.text"
        ></el-input>
        <!-- 右边的上传子组件 -->
        <upload-file type="image" :obj="item" />
      </div>
    </div>
    <!-- 渲染简单 -->
    <div v-if="form.type === 3">
      <el-input
        type="textarea"
        :rows="6"
        placeholder="请输入简答答案"
        v-model="form.short_answer"
      >
      </el-input>
    </div>
  </div>
</template>

<script>
import UploadFile from './upload-file'
export default {
  name: 'QuestionType',
  components: {
    UploadFile
  },
  props: {
    form: Object
  }
}
</script>

<style lang="less" scoped>
.question-type {
  .item {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
