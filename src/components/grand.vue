<template>
  <div>
    <!-- <div>
      <el-button style="float: left;margin-bottom: 10px;" type="success" @click="adds=true">添加</el-button>
      <el-dialog title="添加商品" :visible.sync="adds">
        <el-form :model="form">
          <el-form-item label="商品名称">
            <el-input v-model="form.gname" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品价格">
            <el-input v-model="form.price" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="adds = false">取 消</el-button>
          <el-button type="primary" @click="add()">确 定</el-button>
        </div>
      </el-dialog>
      <el-dialog title="修改商品" :visible.sync="dialogFormVisibles">
        <el-form :model="forms">
          <el-form-item label="商品名称">
            <el-input v-model="forms.gname" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品价格">
            <el-input v-model="forms.price" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisibles = false">取 消</el-button>
          <el-button type="primary" @click="updateAl()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <el-table :data="page.list">
      <el-table-column prop="id" label="编号" width="100">
      </el-table-column>
      <el-table-column prop="gname" label="名称" width="100">
      </el-table-column>
      <el-table-column prop="price" label="单价" width="100">
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button type="warning" size="small" @click="AddOrUpdate(scope.row)">修改</el-button>
          <el-button type="primary" size="small" @click="open(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align:center;margin-top: 20px;">
    			<el-pagination background layout="total, sizes, prev, pager, next, jumper" @size-change="getall" @current-change="getall"
    			 :current-page.sync="page.pageNum" :page-sizes="[3,6,9]" :page-size.sync="page.pageSize"
    			 :total="page.total">
    			</el-pagination>
    		</div> -->
    <!--页面-->
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-row :gutter="10">
        <el-col xs="10">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="保单号">
              <el-input v-model="formInline.warranty_number " placeholder="保单号"></el-input>
            </el-form-item>
            <el-form-item label="被保人">
              <el-input v-model="formInline.user" placeholder="被保人"></el-input>
            </el-form-item>
            <el-form-item label="车牌号">
              <el-input v-model="formInline.license_number " placeholder="车牌号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
              <el-button type="primary" @click="onSubmit">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col xs="12">
          <el-tabs type="border-card">
            <el-tab-pane label="保单信息列表">
              <div style="float: left;">
                <el-row>
                  <el-button @click="outerVisible=true" icon="el-icon-circle-plus" type="success">新增</el-button>
                  <el-button icon="el-icon-search" type="success">保单审核</el-button>
                  <el-button icon="el-icon-search" type="success">保费金额计算公式</el-button>
                </el-row>
              </div>

              <!--保单信息表格-->
              <el-table :data="tableData" style="width: 100%">
                <el-table-column type="expand">
                  <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                      <el-form-item label="商品名称">
                        <span>{{ props.row.name }}</span>
                      </el-form-item>
                      <el-form-item label="所属店铺">
                        <span>{{ props.row.shop }}</span>
                      </el-form-item>
                      <el-form-item label="商品 ID">
                        <span>{{ props.row.id }}</span>
                      </el-form-item>
                      <el-form-item label="店铺 ID">
                        <span>{{ props.row.shopId }}</span>
                      </el-form-item>
                      <el-form-item label="商品分类">
                        <span>{{ props.row.category }}</span>
                      </el-form-item>
                      <el-form-item label="店铺地址">
                        <span>{{ props.row.address }}</span>
                      </el-form-item>
                      <el-form-item label="商品描述">
                        <span>{{ props.row.desc }}</span>
                      </el-form-item>
                    </el-form>
                  </template>
                </el-table-column>
                <el-table-column label="保单号" prop="id">
                </el-table-column>
                <el-table-column label="被保人" prop="name">
                </el-table-column>
                <el-table-column label="车架号" prop="desc">
                </el-table-column>
                <el-table-column label="车牌号" prop="desc">
                </el-table-column>
                <el-table-column label="厂牌型号" prop="desc">
                </el-table-column>
                <el-table-column label="投保时间" prop="desc">
                </el-table-column>
                <el-table-column label="起保时间" prop="desc">
                </el-table-column>
                <el-table-column label="终保时间" prop="desc">
                </el-table-column>
                <el-table-column label="保险金额" prop="desc">
                </el-table-column>
                <el-table-column label="费率系数" prop="desc">
                </el-table-column>
                <el-table-column label="出险记录" prop="desc">
                </el-table-column>
                <el-table-column label="优惠信息" prop="desc">
                </el-table-column>
                <el-table-column label="保费金额" prop="desc">
                </el-table-column>
                <el-table-column label="赔偿限额" prop="desc">
                </el-table-column>
                <el-table-column label="保单类型" prop="desc">
                </el-table-column>
                <el-table-column label="保单状态" prop="desc">
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button icon="el-icon-edit" size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                    <el-button icon="el-icon-delete" size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col>
          <div class="block">
            <el-pagination background="red" @size-change="handleSizeChange" @current-change="handleCurrentChange"
              :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
              :total="400">
            </el-pagination>
          </div>
        </el-col>
      </el-row>


      <!---->
      <el-dialog title="新增保单信息" :visible.sync="outerVisible">
        <el-dialog width="30%" title="内层 Dialog" :visible.sync="innerVisible" append-to-body>
        </el-dialog>
        <div slot="footer" class="dialog-footer">
          <el-button @click="outerVisible = false">取 消</el-button>
          <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
        </div>
      </el-dialog>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'grand',
    data: function() {
      return {
        /* grandall: [],
        adds: false,
        dialogFormVisibles: false,
        forms: {
          gname: '',
          price: ''
        },
        form: {
          gname: '',
          price: ''
        },
        page: [], */
        formInline: {
          warranty_number: '',
          region: '',
          license_number: ''
        },
        tableData: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }],
        currentPage4: 4,
        outerVisible: false,
        innerVisible: false
      }
    },
    mounted() {
      this.getAll();
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      getAll() {
        this.$axios.get("http://localhost:8080/Redis_SSM/selectAllPage", {
            params: {
              "pageNum": this.page.pageNum,
              "pageSize": this.page.pageSize
            }
          })
          .then(res => {
            this.page = res.data;
            console.log(this.grandall);
          }).catch(error => {
            console.log(error);
          });
      },
      add() {
        /* var params=new URLSearchParams();
        params.append("name",this.form.name);
        params.append("name",this.form.price); */
        this.$axios.get("http://localhost:8080/Redis_SSM/insertAll", {
            params: {
              "gname": this.form.gname,
              "price": this.form.price
            }
          })
          .then(res => {
            this.$message({
              type: "success",
              message: res.data
            });
            if (res.data == "添加成功") {
              this.getAll();
            }
            this.form = '';
            this.adds = false;
          }).catch(error => {
            console.log(error);
          });
      },
      AddOrUpdate(val) {
        this.dialogFormVisibles = true;
        this.forms = val;
      },
      updateAl() {
        this.$axios.post("http://localhost:8080/Redis_SSM/updateAll", this.forms)
          .then(res => {
            this.$message({
              type: "success",
              message: res.data
            });
            this.form = '';
            this.dialogFormVisibles = false;
          }).catch(error => {
            console.log(error);
          });
      },
      open(id) {
        this.$confirm('确定要删除该信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$axios.get("http://localhost:8080/Redis_SSM/delAll", {
              params: {
                id: id
              }
            })
            .then(res => {
              if (res.data != "") {
                var index = this.grandall.findIndex(brand => {
                  return brand.id == id;
                });
                this.$message({
                  type: "success",
                  message: "删除成功！"
                });
                //根据下标移除
                this.grandall.splice(index, 1);
                //this.$bus.$emit('asd',this.grandall);
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
