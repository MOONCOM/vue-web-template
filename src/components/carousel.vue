<template>
  <el-carousel
    trigger="click"
    :height="height"
  >
    <el-carousel-item
      v-for="{url,img} in imageList"
      :key="url"
    >
      <el-image
        :src="img"
        fit="cover"
        @click="goTo(url)"
      />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
/*
* 跑马灯组件
* */
export default {
  name: 'Carousel',
  props: {
    height: {
      type: String,
      default: '510px',
    },
    imageList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    goTo(url) {
      window.open(url);
    },
  },
};
</script>

<style scoped lang="scss">
  .el-carousel__item{
    .el-image{
      height:100%;
    }
  }

</style>
