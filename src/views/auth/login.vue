

<script setup lang="ts">

import HelloWorld from "@/components/HelloWorld.vue";
</script>
<template>
<div class="bg-slate-300 h-screen flex justify-center items-center ">

  <div class="w-[720px]  bg-green-200 -translate-y-55 grid grid-cols-2 rounded-md shadow-md overflow-hidden">

    <div class="p-7">
      <h2 class=" text-center text-lg  text-gray-600"> Log in</h2>
      <div class="mt-5">
        <hello-world></hello-world>
        <input type="text" placeholder="Please input your username" class="hd-input"/>
        <input type="password" placeholder="Please input your password" class="hd-input mt-3"/>
        <button class="bg-indigo-700 text-white w-full py-3 mt-3">Log in</button>
      </div>
    </div>

    <div>
    <img src="../../assets/loginImg.jpg" class="">
    </div>

  </div>

</div>
</template>
<style scoped type="scss">
.hd-input{
  @apply rounded-md border w-full py-1 px-2 outline-none focus:ring-2 ring-violet-600 duration-300 ring-offset-2
}
</style>
