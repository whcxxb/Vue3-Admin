<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { getAction, postAction } from '@/utils/http/api'
  import { ElMessage } from 'element-plus'
  import { ElNotification } from 'element-plus'
  const router = useRouter()
  const form = reactive({
    username: '',
    password: ''
  })
  const isLoading = ref<boolean>(false)
  const onSubmit = async () => {
    isLoading.value = true
    if (form.username.trim() === '' || form.password.trim() === '') {
      ElNotification({
        title: '登录失败',
        message: '邮箱或密码不能为空',
        type: 'error'
      })
      setTimeout(() => {
        isLoading.value = false
      }, 500)
      return
    }
    const res: any = await postAction('/login', form)
    console.log(res)
    if (res.success) {
      form.username = ''
      form.password = ''
      isLoading.value = false
      router.push('/home')
    }
  }
  const goRegister = (n: number) => {
    if (n === 1) {
      router.push({
        path: '/register',
        query: {
          type: 'register'
        }
      })
    } else {
      router.push({
        path: '/forget',
        query: {
          type: 'forget'
        }
      })
    }
  }
  // const getUser = async () => {
  //   const res = await getAction('/userlist')
  //   console.log(res)
  // }
  // getUser()
</script>
<template>
  <div class="container">
    <el-card class="box-card" :body-style="{}">
      <div class="title">
        <div class="row-1"><img src="~@/assets/login-icon.jpg" alt="" /></div>
        <div class="row-2">看到更远更真实的世界~~</div>
      </div>
      <div class="login">
        <el-form ref="formRef" :model="form" size="large">
          <el-form-item label="">
            <el-input v-model="form.username" placeholder="邮箱" />
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="form.password" type="password" placeholder="密码" show-password />
          </el-form-item>
          <el-form-item>
            <el-button color="#3867d6" type="primary" :loading="isLoading" @click="onSubmit()">
              <template #default>
                <span v-show="!isLoading">🚀 登录</span>
              </template>
              <template #loading>
                <el-icon class="is-loading">
                  <svg class="svg-icon" aria-hidden="true">
                    <use xlink:href="#icon-jiazai"></use>
                  </svg>
                </el-icon>
              </template>
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="register">
        <a href="javascript:void;" @click.prevent="goRegister(1)">注册</a>
        <a href="javascript:void;" @click.prevent="goRegister(2)">忘记密码</a>
      </div>
    </el-card>
  </div>
</template>
<style lang="less" scoped>
  .container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #f5f5f5;
    position: relative;
    .box-card {
      width: 560px;
      height: 430px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .title {
        text-align: center;
        margin: 20px 0px;
        .row-1 {
          width: 80px;
          height: 80px;
          margin: 0 auto;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .row-1:hover {
          animation: rotate 1s linear infinite;
        }
        .row-2 {
          font-size: 18px;
          color: rgba(119, 140, 163, 0.8);
        }
      }
      .login {
        .el-button,
        .el-input {
          width: 100%;
          height: 50px;
          font-size: 20px;
        }
      }
      .register {
        width: 100%;
        display: flex;
        justify-content: space-between;
        a {
          color: #778ca3;
          font-size: 16px;
          cursor: pointer;
          // 取消a标签的下划线
          text-decoration: none;
        }
        a:hover {
          color: #4b6584;
        }
      }
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
</style>
