<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png"/>
      </div>
      <el-form ref="loginFormRef"  label-width="0px" class="loginForm" :model="loginForm" :rules="loginFormRules">
        <el-form-item prop="username" >
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item prop="password" >
          <el-input show-password  v-model="loginForm.password" prefix-icon="el-icon-search"></el-input>
        </el-form-item>
        <el-form-item class="btns">
        <el-button type="primary" @click="submitForm">登录</el-button>
        <el-button type="info" @click="resetForm">重置</el-button>
      </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
          username: 'admin',
          password: ''
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 15, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 15, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
     methods: {
      submitForm() {
        this.$refs['loginFormRef'].validate( ( valid) => {
          console.info(this);
         if (valid) {
            //this.$message.info("验证通过开始登陆中...")
            //const rst = await this.$http.post("/",this.loginForm)
            sessionStorage.setItem("token","123545")
            this.$router.push("/home")
           // console.info(rst);
          } else {
            this.$message.error('请完善必要数据');
            return false;
          }
        });
      },
      resetForm() {
        this.$refs['loginFormRef'].resetFields();
      }
    }
}
</script>
<style lang="less" scoped>
 .login_container{
   background-color:#2b4b6b;
   height:100%;
 }
 .login_box{
   width: 450px;
   height: 300px;
   background-color:#fff;
   border-radius: 3px;
   position: absolute;
   left: 50%;
   top:50%;
   transform: translate(-50%,-50%);
 }
 .avatar_box{
    width: 130px;
    height: 130px;
    border:1px solid #eee;
    border-radius: 50%;
    padding: 5px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: white;
    img{
      width: 100%;
      height: 100%;
       border-radius: 50%;
       background-color: #eee;
    }
 }
 .btns{
   display: flex;
   justify-content: flex-end;
 }
 .loginForm{
   padding: 0 10px;
   position: absolute;
   bottom: 0;
   width: 100%;
   box-sizing:border-box ;
 }
</style>
