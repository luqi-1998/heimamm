<template>
  <div class="subject">
    <el-card>
      <el-form
        :inline="true"
        :model="form"
        ref="formRef"
        class="demo-form-inline"
      >
        <el-form-item label="学科编号" prop="rid" label-width="70px">
          <el-input v-model="form.eid"></el-input>
        </el-form-item>
        <el-form-item label="学科名称" prop="name" label-width="70px">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="创建者" prop="username" label-width="70px">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status" label-width="70px">
          <el-select v-model="form.status" placeholder="请选择">
            <el-option :value="0" label="禁用"></el-option>
            <el-option :value="1" label="启用"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="sreach">搜索</el-button>
          <el-button @click="close">清除</el-button>
          <el-button type="primary" @click="add">+新增学科</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card style="marginTop:20px">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index" width="50" label="序号">
        </el-table-column>
        <el-table-column prop="rid" label="学科编号" width="120">
        </el-table-column>
        <el-table-column prop="name" label="学科名称" width="150">
        </el-table-column>
        <el-table-column prop="short_name" label="简称" width="120">
        </el-table-column>
        <el-table-column prop="username" label="创建者" width="120">
        </el-table-column>
        <el-table-column prop="create_time" label="创建日期" width="180">
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
  name: 'subject',
  components: {
    addUpdata
  },
  data () {
    return {
      form: {
        username: '',
        eid: '',
        status: '',
        name: ''
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
      const res = await this.$axios.post('/subject/status', { id })
      if (res.code === 200) {
        this.$message.success('状态更新成功')
        this.getData()
      }
    },
    // 删除
    async del (id) {
      const res = await this.$axios.post('/subject/remove', { id })
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
      this.$refs.addupdata.title = '新增学科'
      this.$refs.addupdata.dialogFormVisible = true
    },
    // 编辑用户
    updata (row) {
      // console.log(JSON.parse(JSON.stringify(row)))
      this.$refs.addupdata.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs.addupdata.title = '修改学科'
        this.$refs.addupdata.form = JSON.parse(JSON.stringify(row))
      })
      // this.$refs.addUpdata.form = JSON.parse(JSON.stringify(row))
    },
    async getData () {
      const res = await this.$axios.get('/subject/list', {
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
