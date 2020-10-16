<template>
  <div class="login-page">
    <div class="header-background">
      <img
        :src="imageBg"
        alt="背景图片"
      >
    </div>
    <div class="operate-content">
      <span class="iconfont">&#xe613;</span>
      <h1>custom系统</h1>
      <h4>Energy Saving And Emission Reduction System</h4>
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        size="large"
      >
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入用户名"
          >
            <span
              slot="prefix"
              class="iconfont"
            >&#xe617;</span>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
            :show-password="true"
          >
            <span
              slot="prefix"
              class="iconfont"
            >&#xe703;</span>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class=""
            type="primary"
            @click="handleSubmit"
          >
            登录
          </el-button>
        </el-form-item>
        <el-form-item>
          还没有账户？ <router-link :to="{path:'/register'}">免费注册</router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

const imageBg = require('@/assets/login-bg.png');

export default {
  name: 'LoginPage',
  data() {
    return {
      imageBg,
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
        ],
      },
    };
  },
  mounted() {

  },
  methods: {
    ...mapActions('menu', [
      'getMenuMessage',
    ]),
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 校验通过，请求登录接口
          this.$router.replace('/');
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import '~@/styles/global-color-var.scss';
.login-page{
  position: relative;
  .operate-content{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 500px;
    padding-top: 30px;
    transform: translate(-50%,-50%);
    text-align: center;
    background-color: white;
    box-shadow: rgba(153, 153, 153, 0.35) 0px 0px 10px;
    .iconfont,h1,h4{
      color:$login-color;
    }
    >.iconfont{
      font-size: 70px;
      font-weight: 700;
    }
    h1{
      font-size:36px;
      font-weight:bold;
      margin-bottom:0;
    }
    h4{
      font-size:16px;
    }
    button{
      background-color:$login-color;
    }
    .el-form{
      text-align: left;
      .el-form-item{
        width: 75%;
        margin: 26px auto;
      }
      /deep/.el-input{
        .el-input__prefix{
          margin-left:4px;
        }
        .el-icon-view{
          font-size:18px;
        }
        input{
          padding-left:44px;
        }
      }
      button{
        width: 100%;
        font-size: 16px;
        margin-top: 60px;
      }
      .iconfont{
        color:#c6c6c6;
        font-size:24px;
      }
    }
  }
  .header-background{
    position:relative;
    height: 460px;
    width: 100%;
    background-color: #0e0e0e;
    >img{
      position: absolute;
      left:50%;
      bottom:0;
      transform: translateX(-50%);
    }
  }
}
</style>
