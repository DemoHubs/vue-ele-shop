<template>
<div>
    <el-breadcrumb separator="/" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>系统管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
<el-card class="box-card">
  <el-row>
    <el-col :span="7">
    <el-input v-model="query" placeholder="请输入内容" clearable @clear="getUserList"></el-input>
    </el-col>
    <el-col :span="7">
       <el-button style="margin-left:5px;" type="primary" icon="el-icon-search" @click="getUserList">搜索</el-button>
    </el-col>
  </el-row>
<el-card class="box-card">
  <el-button style="margin-left:5px;" type="warning" icon="el-icon-plus" @click="dialogVisible=true">新增用户</el-button>
</el-card>
</el-card>
    <el-table :data="userList"  style="width: 100%" stripe border>
       <el-table-column type="index" label="序号"> </el-table-column>
      <el-table-column  prop="userName" label="用户名称"> </el-table-column>
      <el-table-column  prop="nickName" label="用户昵称"> </el-table-column>
      <el-table-column  prop="dept.deptName" label="部门"> </el-table-column>
      <el-table-column  prop="phonenumber" label="手机号码"> </el-table-column>
      <el-table-column  prop="status" label="状态">
        <template slot-scope="scope">
            <el-switch v-model="scope.row.status" active-value="0" inactive-value="1" @change="statusChange"></el-switch>
        </template>
      </el-table-column>
      <el-table-column  prop="createTime" label="创建时间"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
            <el-button type="primary" round size="mini">更新</el-button>
            <el-button type="info" round size="mini">详情</el-button>
             <el-tooltip class="item" effect="dark" content="删除后不可恢复" placement="top-start">
                  <el-button type="danger" round size="mini">删除</el-button>
             </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="1"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>

    <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
>
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
</div>
</template>
<script>
export default {
  data () {
    return {
      userList: [],
      currentPage: 1,
      total: 5,
      query: '',
      dialogVisible: false
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
      statusChange(f) {
        console.info(f)
      },
      getUserList() {
        var data={"total":2,"rows":[{"searchValue":null,"createBy":"admin","createTime":"2021-09-09 17:25:28","updateBy":null,"updateTime":null,"remark":"管理员","params":{},"userId":1,"deptId":103,"userName":"admin","nickName":"若依","email":"ry@163.com","phonenumber":"15888888888","sex":"1","avatar":"","status":"0","delFlag":"0","loginIp":"14.107.154.94","loginDate":"2022-04-24T17:26:32.000+08:00","dept":{"searchValue":null,"createBy":null,"createTime":null,"updateBy":null,"updateTime":null,"remark":null,"params":{},"deptId":103,"parentId":null,"ancestors":null,"deptName":"研发部门","orderNum":null,"leader":"若依","phone":null,"email":null,"status":null,"delFlag":null,"parentName":null,"children":[]},"roles":[],"roleIds":null,"postIds":null,"roleId":null,"admin":true},{"searchValue":null,"createBy":"admin","createTime":"2021-09-09 17:25:29","updateBy":null,"updateTime":null,"remark":"测试员","params":{},"userId":2,"deptId":105,"userName":"ry","nickName":"若依","email":"ry@qq.com","phonenumber":"15666666666","sex":"1","avatar":"","status":"0","delFlag":"0","loginIp":"58.250.198.131","loginDate":"2022-04-24T17:06:36.000+08:00","dept":{"searchValue":null,"createBy":null,"createTime":null,"updateBy":null,"updateTime":null,"remark":null,"params":{},"deptId":105,"parentId":null,"ancestors":null,"deptName":"测试部门","orderNum":null,"leader":"若依","phone":null,"email":null,"status":null,"delFlag":null,"parentName":null,"children":[]},"roles":[],"roleIds":null,"postIds":null,"roleId":null,"admin":false}],"code":200,"msg":"查询成功"};
       this.userList = data.rows || []
       this.total = data.total
       return data.rows || []
      },
      handleSizeChange(v) {
          console.info(v)
      },
      handleCurrentChange(v) {
  console.info(v);
      }
  }
}
</script>

<style lang="less" scoped>

</style>
