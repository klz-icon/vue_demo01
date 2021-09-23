<template>
  <!-- <el-row> -->
    <div>

<!--  :collapse="isCollapse" -->

    <transition  mode="out-in">
    <el-menu
      :width="isCollapse?'64px':'200px'"

      :unique-opened="true" 
      active-text-color="#409EFF"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :collapse-transition="true"
      :router="true"
    >
     <el-menu-item index="/home" class="dashboard">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="" class="el-submenu">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span>博文</span>
        </template>
        <el-menu-item-group class="el-menu-item-group">
          <el-menu-item index="articleManage">博文管理</el-menu-item>
          <el-menu-item index="classify">分类管理</el-menu-item>
          <el-menu-item index="writeBlog">写博客</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 评论 -->
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-chat-line-square"></i>
          <span>评论</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">评论管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 通知 -->
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-bell"></i>
          <span>通知</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">通知管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

  <el-submenu index="5">
          <template slot="title">
              <i class="el-icon-user"></i>
              <span>用户</span>
          </template>
          <el-menu-item-group>
              <el-menu-item index="5-1">用户管理</el-menu-item>
              <el-menu-item index="5-2">个人中心</el-menu-item>
              <el-menu-item index="5-3">修改密码</el-menu-item>
          </el-menu-item-group>
      </el-submenu>

            <div v-on:click="toggleCollapse()">
      <el-menu class="arr"   >
            <i :class="isCollapse ? 'el-icon-d-arrow-right arrow' : 'el-icon-d-arrow-left arrow'" ></i> 
      </el-menu>
      </div>

</el-menu>
    </transition>



    </div>
  <!-- </el-row> -->
</template>

<script>
export default {
   data() {
      return {
        isCollapse: false,
      };
    },
  methods: {
  
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toggleCollapse () {
        this.isCollapse = !this.isCollapse
        this.$emit('toggleCollapse',this.isCollapse)
        console.log("isCollapse"+this.isCollapse)
    }
   
  },
};
</script>


<style>

.el-submenu{
    text-align: left;
    align-items: left;
    background-color: #f5f5f5;
}

.el-menu-item-group_title{
    text-align: center;
    align-items: center;
    padding: 0px !important;
}

.dashboard{
    background-color: #ffffff;
    text-align: left;
    /* default-active: ture; */
    /* active-text-color: #4B88B7;
    text-color: #4B88B7; */
}

.arr{
  background-color: #f5f5f5;
  border-top: 0.5px solid #ccc !important;
  border-bottom: 1px solid #ccc !important;
  padding: 10px;
}



.arrow{
    background-color: #ffffff;
    color: #ccc;
    padding: 1px;
    margin: auto;
    border: solid 1px #ccc;
    border-radius: 45px;
}

</style>
