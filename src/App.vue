<template>
  <IndexHeader :nickname="nickname" :username="username" :isLogin="isLogin" :userimg="userimg"/>
  <IndexImage/>
  <IndexShopNav />
  <Activity/>
  <CategoryRecommend/>
</template>

<script>

import IndexHeader from "@/components/IndexHeader";
import IndexImage from "@/components/IndexImage";
import IndexShopNav from "@/components/IndexShopNav";
import {ref} from "vue";
import CategoryRecommend from "@/components/CategoryRecommend";
import Activity from "@/components/Activity";
export default {
  name: 'App',
  components: {
    Activity,
    CategoryRecommend,
    IndexShopNav,
    IndexImage,
    IndexHeader
  },
  setup(){
    let username=ref("");
    let userimg=ref("");
    let nickname=ref("");
    let isLogin=ref(false);
    let token=getCookieValue("token");
    if (token!=null&&token!==""){
        isLogin.value=true;
        username.value=getCookieValue("username");
        userimg.value=getCookieValue("userimg");
        nickname.value=getCookieValue("nickname");
    }else {
      isLogin.value=false;
    }

    return {
      username,
      userimg,
      isLogin,
      nickname,
    }
  },


}
</script>

<style>

</style>
