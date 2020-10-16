import Vue from 'vue';
import dayjs from 'dayjs';
import './import-echarts';
import element from './import-element-component';
import component from './import-global-component';
import thirdPartComponent from './import-third-party-component';
import 'normalize.css';

Vue.use(element);
Vue.use(component);
Vue.use(thirdPartComponent);

// 声明全局的时间对象
Vue.prototype.$dayjs = dayjs;
