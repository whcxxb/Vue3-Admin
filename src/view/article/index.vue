<template>
  <el-card class="box-card">
    <div class="h-15 lh-15 mb-3">
      <el-button type="primary" class="ml-2" @click="onAdd">添加文章</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="title" label="文章标题" />
      <el-table-column prop="content" label="文章内容">
        <!-- <template #default="scope">
          <el-tag v-if="scope.row.isEnable" type="success">启用</el-tag>
          <el-tag v-else type="danger">停用</el-tag>
        </template> -->
      </el-table-column>
      <el-table-column prop="imgArr" label="图片">
        <template #default="scope">
          <img :src="scope.row.imgArr[0]" alt="" width="100" height="100" />
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="发布日期" />
      <el-table-column label="操作" fixed="right" width="120" align="center">
        <template #default="scope">
          <el-button size="small" type="primary" @click="editArticle(scope.row)" link
            >编辑</el-button
          >
          <el-popconfirm width="160" title="是否删除此账号?" @confirm="onDel(scope.row._id)">
            <template #reference>
              <el-button size="small" type="primary" link>删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
  <add ref="addArticle"></add>
</template>
<script setup lang="ts">
  import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue'
  import { getAction, postAction } from '@/utils/http/api'
  import { ElMessage } from 'element-plus'
  import add from './add.vue'
  const addArticle = ref<any>(null)
  let tableData = reactive<object[]>([])
  const getUser = async () => {
    const res = await getAction('/articleList')
    console.log(res)
    res.data.list.forEach((item: any) => {
      item.createTime = new Date(item.createTime).toLocaleString()
    })
    tableData.push(...res.data.list)
    console.log(tableData)
  }
  onMounted(() => {
    getUser()
  })
  const editArticle = (row: any) => {
    console.log(row)
    addArticle.value.show(row, 2)
  }
  const changeStatus = (row: any) => {
    console.log(row._id)
    postAction('updatestatus', {
      _id: row._id,
      isEnable: row.isEnable
    }).then((res: any) => {
      if (res.success) {
        ElMessage.success(res.msg)
      } else {
        ElMessage.error(res.msg)
      }
    })
  }
  const onDel = (id: string) => {
    console.log(id)
  }

  // 添加文章
  const onAdd = () => {
    addArticle.value.show(null, 1)
  }
</script>
