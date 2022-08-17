<template>
  <ShopCartHeader/>
  <SearchFrame/>
  <ShopCartContent/>
  <ShopCartOperate/>
  <ShopCartFooter/>
</template>

<script>
import ShopCartHeader from "@/pages/shopcart/component/ShopCartHeader";
import SearchFrame from "@/pages/shopcart/component/SearchFrame";
import ShopCartContent from "@/pages/shopcart/component/ShopCartContent";
import ShopCartOperate from "@/pages/shopcart/component/ShopCartOperate";
import axios from "axios";
import ShopCartFooter from "@/pages/shopcart/component/ShopCartFooter";
export default {
  name: "ShopCart",
  components: {ShopCartFooter, ShopCartOperate, ShopCartContent, SearchFrame, ShopCartHeader},
  created() {
    let baseURL="http://localhost:8888/"
    //当进入到购物车页面时，就要查询购物车列表(访问购物车列表接口)
    let token=getCookieValue("token");
    axios.get(baseURL+"shopcart/list",{
      headers:{
        token:token,
      }
    },).then((response)=>{
      let data=response.data;
      if (data.code==="10000"){
        alert("请先登录!");
        window.location.href="login.html";
      }
    })

  },


}
</script>

<style scoped>

</style>