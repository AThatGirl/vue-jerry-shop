<template>
  <!--顶部导航条 -->
  <div class="am-container header">
    <ul class="message-l">
      <div class="topMessage">
        <div class="menu-hd">
          <a href="#" target="_top" class="h">亲，请登录</a>&nbsp;/
          <a href="#" target="_top">免费注册</a>
        </div>
      </div>
    </ul>
    <ul class="message-r">
      <div class="topMessage home">
        <div class="menu-hd"><a href="index.html" target="_top" class="h">商城首页</a></div>
      </div>
      <div class="topMessage my-shangcheng">
        <div class="menu-hd MyShangcheng"><a href="#" target="_top"><i class="am-icon-user am-icon-fw"></i>个人中心</a></div>
      </div>
      <div class="topMessage mini-cart">
        <div class="menu-hd"><a id="mc-menu-hd" href="#" target="_top"><i class="am-icon-shopping-cart  am-icon-fw"></i><span>购物车</span><strong id="J_MiniCartNum" class="h">0</strong></a></div>
      </div>
      <div class="topMessage favorite">
        <div class="menu-hd"><a href="#" target="_top"><i class="am-icon-heart am-icon-fw"></i><span>收藏夹</span></a></div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShopCartHeader"
}
</script>

<style scoped>
a{
  color: #0a628f;
}
</style>