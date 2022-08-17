<template>
  <div class="banner">
    <!--轮播 -->
    <div class="am-slider am-slider-default scoll" data-am-flexslider id="demo-slider-0">
      <ul class="am-slides">
<!--        <li class="banner1"><a href="introduction.html"><img src="static/images/ad1.jpg" /></a></li>
        <li class="banner2"><a><img src="static/images/ad2.jpg" /></a></li>
        <li class="banner3"><a><img src="static/images/ad3.jpg" /></a></li>
        <li class="banner4"><a><img src="static/images/ad4.jpg" /></a></li>-->
        <li v-for="(img,index) in indexImgs" :class="'banner'+(index+1)" :key="img.imgId">
          <a><img :src="'static/images/'+img.imgUrl" /></a>
        </li>
      </ul>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";
let baseURL="http://localhost:8888/";
export default {
  name: "IndexImage",
  setup(){
    let indexImgs=ref([]);
    //发送请求
    axios.get(baseURL+"/index/indeximgs").then((response)=>{
      indexImgs.value=response.data.data;
      setTimeout(()=>{
        $('.am-slider').flexslider();
      },100);
    });
    return{
      indexImgs,
    };

  },

}
</script>

<style scoped>

</style>