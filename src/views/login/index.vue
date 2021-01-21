<template>
  <div class="login">
    <el-card>
      <h1>黑马面面 | 用户登录</h1>
      <el-form :model="form" ref="form" :rules="rules" size="normal">
        <el-form-item prop="phone">
          <el-input v-model="form.phone" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="form.password"
            prefix-icon="el-icon-unlock"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="form.code"
            style="width:60%"
            placeholder="验证码"
          ></el-input>
          <img :src="imageUrl" alt="" @click="changeUrl" />
        </el-form-item>
        <el-form-item prop="checked">
          <el-checkbox v-model="form.checked"></el-checkbox
          >我已阅读并同意<el-link type="primary">用户协议</el-link>和<el-link
            type="primary"
            >隐藏条款</el-link
          >
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%" type="primary" @click="login"
            >登录</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%" type="primary" @click="register"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
    <register ref="regs"></register>
  </div>
</template>

<script>
// 导入保存cookie模块
import { saveToken } from '../../utils/token'
// 导入注册组件
import register from './register'
export default {
  name: 'login',
  data () {
    return {
      form: {
        phone: '',
        password: '',
        checked: false,
        code: ''
      },
      rules: {
        phone: [
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('用户名不能为空'))
              }
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
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 11, message: '长度在 3 到 11 个字符', trigger: 'blur' }
        ],
        code: [
          {
            validator: (rule, value, callback) => {
              if (value.length !== 4) {
                callback(new Error('验证码长度不正确'))
              }
              callback()
            },
            trigger: 'blur'
          }
        ],
        checked: [
          {
            validator: (rule, value, callback) => {
              if (!value) {
                callback(new Error('请同意用户协议'))
              }
              callback()
            },
            trigger: 'change'
          }
        ]
      },
      imageUrl: process.env.VUE_APP_BASEURL + '/captcha?type=login'
    }
  },
  components: {
    register
  },
  methods: {
    // 点击切换验证码
    changeUrl () {
      this.imageUrl =
        process.env.VUE_APP_BASEURL +
        '/captcha?type=login&time=' +
        (new Date() - 0)
    },
    // 登录
    login () {
      this.$refs.form.validate(async valid => {
        if (!valid) return this.$message.error('输入有误')
        const res = await this.$axios.post('/login', this.form)
        if (res.code === 200) {
          this.$message.success('登录成功')
          // 清空form表单
          this.$refs.form.resetFields()
          // 保存token
          saveToken(res.data.token)
          this.$router.push('/layout')
        }
      })
    },
    // 注册
    register () {
      this.$refs.regs.dialogFormVisible = true
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  width: 100%;
  background-image: url('../../assets/images/login_bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  h1 {
    font-size: 20px;
    margin: 10px;
    text-align: center;
  }
  .el-form {
    margin-top: 30px;
    .el-form-item {
      margin-top: 20px;
      img {
        width: 150px;
        display: inline-block;
        height: 40px;
        margin-left: 10px;
      }
    }
  }
  .el-card {
    position: absolute;
    top: 50px;
    left: 50px;
    width: 450px;
    height: 500px;
  }
}
</style>
