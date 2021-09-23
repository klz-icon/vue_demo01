<template>

<!-- element-ui上找的代码段，改一改 -->
  <el-container class="container">

    <!-- 顶部 -->
    <el-header class="header">
      <Header />
    </el-header>

    <!-- 主面板 -->
    <el-container>

      <!-- 主面板侧边栏 -->
      <el-aside  :width="isCollapse?'64px':'200px'" class="aside">
        <Aside   @toggleCollapse="toggleCollpase"/>
      </el-aside>

      <!-- main -->
      <el-container>
        <el-main class="main">
            <Navbar/>
            <Main/>
            <router-view/>
        </el-main>

        <!-- 脚步 -->
        <el-footer class="footer">
          <Footer/>
        </el-footer>

      </el-container>

    </el-container>

  </el-container>

</template>


<script>
import Header from "@/components/header/index.vue";
import Aside from "@/components/aside/index.vue";
import Footer from '@/components/footer/index.vue'
import Main from '@/components/main/index.vue'


export default {
  data(){
    return{
      isCollapse:false
    };
  },
  components: {
    Header,
    Aside,
    Main,
    Footer,
  },
  methods:{
    toggleCollpase(value){
      this.isCollapse = value
    }
  },
};
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
}

.aside {
  /* height: 100%; */
  background-color: #f5f5f5;
  border: solid 1px #ccc;
}

.example {
  background-color: #f2f2f2;
  color: #f3f3f3;
  color: #2b7dbc;
  color: #1963aa;
  color: #585858;
  color: #616161;
  color: #ccc;
  color: #ffffff;
}

.header {
  background-color: #438eb9;
}

footer {
  bottom: 0px;
  background-color: #ffffff;
  position: relative;
}
</style>