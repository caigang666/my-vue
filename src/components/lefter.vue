<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <!-- <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>学生管理</span>

          </template>
         <!-- <el-menu-item-group>
           <router-link to="" @click.native="se(0)" tag="el-menu-item">全部信息</router-link>
           <router-link to="" v-for="(n,index) in grandall" @click.native="se(n.id)" tag="el-menu-item">{{n.gname}}</router-link>
          </el-menu-item-group> -->

      <!--  </el-submenu> -->
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">商品信息</span>
          </template>
          <el-menu-item-group>
            <router-link to="/grand" tag="el-menu-item">商品信息</router-link>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    name: 'lefter',
  /*  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }, */
    data: function() {
    	return {
    		grandall: []
    	}
    },
    created() {
      this.$bus.$on('asd',res=>{
        this.grandall=res;
      })
    },
   /* mounted() {
    	this.$axios.get("http://localhost:8080/Remark/grandall")
    		.then(res => {
    			console.log(res.data);
    			this.grandall = res.data;
    		}).catch(error => {
    			console.log(error);
    		});
    } */
  methods:{
    se:function(id){
    /* this.$axios.get("http://localhost:8080/Remark/studentall", {
         params: {
           id: id
         }
       })
       .then(res => {
         console.log(res.data);
            this.$router.push({name:"stuinfo",params:{studentall:JSON.stringify(res.data)}});
       }).catch(error => {
         console.log(error);
       }); */
    }
  },
  }
  /* axios.post("http://localhost:8080/Remark/grandall"
  ).then(function(res) {
      console.log(res);
  }).catch(function(res) {
      console.log(res);
  }) */
</script>

<style>
  .tac{
    width: 20px;
  }
</style>
