<template>
  <el-container>
    <el-header> <router-view class="header"></router-view></el-header>
    <el-container>
      <el-aside width="200px"><router-view class="left" name="left"></router-view></el-aside>
      <el-main><router-view class="main" name="main"></router-view></el-main>
    </el-container>
  </el-container>
 <!-- <div id="app">


    <div class="content">


    </div>
  </div> -->
</template>

<script>
  export default {
    name: 'App'
  };
</script>

<style>
  .el-header, .el-footer {
     background-color: #B3C0D1;
     color: #333;
     text-align: center;
     line-height: 60px;
   }

   .el-aside {
     background-color: #D3DCE6;
     color: #333;
     text-align: center;
   }

   .el-main {
     background-color: #E9EEF3;
     color: #333;
     text-align: center;
   }

   body > .el-container {
     margin-bottom: 40px;
   }

   .el-container:nth-child(5) .el-aside,
   .el-container:nth-child(6) .el-aside {
     line-height: 260px;
   }

   .el-container:nth-child(7) .el-aside {
     line-height: 320px;
   }
</style>
