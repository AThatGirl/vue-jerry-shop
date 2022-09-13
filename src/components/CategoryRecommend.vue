<template>
  <div  v-for="(category,index) in recommendCategories" :id="'f'+(index+1)" :key="category.categoryId" >
    <!--甜点-->
    <div class="am-container " v-if="category.products.length > 0" >
      <div class="shopTitle ">
        <h4>{{ category.categoryName }}</h4>
        <h3>{{category.categorySlogan}}</h3>
<!--        <div class="today-brands ">
          <a href="# ">桂花糕</a>
          <a href="# ">奶皮酥</a>
          <a href="# ">栗子糕 </a>
          <a href="# ">马卡龙</a>
          <a href="# ">铜锣烧</a>
          <a href="# ">豌豆黄</a>
        </div>-->
        <span class="more ">
                    <a href="# ">更多美味<i class="am-icon-angle-right" style="padding-left:10px ;" ></i></a>
                        </span>
      </div>
    </div>
    <div class="am-g am-g-fixed floodFour" v-if="category.products.length > 0"  >
      <div class="am-u-sm-5 am-u-md-4 text-one list ">
        <div class="word">
          <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
          <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
          <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
          <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
          <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
          <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
        </div>
        <a href="# ">
          <div class="outer-con ">
            <div class="title ">
              开抢啦！
            </div>
            <div class="sub-title ">
              零食大礼包
            </div>
          </div>
          <img :src="'static/images/'+category.categoryPic" />
        </a>
        <div class="triangle-topright"></div>
      </div>

      <div class="am-u-sm-7 am-u-md-4 text-two sug" v-if="category.products.length > 0">
        <div class="outer-con ">
          <div class="title ">
            {{ category.products[0].productName }}
          </div>
          <div class="sub-title ">
            {{ category.products[0].content }}
          </div>
          <i class="am-icon-shopping-basket am-icon-md  seprate"></i>
        </div>
        <a href="# "><img :src="'static/product-images/'+category.products[0].imgs[0].url" /></a>
      </div>

      <div class="am-u-sm-7 am-u-md-4 text-two" v-if="category.products.length > 1">
        <div class="outer-con ">
          <div class="title ">
            {{ category.products[1].productName }}
          </div>
          <div class="sub-title ">
            {{ category.products[1].content }}
          </div>
          <i class="am-icon-shopping-basket am-icon-md  seprate"></i>
        </div>
        <a href="# "><img :src="'static/product-images/'+category.products[1].imgs[0].url" /></a>
      </div>


      <div class="am-u-sm-3 am-u-md-2 text-three big" v-if="category.products.length > 2" >
        <div class="outer-con ">
          <div class="title ">
            {{ category.products[2].productName }}
          </div>
          <div class="sub-title ">
            {{ category.products[2].content }}
          </div>
          <i class="am-icon-shopping-basket am-icon-md  seprate"></i>
        </div>
        <a href="# "><img :src="'static/product-images/'+category.products[2].imgs[0].url" /></a>
      </div>

      <div class="am-u-sm-3 am-u-md-2 text-three sug"  v-if="category.products.length > 3">
        <div class="outer-con ">
          <div class="title ">
            {{ category.products[2].productName }}
          </div>
          <div class="sub-title ">
            {{ category.products[2].content }}
          </div>
          <i class="am-icon-shopping-basket am-icon-md  seprate"></i>
        </div>
        <a href="# "><img :src="'static/product-images/'+category.products[3].imgs[0].url" /></a>
      </div>

      <div class="am-u-sm-3 am-u-md-2 text-three "  v-if="category.products.length > 4">
        <div class="outer-con ">
          <div class="title ">
            {{ category.products[2].productName }}
          </div>
          <div class="sub-title ">
            {{ category.products[2].content }}
          </div>
          <i class="am-icon-shopping-basket am-icon-md  seprate"></i>
        </div>
        <a href="# "><img :src="'static/product-images/'+category.products[4].imgs[0].url" /></a>
      </div>

      <div class="am-u-sm-3 am-u-md-2 text-three last big "  v-if="category.products.length > 5">
        <div class="outer-con ">
          <div class="title ">
            {{ category.products[2].productName }}
          </div>
          <div class="sub-title ">
            {{ category.products[2].content }}
          </div>
          <i class="am-icon-shopping-basket am-icon-md  seprate"></i>
        </div>
        <a href="# "><img :src="'static/product-images/'+category.products[5].imgs[0].url" /></a>
      </div>

    </div>
    <div class="clear "></div>
  </div>
  <div class="footer ">
    <div class="footer-hd ">
      <p>
        <a href="# ">杰瑞商城</a>
        <b>|</b>
        <a href="# ">商城首页</a>
        <b>|</b>
        <a href="# ">支付宝</a>
        <b>|</b>
        <a href="# ">物流</a>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";

export default {
  name: "CategoryRecommend",
  setup(){
    let baseURL="http://localhost:8888/";
    let url=baseURL+"index/category-recommends";

    let recommendCategories=ref([]);

    //分类商品推荐
    axios.get(url).then((response)=>{
      console.log(response);
      recommendCategories.value=response.data.data;
    });
    return{
      recommendCategories,
    }

  }


}
</script>

<style scoped>

</style>