<template>
  <div class="login-main">
    <div class="login-model">
      <img class="login-logo" src="../../assets/login/logo.png" title="logo"/>
      <el-input placeholder="请输入用户名" v-model="name" clearable></el-input>
      <el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
      <el-button type="primary">登录</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        name: '',
        pwd: ''
      }
    }
  }
</script>

<style scoped lang="scss">
  .login-main{
    position: relative;
    .login-model{
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
      /deep/ .el-input{
        margin-bottom: 20px;
      }
      /deep/ .el-button{
        width: 100%;
      }
    }
  }
</style>
