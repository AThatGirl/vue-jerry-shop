<template>
  <div class="shopNav">
    <div class="slideall">

      <div class="long-title"><span class="all-goods">全部分类</span></div>
      <div class="nav-cont">
        <ul>
          <li class="index"><a href="#">首页</a></li>
          <li class="qc"><a href="#">闪购</a></li>
          <li class="qc"><a href="#">限时抢</a></li>
          <li class="qc"><a href="#">团购</a></li>
          <li class="qc last"><a href="#">大包装</a></li>
        </ul>
        <div class="nav-extra">
          <i class="am-icon-user-secret am-icon-md nav-user"></i><b></b>我的福利
          <i class="am-icon-angle-right" style="padding-left: 10px;"></i>
        </div>
      </div>

      <!--侧边导航 -->
      <div id="nav" class="navfull">
        <div class="area clearfix">
          <div class="category-content" id="guide_2">

            <div class="category">
              <ul class="category-list" id="js_climit_li">
                <li v-for="c1 in categories" class="appliance js_toggle relative first" :key="c1.categoryId">
                  <div class="category-info">
                    <h3 class="category-name b-category-name"><i><img :src="'static/images/'+c1.categoryIcon"></i><a class="ml-22" title="点心">{{c1.categoryName}}</a></h3>
                    <em>&gt;</em>
                  </div>
                  <!--二级分类-->
                  <div class="menu-item menu-in top">
                    <div class="area-in">
                      <div class="area-bg">
                        <div class="menu-srot">
                          <div class="sort-side">
                            <dl class="dl-sort" v-for="c2 in c1.categories" :key="c2.categoryId">
                              <dt><span :title="c2.categoryName">{{ c2.categoryName }}</span></dt>
                              <dd v-for="c3 in c2.categories"  :key="c3.categoryId"><a :title="c3.categoryName" href="search.html"><span>{{ c3.categoryName }}</span></a></dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <b class="arrow"></b>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>




      <!--小导航 -->
      <div class="am-g am-g-fixed smallnav">
        <div class="am-u-sm-3">
          <a href="sort.html"><img src="static/images/navsmall.jpg" />
            <div class="title">商品分类</div>
          </a>
        </div>
        <div class="am-u-sm-3">
          <a href="#"><img src="static/images/huismall.jpg" />
            <div class="title">大聚惠</div>
          </a>
        </div>
        <div class="am-u-sm-3">
          <a href="#"><img src="static/images/mansmall.jpg" />
            <div class="title">个人中心</div>
          </a>
        </div>
        <div class="am-u-sm-3">
          <a href="#"><img src="static/images/moneysmall.jpg" />
            <div class="title">投资理财</div>
          </a>
        </div>
      </div>

      <!--走马灯 -->

      <div class="marqueen">
        <span class="marqueen-title">商城头条</span>
        <div class="demo">

          <ul>
            <li class="title-first"><a target="_blank" href="#">
              <img src="static/images/TJ2.jpg">
              <span>[特惠]</span>商城爆品1分秒
            </a></li>
            <li class="title-first"><a target="_blank" href="#">
              <span>[公告]</span>商城与广州市签署战略合作协议
              <img src="static/images/TJ.jpg">
              <p>XXXXXXXXXXXXXXXXXX</p>
            </a></li>

            <div class="mod-vip">
              <div class="m-baseinfo">
                <a href="person/index.html">
                  <img :src="userimg">
                </a>
                <em>
                  Hi,<span class="s-name">{{nickname}}</span>
                  <a href="#"><p>点击更多优惠活动</p></a>
                </em>
              </div>
              <div class="member-logout">
                <a class="am-btn-warning btn" href="login.html">登录</a>
                <a class="am-btn-warning btn" href="register.html">注册</a>
              </div>
              <div class="member-login">
                <a href="#"><strong>0</strong>待收货</a>
                <a href="#"><strong>0</strong>待发货</a>
                <a href="#"><strong>0</strong>待付款</a>
                <a href="#"><strong>0</strong>待评价</a>
              </div>
              <div class="clear"></div>
            </div>

            <li><a target="_blank" href="search.html"><span>[特惠]</span>洋河年末大促，低至两件五折</a></li>
            <li><a target="_blank" href="search.html"><span>[公告]</span>华北、华中部分地区配送延迟</a></li>
            <li><a target="_blank" href="search.html"><span>[特惠]</span>家电狂欢千亿礼券 买1送1！</a></li>

          </ul>
          <div class="advTip"><img src="static/images/advTip.jpg"/></div>
        </div>
      </div>
      <div class="clear"></div>
    </div>

  </div>
</template>

<script>

import axios from "axios";
import {ref} from "vue";

let baseURL="http://localhost:8888/";

export default {
  name: "IndexShopNav",
  setup(){
    let userimg=getCookieValue("userimg");
    let username=getCookieValue("username");
    let nickname=getCookieValue("nickname");
    let categories=ref([]);
    if (userimg==null||userimg===""){
      userimg="static/images/default.png";
    }
    if (username==null||username===""){
      username="请先登录"
    }

    axios.get(baseURL+"index/category-list").then((response)=>{
      categories.value=response.data.data;
      setTimeout(()=>{
        $("li").hover(function() {
          $(".category-content .category-list li.first .menu-in").css("display", "none");
          $(".category-content .category-list li.first").removeClass("hover");
          $(this).addClass("hover");
          $(this).children("div.menu-in").css("display", "block")
        }, function() {
          $(this).removeClass("hover")
          $(this).children("div.menu-in").css("display", "none")
        });
      },100)

    });



    return{
      userimg,
      username,
      categories,
      nickname,
    }
  }

}
</script>

<style scoped>

</style>