<template>
  <div class="common-layout">
    <el-container>
      <el-header class="flex">
        <div class="logo w-50">
          <div @click="backHome">blogAdmin</div>
        </div>
        <div class="header">
          <div>{{ menuName }}</div>
          <div>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <!-- <el-icon><Avatar /></el-icon> {{ userName }} -->
                <img src="https://avatars.githubusercontent.com/u/20062144?v=4" alt="" />
                <!-- <el-avatar :size="30" src="https://avatars.githubusercontent.com/u/20062144?v=4" /> -->
                {{ userName }}
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item :icon="Avatar">个人中心</el-dropdown-item>
                  <el-dropdown-item :icon="CloseBold" @click="signOut">登出</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <menus />
        </el-aside>
        <el-main>
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  import { RouterView, useRoute, useRouter } from 'vue-router'
  import { useUserStore } from '@/store/user'
  import menus from './menus.vue'
  import { ArrowDown, Avatar, CloseBold } from '@element-plus/icons-vue'

  const menuName = ref<any>('')
  const route = useRoute()
  const router = useRouter()
  watchEffect(() => {
    menuName.value = route.meta.title
  })
  const backHome = () => {
    router.push('/dashboard')
  }

  const userStore = useUserStore()
  const userName = ref<string>('')
  userName.value = userStore.getUserName

  // 登出
  const signOut = () => {
    userStore.removeUserInfo()
    router.push('/login')
  }
</script>

<style lang="less" scoped>
  .common-layout {
    height: 100vh;
    overflow: hidden;
    .el-container {
      height: 100%;
    }
    .el-header {
      padding: 0;
      .logo {
        cursor: pointer;
        background-color: #36ad6a;
        color: #f8fafc;
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        line-height: 60px;
      }
      .header {
        width: calc(100% - 320px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 60px;
        font-size: 18px;
        .el-dropdown-link {
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 10px;
          }
        }
      }
    }
    .el-aside {
      .el-menu--vertical {
        border-right: none;
      }
    }
    .el-main {
      overflow: auto;
      background-color: #f2f6fc;
    }
  }
</style>
