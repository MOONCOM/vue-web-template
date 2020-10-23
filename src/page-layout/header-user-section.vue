<template>
  <div class="user-section">
    <el-dropdown @command="commandClickHandler">
      <span class="el-dropdown-link">
        {{ userInfo.username || '游客'}}
      </span>
      <el-dropdown-menu slot="dropdown">
        <template v-if="userInfo.username === undefined">
          <el-dropdown-item command="login">
            登录
          </el-dropdown-item>
          <el-dropdown-item command="register">
            注册
          </el-dropdown-item>
        </template>
        <template v-else>
          <el-dropdown-item command="info">
            个人信息
          </el-dropdown-item>
          <el-dropdown-item command="logout">
            登出
          </el-dropdown-item>
        </template>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'HeaderUserSection',
  computed: {
    ...mapState('user', [
      'userInfo',
    ]),
  },
  methods: {
    ...mapActions('user', [
      'logout',
    ]),
    // 点击用户下的下拉框触发
    commandClickHandler(item) {
      switch (item) {
        case 'info':
        case 'register':
        case 'login':
          this.$router.push(`/${item}`);
          break;
        case 'logout':
          this.logoutHandler();
          break;
        default:
          this.$message.info('未知操作，请联系管理员');
      }
    },
    // 登出操作
    logoutHandler() {
      this.$confirm('是否确认登出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.logout().then(() => {
          this.$message({
            type: 'success',
            message: '登出成功!',
          });
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消登出',
        });
      });
    },
  },
};
</script>

<style scoped lang="scss">
.user-section{
  .el-dropdown{
    color:white;
    cursor:pointer;
    font-size:15px;
  }
}
</style>
