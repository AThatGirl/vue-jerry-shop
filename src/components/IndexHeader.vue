<template>
  <div class="hmtop">
    <!--顶部导航条 -->
    <div class="am-container header">
      <ul class="message-l">
        <div class="topMessage">
          <div class="menu-hd" v-if="isLogin">
            {{nickname}},欢迎您
          </div>
          <div class="menu-hd" v-else>
            <a href="#" target="_top" class="h" style="color: blue">亲，请登录</a> /
            <a href="#" target="_top" style="color: blue">免费注册</a>
          </div>
        </div>
      </ul>
      <ul class="message-r">
        <div class="topMessage home">
          <div class="menu-hd"><a href="#" target="_top" class="h">商城首页</a></div>
        </div>
        <div class="topMessage my-shangcheng">
          <div class="menu-hd MyShangcheng"><a href="#" target="_top"><i class="am-icon-user am-icon-fw"></i>个人中心</a></div>
        </div>
        <div class="topMessage mini-cart">
          <div class="menu-hd"><a id="mc-menu-hd" href="shopcart.html" target="_top"><i class="am-icon-shopping-cart  am-icon-fw"></i><span>购物车</span><strong id="J_MiniCartNum" class="h">0</strong></a></div>
        </div>
        <div class="topMessage favorite">
          <div class="menu-hd"><a href="#" target="_top"><i class="am-icon-heart am-icon-fw"></i><span>收藏夹</span></a></div>
        </div>
      </ul>
    </div>

    <!--悬浮搜索框-->
    <div class="nav white">

      <div class="logoBig">
        <img src="static/images/shopLogo.png" style="margin-left: 0px">
      </div>

      <div class="search-bar pr">
        <a name="index_none_header_sysc" href="#"></a>
        <form action="search.html">
          <input id="searchInput" name="index_none_header_sysc" type="text" placeholder="搜索" autocomplete="off">
          <input id="ai-topsearch" class="submit am-btn" value="搜索" index="1" type="submit">
        </form>
      </div>
    </div>

    <div class="clear"></div>
  </div>
</template>

<script>

export default {
  name: "IndexHeader",
  props:{
    username:{
      type:String,
    },
    userimg:{
      type:String,
    },
    isLogin:{
      type:Boolean,
      default:false,
    },
    nickname:{
      type:String,
      default: "用户",
    }
  },
  setup(){

  },


}
</script>

<style scoped>

</style>