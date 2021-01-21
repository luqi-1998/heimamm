<template>
  <div>
    <el-card class="que_card">
      <el-form :inline="true" :model="form" ref="form" class="demo-form-inline">
        <el-form-item label="学科" label-width="90px" prop="subject">
          <el-select v-model="form.subject" placeholder="请选择学科">
            <el-option
              v-for="item in subjectList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="阶段" label-width="90px" prop="step">
          <el-select v-model="form.step" placeholder="请选择阶段">
            <el-option
              v-for="item in stepList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="企业" label-width="90px" prop="enterprise">
          <el-select v-model="form.enterprise" placeholder="请选择企业">
            <el-option
              v-for="item in enterpriseList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="题型" label-width="90px" prop="type">
          <el-select v-model="form.type" placeholder="请选择题型">
            <el-option
              v-for="item in typeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="难度" label-width="90px" prop="difficulty">
          <el-select v-model="form.difficulty" placeholder="请选择难度">
            <el-option
              v-for="item in difficultyList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="作者" label-width="90px" prop="username">
          <el-input style="width:176px" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="状态" label-width="90px" prop="status">
          <el-select v-model="form.status" placeholder="请选择状态">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期" label-width="90px" prop="create_date">
          <el-date-picker
            type="date"
            v-model="form.create_date"
            placeholder="选择日期"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="标题" label-width="90px" prop="title">
          <el-input style="width:471px" v-model="form.title"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button @click="search" type="primary">搜索</el-button>
          <el-button @click="clear">清除</el-button>
          <el-button type="primary" @click="add">+新增试题</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card style="margin-top:20px;">
      <el-table :data="list" border stripe>
        <el-table-column type="index" width="50" label="序号" />
        <el-table-column label="题目">
          <template slot-scope="scope">
            <span v-html="scope.row.title"></span>
          </template>
        </el-table-column>
        <el-table-column label="学科.阶段">
          <template slot-scope="scope">
            <span v-if="scope.row.step === 1"
              >{{ scope.row.subject_name }}.初级</span
            >
            <span v-else-if="scope.row.step === 2"
              >{{ scope.row.subject_name }}.中级</span
            >
            <span v-else-if="scope.row.step === 3"
              >{{ scope.row.subject_name }}.高级</span
            >
          </template>
        </el-table-column>
        <el-table-column prop="type" label="题型" :formatter="formatType" />
        <el-table-column prop="enterprise_name" label="企业" />
        <el-table-column prop="username" label="创建者" />
        <el-table-column prop="reads" label="访问量" />
        <el-table-column label="状态">
          <template #default="scope">
            <span
              :style="{ color: scope.row.status === 0 ? 'red' : '#606266' }"
              >{{ scope.row.status === 0 ? '禁用' : '启用' }}</span
            >
          </template>
        </el-table-column>
        <el-table-column label="操作" width="280px">
          <!-- 这个template是作用域插槽中的固定语法，跟最外层的不一样 -->
          <template slot-scope="scope">
            <el-button @click="edit(scope.row)">编辑</el-button>
            <el-button
              @click="changeStatus(scope.row.id)"
              :type="scope.row.status === 0 ? 'success' : 'info'"
              >{{ scope.row.status === 0 ? '启用' : '禁用' }}</el-button
            >
            <el-button @click="del(scope.row.id, scope)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="limit"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <add-or-update
      :subjectList="subjectList"
      :enterpriseList="enterpriseList"
      :stepList="stepList"
      :typeList="typeList"
      :difficultyList="difficultyList"
      ref="addOrUpdateRef"
    />
  </div>
</template>

