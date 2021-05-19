<template>
  <div id="">
    <el-table :data="JSON.parse($route.params.studentall)" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column prop="id" label="编号" width="180">
      </el-table-column>
      <el-table-column prop="sname" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="sex" label="性别">
      </el-table-column>
      <el-table-column prop="age" label="年龄">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="open(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'mian',
    data: function() {
      return {
        studentall: []
      }
    },
    mounted() {
      this.$axios.get("http://localhost:8080/Remark/studentall")
        .then(res => {
          console.log(res.data);
          this.studentall = res.data;
        }).catch(error => {
          console.log(error);
        });
    },
    methods: {
      open(id) {
        this.$confirm('确定要删除该信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.get("http://localhost:8080/Remark/del", {
              params: {
                id: id
              }
            })
            .then(res => {
              if (res.data != "") {
                var index = this.studentall.findIndex(brand => {
                  return brand.id == id;
                })
                //根据下标移除
                this.studentall.splice(index, 1);
                this.$message({
                  type: "success",
                  message: "删除成功！"
                });
              }else{
                this.$message({
                  type: "error",
                  message: "删除失败！"
                });
              }
            }).catch(error => {
              console.log(error);
            });

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>

<style>
</style>
