<script setup lang="ts">
import MenuComponent from './admin/menu.vue'
import navBar from './admin/navbar.vue'
import HistoryLink from "@/layouts/admin/HistoryLink.vue";

</script>

<template>

  <div class="admin flex h-screen w-screen">

    <MenuComponent />


    <div class="content flex-1 bg-amber-200">
      <navBar />
      <HistoryLink/>
      <router-view class=""/>
    </div>

  </div>

</template>


<style lang="scss">

</style>
