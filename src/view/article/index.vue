<template>
  <el-card class="box-card">
    <div class="h-15 lh-15 mb-3">
      <el-button type="primary" class="ml-2" @click="onAdd">添加文章</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="username" label="文章标题" />
      <el-table-column prop="isEnable" label="是否显示">
        <template #default="scope">
          <el-tag v-if="scope.row.isEnable" type="success">启用</el-tag>
          <el-tag v-else type="danger">停用</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="发布日期" />
      <el-table-column label="操作" fixed="right" width="120" align="center">
        <template #default="scope">
          <el-switch
            size="small"
            v-model="scope.row.isEnable"
            class="ml-2"
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
            @change="changeStatus(scope.row)"
          />
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
    const res = await getAction('/userlist')
    res.data.forEach((item: any) => {
      item.createTime = new Date(item.createTime).toLocaleString()
    })
    tableData.push(...res.data)
  }
  onMounted(() => {
    getUser()
  })
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
    addArticle.value.show()
  }
</script>
