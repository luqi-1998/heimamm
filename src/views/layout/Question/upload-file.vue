<template>
  <div class="upload">
    <el-upload
      class="avatar-uploader"
      :action="uploadUrl"
      :data="uploadData"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <video
        v-else-if="videoUrl"
        controls
        :src="videoUrl"
        class="avatar"
      ></video>
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'UploadFile',
  props: {
    type: String, // 区分到底上传的是video还是image
    obj: Object // 给form.video或是单选&多选每一项中的image属性赋值
  },
  data () {
    return {
      uploadUrl: process.env.VUE_APP_BASEURL + '/question/upload',
      uploadData: {
        file: null
      },
      imageUrl: '', // 预览图片的地址
      videoUrl: '' // 视频预览的地址
    }
  },
  watch: {
    obj () {
      if (this.obj.image) {
        this.imageUrl = process.env.VUE_APP_BASEURL + '/' + this.obj.image
      } else {
        this.imageUrl = ''
      }
    },
    'obj.video' () {
      if (this.obj.video) {
        this.videoUrl = process.env.VUE_APP_BASEURL + '/' + this.obj.video
      } else {
        this.videoUrl = ''
      }
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      if (this.type === 'image') {
        // 预览
        this.imageUrl = URL.createObjectURL(file.raw)

        // 给单选或是多选每一个选项中的image赋值
        if (res.code === 200) {
          this.obj.image = res.data.url
        }
      } else {
        // 预览
        this.videoUrl = URL.createObjectURL(file.raw)

        // 给新增/修改中form.video赋值
        if (res.code === 200) {
          this.obj.video = res.data.url
        }
      }
    },
    beforeAvatarUpload (file) {
      if (this.type === 'video') {
        // 视频
        const isVideo = file.type === 'video/mp4' || file.type === 'video/avi'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isVideo) {
          this.$message.error('上传视频只能是 MP4/AVI 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传视频大小不能超过 2MB!')
        }

        // 一定要上传之前，给后台需要的file赋值
        this.uploadData.file = file
        return isVideo && isLt2M
      } else if (this.type === 'image') {
        // 图片
        const isImage =
          file.type === 'image/jpeg' ||
          file.type === 'image/png' ||
          file.type === 'image/gif'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isImage) {
          this.$message.error('上传头像图片只能是 JPG/PNG/GIF 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }

        // 一定要上传之前，给后台需要的file赋值
        this.uploadData.file = file
        return isImage && isLt2M
      }
    }
  }
}
</script>

<style lang="less" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9 !important;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 1px dashed #d9d9d9 !important;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
