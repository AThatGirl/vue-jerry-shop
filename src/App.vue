<template>
  <IndexHeader :username="username" :isLogin="isLogin" :userimg="userimg"/>
  <IndexImage/>
  <IndexShopNav />
  <IndexShopMainbg/>
  <IndexGuideAndMenu/>
</template>

<script>

import IndexHeader from "@/components/IndexHeader";
import IndexImage from "@/components/IndexImage";
import IndexShopNav from "@/components/IndexShopNav";
import IndexShopMainbg from "@/components/IndexShopMainbg";
import IndexGuideAndMenu from "@/components/IndexGuideAndMenu";
import {ref} from "vue";
export default {
  name: 'App',
  components: {
    IndexGuideAndMenu,
    IndexShopMainbg,
    IndexShopNav,
    IndexImage,
    IndexHeader
  },
  setup(){
    let username=ref("");
    let userimg=ref("");
    let isLogin=ref(false);
    let token=getCookieValue("token");
    if (token!=null&&token!==""){
        isLogin.value=true;
        username.value=getCookieValue("username");
        userimg.value=getCookieValue("userimg");
    }else {
      isLogin.value=false;
    }

    return {
      username,
      userimg,
      isLogin,
    }
  },


}
</script>

<style>

</style>
