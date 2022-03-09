<template>
  <el-card class="box-card" id="log-in">
    <h3>使用 Slash 通行证登录</h3>
    <el-form ref="formData" :model="formData" :rules="formRules">
      <el-form-item prop="email">
        <el-input v-model="formData.email" placeholder="请输入邮箱地址">
          <i class="el-icon-user"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="请输入密码"
          show-password
          v-model="formData.password"
        >
          <i class="el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="login('formData')" type="primary" style="width: 100%"
          >登录
        </el-button>
      </el-form-item>
      <el-link type="primary">没有账号？注册 ></el-link>
    </el-form>
  </el-card>
</template>
<script>
import { userLogin } from "../config/interface";
export default {
  name: "LogInModuel",
  // props: {
  //   formData: {
  //     type: Object,
  //     require: true,
  //   },
  // },
  data() {
    const validate = (rule, value, callback) => {
      const reg = /^[0-9a-zA-Z]*$/g;
      if (!value) {
        callback(new Error("请输入内容"));
      } else {
        callback();
      }
    };
    return {
      formData: {
        password: "",
        email: "",
      },
      formRules: {
        password: [{ validator: validate, trigger: "blur" }],
        email: [
          { type: "email", message: "请输入正确的邮箱地址", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login(formData) {
      // 登录前会先验证数据是否符合规则
      this.$refs[formData].validate((valid) => {
        if (valid) {
          const url = userLogin;
          let params = {
            password: this.$md5(this.formData.password),
            email: this.formData.email,
          };
          this.$http(url, params)
            .then((res) => {
              let { code, message, token } = res;
              if (code === 1) {
                // 将token存入localStorage
                local.save(token);
                // 成功提示
                this.$message.success(message);
                // 路由跳转
                this.$router.push("/home");
              } else if (code === 2) {
                this.$message.error(message);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("error!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang='scss' scoped>
#log-in {
  width: 300px;
  text-align: center;
  max-width: 100%;
  padding: 0px 35px 0;
  margin: 100px auto;
  overflow: hidden;
}
</style>
