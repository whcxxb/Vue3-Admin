<script setup lang="ts">
  import { reactive } from 'vue'
  const form = reactive({
    userName: '',
    password: ''
  })
  const onSubmit = () => {
    console.log('submit!')
  }
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
          <el-form-item label="">
            <el-input v-model="form.userName" placeholder="邮箱" />
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="form.password" type="password" placeholder="密码" show-password />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="register">
        <a href="javascript:void;">注册</a>
        <a href="javascript:void;">忘记密码</a>
      </div>
    </el-card>
  </div>
</template>
<style lang="less">
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
