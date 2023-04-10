<template>
  <el-dialog v-model="dialogVisible" :title="title" width="90%">
    <div class="w-1/3 mb-3">
      <el-input v-model="article.title" placeholder="文章标题"></el-input>
    </div>
    <md-editor @onUploadImg="onUploadImg" v-model="text" @onSave="onSave" />
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
  const emit = defineEmits(['refresh'])
  // MdEditor.config({
  //   // 编辑器配置 去掉标题锚点
  //   markedRenderer(renderer) {
  //     renderer.heading = (text, level) => {
  //       const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-')
  //       return `<h${level} id="${escapedText}">${text}</h${level}>`
  //     }
  //     return renderer
  //   }
  // })
  const text = ref<string>('')
  const title = ref<string>('添加文章')
  const isN = ref<number>(0)
  const articleID = ref<string>('')
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
  const show = (res: any, n: number) => {
    isN.value = n
    articleID.value = res && res._id
    if (n === 2) {
      title.value = '修改文章'
      article.title = res.title
      article.content = res.content
      article.img = res.img
      text.value = res.content
    } else {
      title.value = '添加文章'
      article.title = ''
      article.content = ''
      article.img = []
      text.value = ''
    }
    dialogVisible.value = true
  }
  const addArticle = () => {
    // 执行保存
    onSave(text.value)
    if (!article.title && !article.content) {
      ElMessage.warning('标题或内容不能为空')
      return
    }
    if (isN.value === 1) {
      postAction('/aadArticle', article).then((res: any) => {
        if (res.success) {
          ElMessage.success(res.msg)
          // 发送事件
          emit('refresh')
          dialogVisible.value = false
        } else {
          ElMessage.success(res.msg)
          return
        }
      })
    }
    if (isN.value === 2) {
      postAction('/editArticle', {
        id: articleID.value,
        ...article
      }).then((res: any) => {
        if (res.success) {
          ElMessage.success(res.msg)
          emit('refresh')
          dialogVisible.value = false
        } else {
          ElMessage.success(res.msg)
          return
        }
      })
    }
  }
  defineExpose({
    show
  })
</script>
