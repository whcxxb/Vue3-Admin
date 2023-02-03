<template>
  <el-dialog v-model="dialogVisible" title="添加文章" width="90%">
    <div class="w-1/3 mb-3">
      <el-input v-model="article.title" placeholder="文章标题"></el-input>
    </div>
    <md-editor @onUploadImg="onUploadImg" v-model="text" @onSave="onSave" />
    <!-- <div v-html="htmlStr"></div> -->
    <!-- <md-editor v-model="htmlStr" preview-only /> -->
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false"> 添加 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import MdEditor from 'md-editor-v3'
  import 'md-editor-v3/lib/style.css'
  import { uploadFileAction } from '@/utils/http/api'
  MdEditor.config({
    // 编辑器配置 去掉标题锚点
    markedRenderer(renderer) {
      renderer.heading = (text, level) => {
        const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-')
        return `<h${level} id="${escapedText}">${text}</h${level}>`
      }
      return renderer
    }
  })
  const text = ref<string>('')
  // const markDownStr = ref<string>('')
  const article = reactive({
    title: '',
    content: '',
    img: <any>[]
  })
  const onUploadImg = async (files: any, callback: any) => {
    const res = await Promise.all(
      files.map((file: any) => {
        return new Promise((rev, rej) => {
          const form = new FormData()
          form.append('file', file)
          uploadFileAction('/upload', form).then((res: any) => {
            rev(res.data.imgUrl)
          })
          // axios
          //   .post('/api/img/upload', form, {
          //     headers: {
          //       'Content-Type': 'multipart/form-data'
          //     }
          //   })
          //   .then((res) => rev(res))
          //   .catch((error) => rej(error))
        })
      })
    )
    callback(
      res.map((item) => {
        article.img.push(item)
        return item
      })
    )
  }
  const onSave = (val: string) => {
    console.log(val)
    article.content = val
  }
  const dialogVisible = ref(false)
  const show = () => {
    dialogVisible.value = true
  }
  defineExpose({
    show
  })
</script>
