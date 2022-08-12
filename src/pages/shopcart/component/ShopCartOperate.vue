<template>
  <!--操作页面-->
  <div class="theme-popover-mask"></div>
  <div class="theme-popover">
    <div class="theme-span"></div>
    <div class="theme-poptit h-title">
      <a href="javascript:;" title="关闭" class="close">×</a>
    </div>
    <div class="theme-popbod dform">
      <form class="theme-signin" name="loginform" action="" method="post">

        <div class="theme-signin-left">

          <li class="theme-options">
            <div class="cart-title">颜色：</div>
            <ul>
              <li class="sku-line selected">12#川南玛瑙<i></i></li>
              <li class="sku-line">10#蜜橘色+17#樱花粉<i></i></li>
            </ul>
          </li>
          <li class="theme-options">
            <div class="cart-title">包装：</div>
            <ul>
              <li class="sku-line selected">包装：裸装<i></i></li>
              <li class="sku-line">两支手袋装（送彩带）<i></i></li>
            </ul>
          </li>
          <div class="theme-options">
            <div class="cart-title number">数量</div>
            <dd>
              <input class="min am-btn am-btn-default" name="" type="button" value="-" />
              <input class="text_box" name="" type="text" value="1" style="width:30px;" />
              <input class="add am-btn am-btn-default" name="" type="button" value="+" />
              <span  class="tb-hidden">库存<span class="stock">1000</span>件</span>
            </dd>

          </div>
          <div class="clear"></div>
          <div class="btn-op">
            <div class="btn am-btn am-btn-warning">确认</div>
            <div class="btn close am-btn am-btn-warning">取消</div>
          </div>

        </div>
        <div class="theme-signin-right">
          <div class="img-info">
            <img src="static/images/kouhong.jpg_80x80.jpg" />
          </div>
          <div class="text-info">
            <span class="J_Price price-now">¥39.00</span>
            <span id="Stock" class="tb-hidden">库存<span class="stock">1000</span>件</span>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopCartOperate"
}
</script>

<style scoped>

</style>