const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    // 先配置主页
    index: {
      entry: './src/main.js',
      template: './public/index.html',
      title: '首页'
    },
    // 再配置各个子页面：登录后课表查询页
    login: {
      entry: './src/pages/login/login.js',
      template: './public/login.html',
      title: '用户登录'
    },
    register:{
      entry: './src/pages/register/register.js',
      template: './public/register.html',
      title: '用户注册'
    },
    shopcart:{
      entry: './src/pages/shopcart/shopcart.js',
      template: './public/shopcart.html',
      title: '购物车'
    }
  },
  lintOnSave:false
})
