<template>
  <div>
    <h3 class="title">iBlog</h3>
    <el-dropdown trigger="click" class="drop">
      <span class="el-dropdown-link">
       <el-avatar :size="40" class="ava">klz</el-avatar>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

  </div>
</template>

<script>

export default {
  name: 'Header',
  components: {
  
  },
  methods: {

  }
}
</script>


<style>
.title {
  letter-spacing: 2px;
  font-size: 18px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: #ffffff;
  float: left;
}

.drop{
    float: right;
}

.ava {
  float: right;
  text-align: center;
  align-items: center;
  padding: 0px;
  margin-top: 10px;
  background-color: #f8f8f8;
  color: #409EFF;
}

 .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;
    margin-left: 10%;
    position: absolute;
    top: 7px;
  }

</style>