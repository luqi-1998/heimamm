<template>
  <el-dialog title="用户注册" :visible.sync="dialogFormVisible" center>
    <el-form :model="form" ref="formRef" :rules="formRule">
      <el-form-item label="头像" prop="avatar" label-width="70px">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :data="uploadObj"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="昵称" prop="username" label-width="70px">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email" label-width="70px">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone" label-width="70px">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        type="password"
        prop="password"
        label-width="70px"
      >
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="图形码" prop="code" label-width="70px">
        <el-input
          v-model="form.code"
          style="width:65%"
          placeholder="验证码"
        ></el-input>
        <img :src="imageCodeUrl" alt="" @click="changeUrl" />
      </el-form-item>
      <el-form-item label="验证码" prop="rcode" label-width="70px">
        <el-input v-model="form.rcode" style="width:65%"></el-input>
        <el-button style="display:inlineBlock;width:35%" @click="getcode"
          >获取验证码</el-button
        >
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="register">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      dialogFormVisible: false,
      form: {
        avatar: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        code: '',
        rcode: ''
      },
      formRule: {
        avatar: [{ required: true, message: '头像不能为空', trigger: 'blur' }],
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
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        code: [{ required: true, message: '图形码不能为空', trigger: 'blur' }],
        rcode: [{ required: true, message: '验证码不能为空', trigger: 'blur' }]
      },
      uploadUrl: process.env.VUE_APP_BASEURL + '/uploads',
      imageUrl: '',
      uploadObj: {
        image: ''
      },
      imageCodeUrl: process.env.VUE_APP_BASEURL + '/captcha?type=sendsms'
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
    //   头像上传之前执行的函数
    beforeAvatarUpload (file) {
      const isJPG =
        file.type === 'image/jpg' ||
        file.type === 'image/jpeg' ||
        file.type === 'image/gif'
      const isLtn = file.size / 1024 / 1024 < 5
      if (!isJPG) {
        return this.$message.error('上传图片格式不正确')
      }
      if (!isLtn) {
        this.$message.error('上传图片大小不能超过5M')
      }
      this.uploadObj.image = file
      return isJPG && isLtn
    },
    //   头像上传成功执行的函数
    handleAvatarSuccess (res, file) {
      if (res.code === 200) {
        this.imageUrl = process.env.VUE_APP_BASEURL + '/' + res.data.file_path
        this.form.avatar = res.data.file_path
      }
    },
    // 点击切换图形码
    changeUrl () {
      this.imageCodeUrl =
        process.env.VUE_APP_BASEURL +
        '/captcha?type=sendsms&time=' +
        (new Date() - 0)
    },
    // 获取验证码
    async getcode () {
      var connt = 0
      this.$refs.formRef.validateField(['phone', 'code'], errorMsg => {
        // console.log(errorMsg)
        if (errorMsg) return
        if (!errorMsg) {
          connt++
        }
      })
      if (connt === 2) {
        const res = await this.$axios.post('/sendsms', {
          code: this.form.code,
          phone: this.form.phone
        })
        console.log(res)
      }
    },
    // 用户注册
    async register () {
      this.$refs.formRef.validate(async vaild => {
        if (!vaild) return this.$message.error('输入有误')
        const res = await this.$axios.post('/register', this.form)
        if (res.code === 200) {
          this.$message.success('注册成功')
          this.dialogFormVisible = false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.avatar-uploader .el-upload {
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  margin-left: 180px !important;
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 1px dashed #ebebeb !important;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
  margin-left: 180px !important;
}
.el-input {
  display: inline-block;
}
</style>
