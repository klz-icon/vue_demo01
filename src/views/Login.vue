<template>
  <div class="container" align="center">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="login-title">登录</span>
      </div>

      <div class="text item">
        <el-form
          :inline="true"
          v-model="loginForm"
          :rules="rules"
          class="demo-form-inline"
        >
          <el-form-item label="账号">
            <el-input
              v-model="loginForm.username"
              placeholder="账号"
            ></el-input>
          </el-form-item>
          <br />

          <el-form-item label="密码">
            <el-input
              v-model="loginForm.password"
              type="password"
              placeholder="密码"
            ></el-input>
          </el-form-item>
          <br />

          <el-button size="medium" type="primary" @click="login"
            >登录</el-button
          >
        </el-form>
      </div>

      <el-divider></el-divider>

      <div class="clearfix">
        <el-link :underline="false" type="primary" class="link-left"
          >忘记密码</el-link
        >
        <el-link :underline="false" type="primary" class="link-right"
          >注册</el-link
        >
      </div>


    </el-card>
  </div>
</template>


<script>
import {login2} from '@/api/login2.js'
import store from "@/store/index.js";

export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      token: "",
      rules: {
        username: [{ required: true, trigger: "blur" }],
        password: [{ required: true, trigger: "blur" }],
      },
    };
  },
  methods: {
    login() {
      if(this.loginForm.username === 'klz' && this.loginForm.password === 'klz'){
         this.$router.push('/home')
      }else{
        confirm("用户名或者而密码错误")
        this.$router.push('/')
      }

      // this.$api.login2.login({
      //     data: {
      //       username: this.loginForm.username,
      //       password: this.loginForm.password,
      //     },
      //   })
      //   .then((res) => {
      //     // this.$store.commit("setToken", res.data);
      //     console.log(res.data)
      //   })
      //   .catch((err) => {
         
      //   });

      //  this.$api.login.login().then(res =>{})

      // this.$api.login2.login().then(res =>{})
      
    },

    // 通过跳转一个空页面再返回的方式来实现刷新当前页面数据的目的
    onRefresh() {
      this.$router.replace("/refresh");
    },
  },
};
</script>


// 样式
<style>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.text {
  font-size: 14px;
  color: #c0c4cc;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  width: 420px;
  border: 1px solid skyblue;
}

.link-left {
  float: left;
}

.link-right {
  float: right;
}
</style>

