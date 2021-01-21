<template>
  <el-dialog :title="title" :visible.sync="dialogFormVisible" center>
    <el-form :model="form" :rules="formRules" ref="formRef">
      <el-form-item label="企业编号" label-width="80px" prop="eid">
        <el-input v-model="form.eid"></el-input>
      </el-form-item>
      <el-form-item label="企业名称" label-width="80px" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="企业简称" label-width="80px" prop="short_name">
        <el-input v-model="form.short_name"></el-input>
      </el-form-item>
      <el-form-item label="企业简介" label-width="80px" prop="intro">
        <el-input v-model="form.intro"></el-input>
      </el-form-item>
      <el-form-item label="企业备注" label-width="80px" prop="remark">
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
  name: 'enterpriseupdata',
  data () {
    return {
      title: '新增企业',
      dialogFormVisible: false,
      form: {
        eid: '',
        name: '',
        short_name: '',
        intro: '',
        remark: ''
      },
      formRules: {
        eid: [{ required: true, message: '企业编号不能为空', trigger: 'blur' }],
        name: [
          { required: true, message: '企业名称不能为空', trigger: 'blur' }
        ],
        short_name: [
          { required: true, message: '企业简称不能为空', trigger: 'blur' }
        ],
        intro: [
          { required: true, message: '企业简介不能为空', trigger: 'blur' }
        ]
      }
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
      if (this.title === '新增企业') {
        this.$refs.formRef.validate(async vaild => {
          if (!vaild) return this.$message.error('验证不通过')
          delete this.form.id
          const res = await this.$axios.post('/enterprise/add', this.form)
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
          const res = await this.$axios.post('/enterprise/edit', this.form)
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
