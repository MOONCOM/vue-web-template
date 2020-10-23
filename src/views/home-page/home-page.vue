<template>
  <div class="home-page">
    <Carousel :imageList="imageList" />
  </div>
</template>

<script>
/*
* 首页看板页面
* */
import { mapActions } from 'vuex';
import banner1 from '@/assets/banner/demo/banner1.png';
import banner2 from '@/assets/banner/demo/banner2.png';

export default {
  name: 'HomePage',
  data() {
    return {
      // 图片列表
      imageList: [
        { url: 'http://www.baidu.com', img: banner1 },
        { url: 'http://www.sina.com', img: banner2 },
        { url: 'http://www.google.com', img: banner2 },
        { url: 'http://www.biying.com', img: banner2 },
      ],

    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    ...mapActions('user', [
      'getUserInfo',
    ]),
  },
};
</script>

<style scoped lang="scss">
.home-page{

}
</style>
