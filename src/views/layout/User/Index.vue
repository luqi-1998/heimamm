<template>
  <div class="user">
    <el-card>
      <el-form
        :inline="true"
        :model="form"
        ref="formRef"
        class="demo-form-inline"
      >
        <el-form-item label="用户名称" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="用户邮箱" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="role_id">
          <el-select v-model="form.role_id" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.lable"
              :label="item.value"
              :value="item.label"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="sreach">搜索</el-button>
          <el-button @click="close">清除</el-button>
          <el-button type="primary" @click="add">+新增用户</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card style="marginTop:20px">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index" width="50" label="序号">
        </el-table-column>
        <el-table-column prop="username" label="用户名" width="120">
        </el-table-column>
        <el-table-column prop="phone" label="手机号" width="150">
        </el-table-column>
        <el-table-column prop="email" label="邮箱" width="150">
        </el-table-column>
        <el-table-column prop="role_id" label="角色" width="100">
          <template v-slot:default="scope">
            <span>{{
              scope.row.role_id === 1
                ? '超级管理员'
                : scope.row.role_id === 2
                ? '管理员'
                : scope.row.role_id === 3
                ? '老师'
                : '学生'
            }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="remark" label="备注" width="150">
        </el-table-column>
        <el-table-column prop="status" label="状态" width="100">
          <template v-slot:default="scope">
            <span
              :style="scope.row.status == '1' ? 'color:#000' : 'color:red'"
              >{{ scope.row.status == '1' ? '启用' : '禁用' }}</span
            >
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template v-slot:default="scope">
            <el-button size="small" @click="updata(scope.row)">编辑</el-button>
            <el-button
              size="small"
              :type="scope.row.status == '1' ? 'info' : 'success'"
              @click="changeRole(scope.row.id)"
              >{{ scope.row.status == '1' ? '禁用' : '启用' }}</el-button
            >
            <el-button size="small" @click="del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
        :page-sizes="[2, 5, 8, 10]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <add-updata ref="addupdata"></add-updata>
  </div>
</template>

<script>
// 导入用户新增和修改组件
import addUpdata from './add-or-updata'
export default {
  name: 'user',
  components: {
    addUpdata
  },
  data () {
    return {
      options: [
        { label: 1, value: '超级管理员' },
        { label: 2, value: '管理员' },
        { label: 3, value: '老师' },
        { label: 4, value: '学生' }
      ],
      form: {
        username: '',
        email: '',
        role_id: ''
      },
      tableData: [],
      total: 10,
      pageSize: 2,
      pageIndex: 1
    }
  },
  methods: {
    // 分页
    // 当前页
    handleCurrentChange (val) {
      this.pageIndex = val
      this.getData()
    },
    // 每页显示
    handleSizeChange (val) {
      this.pageSize = val
      this.getData()
    },
    // 切换状态
    async changeRole (id) {
      const res = await this.$axios.post('/user/status', { id })
      if (res.code === 200) {
        this.$message.success('状态更新成功')
        this.getData()
      }
    },
    // 删除
    async del (id) {
      const res = await this.$axios.post('/user/remove', { id })
      if (res.code === 200) {
        this.$message.success('删除成功')
        this.pageIndex = 1
        this.getData()
      }
    },
    // 搜索
    sreach () {
      this.pageIndex = 1
      this.getData()
    },
    // 清除搜索框
    close () {
      this.$refs.formRef.resetFields()
      this.pageIndex = 1
      this.getData()
    },
    // 新增用户
    add () {
      this.$refs.addupdata.dialogFormVisible = true
    },
    // 编辑用户
    updata (row) {
      // console.log(JSON.parse(JSON.stringify(row)))
      this.$refs.addupdata.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs.addupdata.title = '修改用户'
        this.$refs.addupdata.form = JSON.parse(JSON.stringify(row))
      })
      // this.$refs.addUpdata.form = JSON.parse(JSON.stringify(row))
    },
    async getData () {
      const res = await this.$axios.get('/user/list', {
        params: {
          ...this.form,
          page: this.pageIndex,
          limit: this.pageSize
        }
      })
      this.tableData = res.data.items
      this.total = res.data.pagination.total
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style></style>
