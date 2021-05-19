<template>
  <router-view name="stu"></router-view>
</template>

<script>
  export default {
    name: 'mian'
   /* data: function() {
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
          type: 'warning',
          center: true
        }).then(() => {
          axios.get("http://localhost:8080/Remark/del", {
              params: {
                id: id
              }
            })
            .then(res => {
              if (res.data == "删除成功") {
                var index = this.studentall.findIndex(brand => {
                  return brand.id == id;
                })
                //根据下标移除
                this.list.splice(index, 1);
              }
            }).catch(error => {
              console.log(error);
            });
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });

      },
      open1() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },
      open4() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      }
 */
  }
</script>

<style>
</style>
