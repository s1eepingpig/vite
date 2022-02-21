<script setup lang="ts">
import helper from "../vite/helper";

console.log(typeof import.meta.env.VITE_ROUTE_AUTOLOAD)
console.log( import.meta.env.VITE_ROUTE_AUTOLOAD)
console.log(helper.env.VITE_ROUTE_AUTOLOAD)
</script>

<template>
<!-- 我超快捷键nb ul>li*3 -->
<ul class="bg-red-100">

  <li>首页</li>
  <li>商品</li>
  <li>评价</li>
</ul>
<router-view></router-view>
<!-- //来源于routerview -->
</template>

<style>

</style>
