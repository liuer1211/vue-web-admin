<template>
  <div class="login-main">
    <div class="login-model">
      <img class="login-logo" src="../../assets/login/logo.png" title="logo"/>
      <el-input placeholder="请输入用户名" v-model="loginForm.username" clearable></el-input>
      <el-input placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
      <el-button type="primary" :loading="loading" @click.native.prevent="handleLogin">
        登录 <!--如果外层包了from标签 ： @click.native.prevent 阻止默认的form表单提交-->
      </el-button>
      <div class="login-cen">
        用户名：admin
        密码：macro123
      </div>
    </div>
  </div>
</template>

<script>
  import {setSupport,getSupport,setCookie,getCookie} from '@/utils/support';
  export default {
    name: 'login',
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
        },
        loading: false,
      }
    },
    methods: {
      handleLogin() {
        this.loading = true;
        this.$store.dispatch('Login', this.loginForm).then((res) => { // 成功
          this.loading = false;
          // "username":"admin","password":"macro123"
          setCookie("username",this.loginForm.username,15);
          setCookie("password",this.loginForm.password,15);
          this.$router.push({path: '/'})
        }).catch(() => { // 失败 或 异常
          this.loading = false;
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .login-main{
    position: relative;
    .login-model{
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      padding: 50px 30px 30px;
      border: 1px solid #d4d4d4;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      margin-left: -150px;
      margin-top: 120px;
      width: 300px;
      text-align: center;
      border-radius: 5px;
      .login-logo {
        position: absolute;
        left: 50%;
        margin-left: -25px;
        margin-top: -77px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        -o-object-fit: cover;
        object-fit: cover;
      }
      .login-cen{
        padding-top: 12px;
        font-size: 12px;
      }
      /deep/ .el-input{
        margin-bottom: 20px;
      }
      /deep/ .el-button{
        width: 100%;
      }
    }
  }
</style>
