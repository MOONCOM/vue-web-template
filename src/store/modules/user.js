import { login, logout, getUserInfo } from '@/api/user';

export default {
  namespaced: true,
  state: {
    userInfo: {},

  },
  mutations: {
    setUserInfo(state, data) {
      state.userInfo = data;
    },
  },
  actions: {
    // 登录操作
    login({ commit }, data) {
      return login(data).then((res) => {
        const { code, message } = res.data;
        console.log(22222222222);
        console.log(res.data);
        if (code === 200) {
          // 登录成功
          commit('setUserInfo', message);
          localStorage.setItem('userInfo', JSON.stringify(message));
          return Promise.resolve();
        }
        return Promise.reject();
      });
    },
    // 登出操作
    logout({ commit }) {
      console.log('进入');
      return logout().then((res) => {
        const { code } = res.data;
        if (code === 200) {
          commit('setUserInfo', {});
          localStorage.removeItem('userInfo');
          return Promise.resolve();
        }
        return Promise.reject();
      });
    },
    // 获取用户信息
    getUserInfo() {
      getUserInfo().then((res) => {
        console.log(res.data.message);
      });
    },
  },
  getters: {
    // 是否有用户登录
    isLogin(state) {
      if (state.userInfo.username === undefined) {
        // 没有登录成功
        return false;
      }
      return true;
    },
  },
};
