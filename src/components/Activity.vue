<template>
  <div class="shopMainbg">
    <div class="shopMain" id="shopmain">

      <!--今日推荐 -->

      <div class="am-g am-g-fixed recommendation">
        <div class="clock am-u-sm-3" style="background-color: saddlebrown">
          <img src="static/images/2022.png " style="border-radius: 50%">
          <p>新品<br>推荐</p>
        </div>
        <a href="introduction.html" v-for="rp in recommendProducts" :key="rp.productId">
          <div class="am-u-sm-4 am-u-lg-3 ">
            <div class="info ">
              <h3>{{ rp.productName }}</h3>
              <h4>{{ rp.content }}</h4>
            </div>
            <div class="recommendationMain one">

              <img :src="'static/product-images/'+rp.imgs[0].url ">
            </div>
          </div>
        </a>

      </div>
      <div class="clear "></div>
      <!--热门活动 -->

      <div class="am-container activity ">
        <div class="shopTitle ">
          <h4>活动</h4>
          <h3>每期活动 优惠享不停 </h3>
          <span class="more ">
                              <a href="# ">全部活动<i class="am-icon-angle-right" style="padding-left:10px ;" ></i></a>
                        </span>
        </div>
        <div class="am-g am-g-fixed ">
          <div class="am-u-sm-3 ">
            <div class="icon-sale one "></div>
            <h4>秒杀</h4>
            <div class="activityMain ">
              <img src="static/images/activity1.jpg ">
            </div>
            <div class="info ">
              <h3>春节送礼优选</h3>
            </div>
          </div>

          <div class="am-u-sm-3 ">
            <div class="icon-sale two "></div>
            <h4>特惠</h4>
            <div class="activityMain ">
              <img src="static/images/activity2.jpg ">
            </div>
            <div class="info ">
              <h3>春节送礼优选</h3>
            </div>
          </div>

          <div class="am-u-sm-3 ">
            <div class="icon-sale three "></div>
            <h4>团购</h4>
            <div class="activityMain ">
              <img src="static/images/activity3.jpg ">
            </div>
            <div class="info ">
              <h3>春节送礼优选</h3>
            </div>
          </div>

          <div class="am-u-sm-3 last ">
            <div class="icon-sale "></div>
            <h4>超值</h4>
            <div class="activityMain ">
              <img src="static/images/activity.jpg ">
            </div>
            <div class="info ">
              <h3>春节送礼优选</h3>
            </div>
          </div>

        </div>
      </div>
      <div class="clear "></div>




    </div>
  </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";

let baseURL="http://localhost:8888/";

export default {
  name: "Activity",
  setup(){
    let url=baseURL+"index/list-recommends";
    let recommendProducts=ref([]);

    //新品推荐
    axios.get(url).then((response)=>{
      recommendProducts.value=response.data.data;
    });



    return{
      recommendProducts,
    }
  }

}
</script>

<style scoped>

</style>