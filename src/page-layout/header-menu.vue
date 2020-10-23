<template>
  <div
    class="header-menu"
    @mouseleave="menuIndex = ''"
  >
    <ul class="menu">
      <li @mouseenter="menuIndex = ''" />
      <li
        v-for="{name,value} of menu"
        :key="value"
        @mouseenter="menuIndex = value"
      >
        <span class="name">{{ name }}</span>
        <span
          class="bottom-line"
          :class="{activited: menuIndex === value}"
        />
      </li>
      <li @mouseenter="menuIndex = ''" />
    </ul>
    <ul
      v-show="menuIndex !== ''"
      class="menu-detail"
    >
      <li
        v-for="{name,value} of operateMenu[menuIndex]"
        :key="value"
        class="text-ellipsis"
        @click="goTo(value)"
      >
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenu',
  data() {
    return {
      // 当前展示的目录value值
      menuIndex: '',
      menu: [
        {
          name: '产品服务',
          value: 'Introduction',
          children: [
            { name: '产品介绍', value: 'product' },
            { name: '服务介绍', value: 'service' },
            { name: '合作伙伴', value: 'frends' },
          ],
        },
        {
          name: '产品列表',
          value: 'product',
          children: [
            { name: '皮草', value: 'fur' },
            { name: '海产', value: 'seafood' },
            { name: '电子设备', value: 'computer' },
            { name: '服装', value: 'clothes' },
          ],
        },
        {
          name: '关于我们',
          value: 'others',
          children: [
            { name: '帮助中心', value: 'help' },
            { name: '联系我们', value: 'contact' },
            { name: '建议与反馈', value: 'suggestion' },
          ],
        },
      ],
    };
  },
  computed: {
    // 格式转换后的menu
    operateMenu() {
      return this.menu.reduce((obj, { value, children }) => Object.assign(obj, { [value]: children }), {});
    },
  },
  methods: {
    // 鼠标点击二级菜单项时触发
    goTo(value) {
      this.$router.push({ path: `/${this.menuIndex}/${value}` });
    },
  },
};
</script>

<style scoped lang="scss">
@import '~@/styles/global-color-var.scss';
.header-menu{
  position: relative;
  font-size:14px;
  li{
    cursor: pointer;
  }
  .menu{
    display:inline-flex;
    text-align: center;
    li{
      position: relative;
      height:50px;
      line-height:50px;
      padding:0 20px;
      color:white;
      .bottom-line{
        position:absolute;
        bottom:0;
        left:0;
        height:3px;
        width:100%;
        &.activited{
          background-color: $login-color;
        }
      }
    }
  }
  .menu-detail{
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    /*position: absolute;*/
    /*left: 0;*/
    height: 200px;
    width: 100%;
    padding:30px 70px;
    background: rgba(51,51,51,.85);
    color:$header-color;
    >li{
      width:300px;
      height:38px;
      line-height: 38px;
    }
  }
}
</style>
