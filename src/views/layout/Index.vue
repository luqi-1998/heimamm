<template>
  <div class="layout">
    <el-container>
      <el-header>
        <div class="left">
          <i class="el-icon-s-fold"></i>
          <img src="../../assets/images/layout_icon.png" alt="" />
          <span>黑马面面</span>
        </div>
        <div class="right">
          <img :src="avator" alt="" />
          <span>{{ userInfo.username }}</span>
          <span>欢迎你</span>
          <el-button type="primary" @click="logout">退出</el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="/" class="el-menu-vertical-demo" router>
            <div
              v-for="(item, index) in $router.options.routes[2].children"
              :key="index"
            >
              <el-menu-item
                :index="item.meta.path"
                v-if="item.meta.role.includes(userInfo.role)"
              >
                <i :class="item.meta.icon"></i>
                <span slot="title">{{ item.meta.title }}</span>
              </el-menu-item>
            </div>
          </el-menu>
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { removeToken } from '@/utils/token'
export default {
  data () {
    return {
      avator: '',
      userInfo: {}
    }
  },
  methods: {
    // 获取登录基本用户信息
    async getUser () {
      const res = await this.$axios.get('/info')
      if (res.code === 200) {
        this.avator = process.env.VUE_APP_BASEURL + '/' + res.data.avatar
        this.userInfo = res.data
      }
      if (!this.$route.meta.role.includes(res.data.role)) {
        this.$message.error('你没有访问该页面的权利')
        this.$router.push('/login')
      } else {
        this.$store.commit('setUserInfo', res.data)
      }
    },
    // 退出登录
    logout () {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          const res = await this.$axios.get('/logout')
          if (res.code === 200) {
            removeToken()
            this.$router.push('/login')
          }
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  },
  created () {
    this.getUser()
  },
  watch: {
    $route (newValue) {
      if (!newValue.meta.role.includes(this.userInfo.role)) {
        this.$message.error('你没有访问该页面的权利')
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
  .el-container {
    height: 100%;
  }
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    font-size: 22px;
    img {
      margin: 0 10px;
    }
    span {
      color: #09b0fa;
      font-size: 22px;
    }
  }
  .right {
    img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid red;
      margin-right: 15px;
    }
    .el-button {
      margin: 0 20px;
    }
  }
}
.el-main {
  background-color: #e8e9ec;
}
</style>
