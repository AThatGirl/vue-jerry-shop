<template>
  <!--悬浮搜索框-->

  <div class="nav white">
    <div class="logo"><img src="static/images/logo.png" /></div>
    <div class="logoBig">
      <li><img src="static/images/shopLogo.png" /></li>
    </div>

    <div class="search-bar pr">
      <a name="index_none_header_sysc" href="#"></a>
      <form>
        <input id="searchInput" name="index_none_header_sysc" type="text" placeholder="搜索" autocomplete="off">
        <input id="ai-topsearch" class="submit am-btn" value="搜索" index="1" type="submit">
      </form>
    </div>
  </div>

  <div class="clear"></div>

</template>

<script>
export default {
  name: "SearchFrame"
}
</script>

<style scoped>

</style>