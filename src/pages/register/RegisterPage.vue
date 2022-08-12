<template>
  <div class="login-boxtitle" style="height: 100px;">
    <div class="logoBig">
      <img src="static/images/shopLogo.png" style="margin-left: 0px ; height: 100px;">
    </div>
  </div>

  <div class="login-banner" style="background: rgb(142,213,21);">
    <div class="login-main">
      <div class="login-banner-bg"><span></span><img width="400"  src="static/images/act2.png" /></div>
      <div class="login-box">

        <h3 class="title">用户注册</h3>
        <h5 style="color: red">&nbsp;{{tips}}</h5>

        <div class="clear"></div>

        <div class="login-form" style="background: none;">
          <form>
            <div class="user-name">
              <label for="user"><span class="glyphicon glyphicon-user" aria-hidden="true"></span></label>
              <input type="text" name="" id="user" v-model="user.username" @keyup="checkRegisterInfo" placeholder="邮箱/手机/用户名">
            </div>
            <div class="user-pass" style="margin-top: 15px;">
              <label for="password"><span class="glyphicon glyphicon-lock" aria-hidden="true"></span></label>
              <input type="password" name="" v-model="user.password" @keyup="checkRegisterInfo" id="password" placeholder="请输入密码">
            </div>
            <div class="user-pass" style="margin-top: 15px;">
              <label for="repassword"><span class="glyphicon glyphicon-lock" aria-hidden="true"></span></label>
              <input type="password" name="" v-model="user.rePassword" @keyup="checkRegisterInfo" id="repassword" placeholder="请再次输入密码">
            </div>
          </form>
        </div>

        <div class="login-links">
          <br />
        </div>
        <div class="am-cf">
          <input type="submit" name="" @click="doRegister" value="提交注册" class="am-btn am-btn-primary am-btn-sm">
        </div>
        <div class="partner">

        </div>

      </div>
    </div>
  </div>

  <RegisterFooter/>

</template>

<script>
import RegisterFooter from "@/pages/register/components/RegisterFooter";
import {ref,reactive} from "vue";
import axios from "axios";
let baseUrl="http://localhost:8888/";
export default {
  name: "RegisterPage",
  components: {RegisterFooter},
  setup(){
    let user=reactive({
      username:"",
      password:"",
      rePassword:"",
    });
    let tips=ref();
    //验证是否正确
    let isRight=false;

    function doRegister(){
      if (!isRight){
        //验证不通过
        tips.value="注册信息不正确！";
      }else {
        //发送请求，提交注册
        let url=baseUrl+"user/register";
        axios.post(url,user).then((response)=>{
          let resultVO=response.data;
          if (resultVO.code==="10001"){
            alert("注册成功！");
            window.location.href="login.html";
          }else {
            tips.value=resultVO.msg;
          }

        })



      }

    }
    function checkRegisterInfo(){
      //校验账号
      let usernameExp=/^[A-Za-z0-9]{8,20}$/;
      let passwordExp=/^[A-Za-z0-9]{6,16}/;
      if (!usernameExp.test(user.username)){
          tips.value="账号长度必须为8-20个字符！";
          isRight=false;
      }else {
        //校验密码
        if (!passwordExp.test(user.password)){
          tips.value="密码长度必须为6-16个字符！";
          isRight=false;
        }else {
          //校验重复密码
          if (user.password!==user.rePassword){
            tips.value="两次输入的密码不一致!"
            isRight=false;
          }else {
            tips.value="";
            isRight=true;
          }
        }
      }

    }
    return{
      user,
      tips,
      doRegister,
      checkRegisterInfo,
      
      
    }


  }



}
</script>

<style scoped>

</style>