<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  const router = useRouter()
  const route = useRoute()
  const form = reactive({
    userMail: '',
    password: '',
    // 确认密码
    confirmPassword: '',
    code: ''
  })
  const onSubmit = () => {
    console.log('submit!')
  }
  const backLogin = (e: Event) => {
    e.preventDefault()
    router.push('/login')
  }
  // 邮箱后缀
  const selectMail = ref<string>('@qq.com')
</script>
<template>
  <div class="container">
    <el-card class="box-card" :body-style="{}">
      <div class="title">
        <div class="row-1"><img src="~@/assets/login-icon.jpg" alt="" /></div>
        <div class="row-2">看到更远更真实的世界~~</div>
      </div>
      <div class="login">
        <el-form :model="form" size="large">
          <el-form-item label="" v-if="route.query?.type === 'forget'">
            <el-input v-model="form.userMail" placeholder="邮箱" />
          </el-form-item>
          <el-form-item label="" v-else>
            <el-input v-model="form.userMail" placeholder="邮箱" class="input-with-select">
              <template #append>
                <el-select v-model="selectMail" placeholder="Select" style="width: 180px">
                  <el-option label="@qq.com" value="@qq.com" />
                  <el-option label="@163.com" value="@163.com" />
                  <el-option label="@outlook.com" value="@outlook.com" />
                </el-select>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="" class="getCode">
            <el-input v-model="form.code" type="password" placeholder="验证码" show-password />
            <el-button type="primary">获取验证码</el-button>
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="form.password" type="password" placeholder="密码" show-password />
          </el-form-item>
          <el-form-item label="">
            <el-input
              v-model="form.confirmPassword"
              type="password"
              placeholder="密码"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button v-if="route.query?.type === 'register'" type="primary" @click="onSubmit"
              >☺ 注册</el-button
            >
            <el-button v-else type="primary" @click="onSubmit">重置密码</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="bottom">
        <a href="javascript:void;" @click="backLogin">返回登陆</a>
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
      height: 600px;
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
        :deep(.el-button),
        :deep(.el-input),
        :deep(.el-input--large) {
          width: 100%;
          height: 50px;
          font-size: 18px;
        }
        .getCode {
          :deep(.el-form-item__content) {
            display: flex;
            justify-content: space-between;
          }
          .el-input {
            width: 75%;
          }
          .el-button {
            width: 23%;
          }
        }
      }
      .bottom {
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
