// 幻灯片组件
import carousel from '@/components/carousel.vue';

export default function (Vue) {
  [carousel].forEach((item) => {
    Vue.component(item.name, item);
  });
}
