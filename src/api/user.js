import axios from 'axios';

// 登录操作
export const login = function (params) {
  return axios.post('/api/user/login', params);
};

// 注册操作
export const register = function (params) {
  return axios.post('/api/user/register', params);
};

// 登出操作
export const logout = function (params) {
  return axios.post('/api/user/logout', params);
};

// 获取用户信息
export const getUserInfo = function () {
  return axios.post('/api/user/getUserInfo');
};
