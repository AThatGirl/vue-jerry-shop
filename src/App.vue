<template>
  <IndexHeader/>
  <IndexImage/>
  <IndexShopNav/>
  <IndexShopMainbg/>
  <IndexGuideAndMenu/>
</template>

<script>

import IndexHeader from "@/components/IndexHeader";
import IndexImage from "@/components/IndexImage";
import IndexShopNav from "@/components/IndexShopNav";
import IndexShopMainbg from "@/components/IndexShopMainbg";
import IndexGuideAndMenu from "@/components/IndexGuideAndMenu";
export default {
  name: 'App',
  components: {
    IndexGuideAndMenu,
    IndexShopMainbg,
    IndexShopNav,
    IndexImage,
    IndexHeader
  }
}
</script>

<style>

</style>
