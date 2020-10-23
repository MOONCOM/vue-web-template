<template>
  <div class="layout-header">
    <div class="top-menu">
      <el-image
        class="logo"
        :src="logo"
        fit="contain"
        @click="$router.push('/')"
      />
      <div class="right-section">
        <user />
      </div>
    </div>
    <headerMenu />
  </div>
</template>

<script>
import user from './header-user-section.vue';
import headerMenu from './header-menu.vue';

export default {
  name: 'LayoutHeader',
  components: {
    user,
    headerMenu,
  },
  data() {
    return {
      logo: require('@/assets/logo.svg'),
    };
  },
};
</script>

<style scoped lang="scss">
.layout-header{
  background-color: rgba(51,51,51,.5);
  .top-menu{
    height:60px;
    border-bottom: 1px solid hsla(0,0%,100%,.2);
    .logo{
      float:left;
      height:40px;
      margin-top:10px;
      cursor:pointer;
    }
    .right-section{
      float:right;
      display: flex;
      height: 100%;
      align-items: center;
      margin-right:20px;
      >div{
        margin-right: 20px;
      }
    }
  }
}
</style>
