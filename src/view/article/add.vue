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
        <el-button type="primary" @click="addArticle"> 添加 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
  import { ElMessage } from 'element-plus'
  import { ref, reactive } from 'vue'
  import { uploadFileAction, postAction } from '@/utils/http/api'
  import MdEditor from 'md-editor-v3'
  import 'md-editor-v3/lib/style.css'
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
  interface Article {
    title: string
    content: string
    img: string[]
  }
  const article: Article = reactive({
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
          uploadFileAction('/upload', form).then((res) => {
            rev(res.data.imgUrl)
          })
        })
      })
    )
    callback(
      res.map((item) => {
        return item
      })
    )
  }
  const onSave = (val: string) => {
    article.img = []
    article.content = val
    let url: any = val.match(/!\[.*?\]\((.*?)\)/g)
    if (url) {
      url = url.map((item: any) => {
        return item.match(/!\[.*?\]\((.*?)\)/)[1]
      })
      article.img = url
    }
  }
  const dialogVisible = ref(false)
  const show = () => {
    dialogVisible.value = true
  }
  const addArticle = () => {
    if (!article.title && !article.content) {
      ElMessage.warning('标题或内容不能为空')
      return
    }
    postAction('/aaArticle', article).then((res: any) => {
      if (res.success) {
        ElMessage.success('添加成功')
        dialogVisible.value = false
      }
    })
    console.log(article)
  }
  defineExpose({
    show
  })
</script>
