<template>
  <div class="layout">
    <layoutHeader class="layout-header" />
    <router-view class="layout-content" />
    <layoutFooter class="layout-footer"></layoutFooter>
  </div>
</template>

<script>
import layoutHeader from './layout-header.vue';
import layoutFooter from './layout-footer.vue';

export default {
  name: 'Layout',
  components: {
    layoutHeader,
    layoutFooter,
  },
};
</script>

<style scoped lang="scss">
.layout{
  position:relative;
  .layout-header{
    position: absolute;
    width:100%;
    z-index:10;
  }
  .layout-content{
    box-sizing: border-box;
    height:100%;
    padding-bottom:370px;
  }
  .layout-footer{
    position: fixed;
    width:100%;
    bottom:0;
  }
}
</style>
