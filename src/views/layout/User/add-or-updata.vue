<template>
  <el-dialog :title="title" :visible.sync="dialogFormVisible" center>
    <el-form :model="form" :rules="formRules" ref="formRef">
      <el-form-item label="用户名" label-width="70px" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" label-width="70px" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="电话" label-width="70px" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="角色" label-width="70px" prop="role_id">
        <el-select v-model="form.role_id" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.lable"
            :label="item.value"
            :value="item.label"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态" label-width="70px" prop="status">
        <el-select v-model="form.status" placeholder="请选择状态">
          <el-option :value="0" label="禁用"></el-option>
          <el-option :value="1" label="启用"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户备注" label-width="70px" prop="remark">
        <el-input v-model="form.remark"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="addedit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'userupdata',
  data () {
    return {
      title: '新增用户',
      dialogFormVisible: false,
      form: {
        username: '',
        email: '',
        phone: '',
        role_id: '',
        remark: '',
        status: ''
      },
      formRules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (!value) callback(new Error('邮箱不能为空'))
              /* eslint-disable */
              const reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/
              if (!reg.test(value)) {
                callback(new Error('邮箱不合法'))
              }
              /* eslint-enable */
              callback()
            },
            trigger: 'blur'
          }
        ],
        phone: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (!value) callback(new Error('手机号不能为空'))
              const reg = /^1(3|4|5|6|7|8|9)\d{9}$/
              if (!reg.test(value)) {
                callback(new Error('手机号不合法'))
              }
              callback()
            },
            trigger: 'blur'
          }
        ],
        role_id: [{ required: true, message: '角色不能为空', trigger: 'blur' }]
      },
      options: [
        { label: 1, value: '超级管理员' },
        { label: 2, value: '管理员' },
        { label: 3, value: '老师' },
        { label: 4, value: '学生' }
      ]
    }
  },
  watch: {
    dialogFormVisible (newValue) {
      if (!newValue) {
        this.$refs.formRef.resetFields()
      }
    }
  },
  methods: {
    addedit () {
      if (this.title === '新增用户') {
        this.$refs.formRef.validate(async vaild => {
          if (!vaild) return this.$message.error('验证不通过')
          delete this.form.id
          const res = await this.$axios.post('/user/add', this.form)
          if (res.code === 200) {
            this.$message.success('新增成功')
            this.$parent.pageIndex = 1
            this.$parent.getData()
            this.dialogFormVisible = false
          }
        })
      } else {
        this.$refs.formRef.validate(async vaild => {
          if (!vaild) return this.$message.error('验证不通过')
          const res = await this.$axios.post('/user/edit', this.form)
          if (res.code === 200) {
            this.$message.success('修改成功')
            this.$parent.pageIndex = 1
            this.$parent.getData()
            this.dialogFormVisible = false
          }
        })
      }
    }
  }
}
</script>

<style></style>
