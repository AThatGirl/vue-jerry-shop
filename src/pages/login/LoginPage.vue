<template>
  <div class="login-boxtitle">
    <div class="logoBig">
      <img src="static/images/shopLogo.png" style="margin-left: 0px ; height: 100px;">
    </div>
  </div>

  <div class="login-banner">
    <div class="login-main" >
      <div class="login-banner-bg"><span></span><img src="static/images/big.jpg"/></div>
      <div class="login-box" style="margin-top: 20px;"  id="container">

        <h3 class="title">登录商城</h3>
        <h5 style="color:red;" id="tips">&nbsp;{{tips}}</h5>

        <div class="clear"></div>

        <div class="login-form"  style="background: none; margin-top: 15px;">
          <form>
            <div class="user-name"  style="margin-top: 20px;">
              <label for="user"><span class="glyphicon glyphicon-user" aria-hidden="true"></span></label>
              <input type="text" name="" v-model="username" id="user" placeholder="邮箱/手机/用户名">
            </div>
            <div class="user-pass"  style="margin-top: 20px;">
              <label for="password"><span class="glyphicon glyphicon-lock" aria-hidden="true"></span></label>
              <input type="password" name="" v-model="password" id="password" placeholder="请输入密码" @keyup="checkUsername">
            </div>
          </form>
        </div>

        <div class="login-links" >
          <label for="remember-me"><input id="remember-me" type="checkbox">记住密码</label>
          <a href="#" class="am-fr">忘记密码</a>
          <br />
        </div>
        <div class="am-cf">
          <input @click="doSubmit" type="submit" name="" value="登 录" class="am-btn am-btn-primary am-btn-sm">
        </div>
        <div class="am-cf">
          <input type="button" onclick="javascript:window.location.href='register.html'" value="注 册" class="am-btn am-btn-default am-btn-sm">
        </div>
        <div class="partner">

        </div>

      </div>
    </div>
  </div>

  <LoginFooter/>
</template>

<script>
import {ref} from 'vue'
import axios from 'axios'
import LoginFooter from "@/pages/login/components/LoginFooter";

export default {
  name: "LoginPage",
  components: {LoginFooter},
  setup(){
    let username=ref();
    let password=ref();
    let tips=ref();
    //用户名和密码检验成功后为true
    let isRight=ref(false);
    let baseUrl="http://localhost:8888/";
    function doSubmit(){
      if (isRight.value){
        //发送请求
        let url=baseUrl+"user/login"
        axios.get(url,{
          params:{
            username:username.value,
            password:password.value,
          }
        }).then((response)=>{
          //响应数据
          let resultVO=response.data;
          //判断
          if (resultVO.code==="10000"){
            //失败
            tips.value=resultVO.msg;
          }else {
            //登陆成功，把token存储到cookie
            setCookieValue("token",resultVO.msg);
            //将用户昵称和头像路径保存到cookie
            setCookieValue("username",resultVO.username);
            setCookieValue("userimg",resultVO.userImg);
            window.location.href="index.html";
          }

        });
      }else {
        tips="请输入正确的账号和密码";
      }

    }
    function checkUsername(){
      if (username.value === ""){
        tips.value="请输入账号";
        isRight.value=false;
      }else if (username.value.length<8||username.value.length>20){
        tips.value="账号长度必须为8-20个字符";
        isRight.value=false;
      }else {
        if (password.value === ""){
          tips.value="请输入密码";
          isRight.value=false;
        }else if (password.value.length<6||password.value.length>14){
          tips.value="密码长度必须为6-14个字符";
          isRight.value=false;
        }else {
          tips.value="";
          isRight.value=true;
        }
      }
    }


    return{
      username,
      password,
      tips,
      isRight,
      doSubmit,
      checkUsername,
    }

  },

}
</script>

<style scoped>
  .login-boxtitle{
    height: 100px;
  }
  .logoBig{

  }

</style>