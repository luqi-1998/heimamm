<template>
  <div class="question">
    <el-dialog :visible.sync="dialogVisible" fullscreen>
      <div slot="title" style="fontSize:20px;color:#fff">
        {{ this.mode === 'add' ? '新增题目' : '修改题目' }}
      </div>
      <el-form
        class="form"
        :model="form"
        ref="form"
        :rules="rules"
        label-width="120px"
        :inline="false"
        size="normal"
        label-position="left"
      >
        <el-form-item label="学科" prop="subject">
          <el-select
            style="width:350px"
            v-model="form.subject"
            placeholder="请选择学科"
          >
            <el-option
              v-for="item in subjectList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="阶段" prop="step">
          <el-select
            style="width:350px"
            v-model="form.step"
            placeholder="请选择阶段"
          >
            <el-option
              v-for="item in stepList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="企业" prop="enterprise">
          <el-select
            style="width:350px"
            v-model="form.enterprise"
            placeholder="请选择企业"
          >
            <el-option
              v-for="item in enterpriseList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="城市" prop="city">
          <el-cascader
            size="large"
            :options="options"
            :props="{ value: 'label' }"
            v-model="form.city"
          >
          </el-cascader>
        </el-form-item>
        <el-form-item label="题型" prop="type">
          <el-radio-group v-model="form.type">
            <!-- label代表它的唯一值，他这个值选中之后，最终会赋值给form.type -->
            <el-radio
              v-for="item in typeList"
              :key="item.value"
              :label="item.value"
              >{{ item.label }}</el-radio
            >
          </el-radio-group>
        </el-form-item>
        <el-form-item label="难度" prop="difficulty">
          <el-radio-group v-model="form.difficulty">
            <!-- label就是值 -->
            <el-radio
              v-for="item in difficultyList"
              :key="item.value"
              :label="item.value"
              >{{ item.label }}</el-radio
            >
          </el-radio-group>
        </el-form-item>
        <hr class="hrMargin" />
        <el-form-item class="setMargin" label="试题标题" prop="title">
          <quill-editor
            :options="{ placeholder: '请输入试题标题...' }"
            v-model="form.title"
            ref="myQuillEditor1"
            @blur="onEditorBlur('title')"
          />
        </el-form-item>
        <el-form-item
          :label="labelOption[form.type]"
          :prop="propOption[form.type]"
        >
          <!-- 题型子组件 -->
          <question-type :form="form" />
        </el-form-item>
        <hr class="hrMargin" />
        <el-form-item label="解析视频" prop="video">
          <upload-file type="video" :obj="form" />
        </el-form-item>
        <el-form-item class="setMargin" label="答案解析" prop="answer_analyze">
          <quill-editor
            :options="{ placeholder: '请输入答案解析...' }"
            ref="myQuillEditor"
            v-model="form.answer_analyze"
            @blur="onEditorBlur('answer_analyze')"
          />
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submit">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { regionData } from 'element-china-area-data'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
import UploadFile from './upload-file'
import QuestionType from './question-type'
export default {
  name: 'QuestionEdit',
  components: {
    quillEditor,
    UploadFile,
    QuestionType
  },
  props: {
    // 学科列表
    subjectList: {
      type: Array,
      default: function () {
        return []
      }
    },
    // 企业列表
    enterpriseList: {
      type: Array,
      default: function () {
        return []
      }
    },
    // 阶段列表
    stepList: {
      type: Array,
      default: function () {
        return []
      }
    },
    // 题型列表
    typeList: {
      type: Array,
      default: function () {
        return []
      }
    },
    // 难度列表
    difficultyList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      options: regionData, // 城市选择需要用到的数据
      dialogVisible: false,
      mode: '',
      labelOption: {
        // 动态显示标题
        1: '单选',
        2: '多选',
        3: '简答'
      },
      propOption: {
        1: 'single_select_answer',
        2: 'multiple_select_answer',
        3: 'short_answer'
      },
      // 这个form就是在新增或是修改的时候，最终提交给后台的数据
      form: {
        title: '', // 标题
        subject: '', // 学科id
        step: '', // 阶段
        enterprise: '', // 企业id
        city: [], // 城市
        type: 1, // 题型（1：单选、2：多选、3：简答）
        difficulty: 1, // 题目难度 1简单 、2一般 、3困难
        single_select_answer: 'A', // 单选答案
        multiple_select_answer: [], // 多选答案
        short_answer: '', // 简答答案
        video: '', // 解析视频地址
        answer_analyze: '', // 答案解析
        remark: '', // 备注
        select_options: [
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
      },
      rules: {
        subject: [
          { required: true, message: '学科不能为空', trigger: 'change' }
        ],
        step: [{ required: true, message: '阶段不能为空', trigger: 'change' }],
        enterprise: [
          { required: true, message: '企业不能为空', trigger: 'change' }
        ],
        city: [{ required: true, message: '城市不能为空', trigger: 'change' }],
        type: [{ required: true, message: '题型不能为空', trigger: 'change' }],
        difficulty: [
          { required: true, message: '难度不能为空', trigger: 'change' }
        ],
        title: [
          // 这个trigger:'blur'是指针对element-ui相关的组件，如果不是，则不起作用
          { required: true, message: '试题标题不能为空' }
        ],
        answer_analyze: [
          // 这个trigger:'blur'是指针对element-ui相关的组件，如果不是，则不起作用
          { required: true, message: '答案解析不能为空' }
        ],
        single_select_answer: [
          { required: true, message: '单选答案不能为空', trigger: 'change' }
        ],
        multiple_select_answer: [
          { required: true, message: '多选答案不能为空', trigger: 'change' }
        ],
        short_answer: [
          { required: true, message: '简答答案不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    // this.$refs.myQuillEditor.quill.enable(false)
  },
  watch: {
    'form.type' (newValue) {
      this.$refs.form.clearValidate([
        'single_select_answer',
        'multiple_select_answer',
        'short_answer'
      ])
      // 谁变了，就校验谁
      this.$refs.form.validateField(this.propOption[newValue])
    },
    dialogVisible (newValue) {
      if (!newValue) {
        this.$refs.myQuillEditor.quill.blur()
        this.$refs.myQuillEditor1.quill.blur()
        this.$refs.form.resetFields()
        // 清除选型的内容
        this.form.select_options = [
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

        // 给单选赋值一个默认值A
        this.form.single_select_answer = 'A'

        // 清除简答的答案
        this.form.short_answer = ''
      }
    }
  },
  methods: {
    // 能过对两个富文本编辑器进行校验
    onEditorBlur (fieldName) {
      // 清除3个
      this.$refs.form.validateField(fieldName)
    },
    submit () {
      this.$refs.form.validate(async valid => {
        if (!valid) return
        let url = ''
        if (this.mode === 'add') {
          url = '/question/add'
        } else {
          // 修改比较特殊，要将数组转成字符串
          this.form.city = this.form.city.join(',')
          url = '/question/edit'
        }

        const res = await this.$axios.post(url, this.form)

        if (res.code === 200) {
          // 提示
          this.$message.success(this.mode === 'add' ? '新增成功~' : '修改成功~')

          // 关闭当前窗口
          this.dialogVisible = false

          // 调用父组件search，刷新页面
          this.$parent.search()
        }
      })
    }
  }
}
</script>

<style lang="less">
.question {
  .form {
    width: 832px;
    margin: 0 auto;
  }
  .hrMargin {
    margin-bottom: 20px;
  }
  .ql-editor {
    height: 200px !important;
  }
  .setMargin {
    .el-form-item__content {
      margin-left: 0 !important;
      margin-top: 40px;
    }
  }
}
</style>
