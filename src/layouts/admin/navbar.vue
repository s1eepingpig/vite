<script setup lang="ts">

</script>

<template>
  <div class="flex bg-blue-500 h-[50px] w-screen p-4 justify-between">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    </el-breadcrumb>


    <div class="flex justify-center items-center relative group cursor-pointer">
      <img src="/../src/assets/logo.png" class=" w-8 h-8 rounded-full object-cover ">
      <span class="ml-1 text-sm text-gray-300">
          uncle
        </span>
      <section class="group-hover:block absolute translate-y-full bg-blue-50 shadow-sm px-3 whitespace-nowrap border rounded-md hidden ">
        <div class="flex items-center cursor-pointer border-b py-3 ">
          <a class="fade-in-linear-enter-active"></a>
          <span class="text-xs text-gray-600 ml-2">Home</span>
        </div>
        <div class="flex items-center cursor-pointer border-b py-3">
          <a class="fade-in-linear-enter-active"></a>
          <span class="text-xs text-gray-600 ml-2">Quit</span>
        </div>
        <div class="flex items-center cursor-pointer border-b py-3">
          <a class="fade-in-linear-enter-active"></a>
          <span class="text-xs text-gray-600 ml-2">Home</span>
        </div>
      </section>
    </div>
  </div>


</template>

<style lang="scss">

</style>