<script>
import AddOrUpdate from './add-or-update'
export default {
  name: 'QuestionList',
  components: {
    AddOrUpdate
  },
  data () {
    return {
      // 下拉选择的模型
      subjectList: [], // 学科列表
      enterpriseList: [], // 企业列表
      stepList: [
        // 阶段列表
        { label: '初级', value: 1 },
        { label: '中级', value: 2 },
        { label: '高级', value: 3 }
      ],
      typeList: [
        // 题型列表
        { label: '单选', value: 1 },
        { label: '多选', value: 2 },
        { label: '简答', value: 3 }
      ],
      difficultyList: [
        // 难度列表
        { label: '简单', value: 1 },
        { label: '一般', value: 2 },
        { label: '困难', value: 3 }
      ],
      options: [
        // 状态
        {
          value: 0,
          label: '禁用'
        },
        {
          value: 1,
          label: '启用'
        }
      ],
      form: {
        title: '', // 标题名称
        subject: '', // 学科id
        enterprise: '', // 企业id
        type: '', // 题目类型:1(单选),2(多选),3(简答)
        step: '', // 题目阶段:1(初级),2(中级),3(高级)
        username: '', // 作者
        status: '', // 状态
        difficulty: '', // 题目难度: 1(简单),2(一般),3(困难)
        create_date: '' // 创建日期
      },
      page: 1, // 页码
      limit: 2, // 每页多少条
      list: [], // 题库列表
      total: 0 //  总条数
    }
  },
  mounted () {
    this.getSubjectListData()

    this.getEnterpriseListData()

    this.getQuestionListData()
  },
  methods: {
    async getSubjectListData () {
      const res = await this.$axios.get('/subject/list')

      this.subjectList = res.data.items
    },
    async getEnterpriseListData () {
      const res = await this.$axios.get('/enterprise/list')

      this.enterpriseList = res.data.items
    },
    async getQuestionListData () {
      const res = await this.$axios.get('/question/list', {
        params: {
          ...this.form,
          page: this.page,
          limit: this.limit
        }
      })

      if (res.code === 200) {
        this.list = res.data.items
        this.total = res.data.pagination.total
      }
    },
    search () {
      this.page = 1
      this.getQuestionListData()
    },
    clear () {
      this.$refs.form.resetFields()

      this.search()
    },
    async changeStatus (id) {
      const res = await this.$axios.post('/question/status', { id })
      if (res.code === 200) {
        this.$message.success('更改状态成功~')

        this.getQuestionListData()
      }
    },
    del (id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          const res = await this.$axios.post('/question/remove', { id })

          if (res.code === 200) {
            this.$message.success('删除成功~')

            this.search()
          }
        })
        .catch(() => {})
    },
    // 格式化某列的内容
    formatType (row, column, cellValue, index) {
      let typeName = ''
      switch (cellValue) {
        case 1:
          typeName = '单选'
          break
        case 2:
          typeName = '多选'
          break
        case 3:
          typeName = '简答'
          break
        default:
          break
      }

      return typeName
    },
    // 当每页多少条改变了
    handleSizeChange (val) {
      this.limit = val

      this.search()
    },
    // 当前页码改变了
    handleCurrentChange (val) {
      this.page = val

      this.getQuestionListData()
    },
    // 新增题目
    add () {
      this.$refs.addOrUpdateRef.dialogVisible = true
      this.$refs.addOrUpdateRef.mode = 'add'
    },
    // 修改题目
    edit (row) {
      this.$refs.addOrUpdateRef.dialogVisible = true

      this.$refs.addOrUpdateRef.$nextTick(() => {
        this.$refs.addOrUpdateRef.mode = 'edit'
        this.$refs.addOrUpdateRef.form = JSON.parse(JSON.stringify(row))
        // 以下要转成数组
        this.$refs.addOrUpdateRef.form.city = this.$refs.addOrUpdateRef.form.city.split(
          ','
        )
        this.$refs.addOrUpdateRef.form.multiple_select_answer = this.$refs.addOrUpdateRef.form.multiple_select_answer.split(
          ','
        )
        // 如果发现之前是简答，并且服务器又没有返回选项
        if (row.select_options.length === 0) {
          this.$refs.addOrUpdateRef.form.select_options = [
            // 单选或多选的选项
            {
              label: 'A',
              text: '',
              image: ''
            },
            {
              label: 'B',
              text: '',
              image: ''
            },
            {
              label: 'C',
              text: '',
              image: ''
            },
            {
              label: 'D',
              text: '',
              image: ''
            }
          ]
        }

        this.$refs.addOrUpdateRef.$refs.myQuillEditor.quill.enable(false) // 刚开始时，不聚焦
        this.$refs.addOrUpdateRef.$refs.myQuillEditor.quill.blur()
        this.$refs.addOrUpdateRef.$refs.myQuillEditor1.quill.enable(false) // 刚开始时，不聚焦
        this.$refs.addOrUpdateRef.$refs.myQuillEditor1.quill.blur()
        setTimeout(() => {
          this.$refs.addOrUpdateRef.$refs.myQuillEditor.quill.enable(true) // 2秒之后可以点击（聚焦）
          this.$refs.addOrUpdateRef.$refs.myQuillEditor1.quill.enable(true) // 2秒之后可以点击（聚焦）
        }, 2000)
      })
    }
  }
}
</script>

<style lang="less">
.el-table--border th.gutter:last-of-type {
  display: block !important;
  width: 17px !important;
}
</style>
