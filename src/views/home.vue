<script setup lang="ts">

import FmInput from "@/components/fm-input.vue";
import axios from "axios";

// waitForSuccessfulPing()
// async function waitForSuccessfulPing(ms = 1000) {
//   const config = {
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//       "Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token"
//     }
//   };
//   // eslint-disable-next-line no-constant-condition
//
//   while (true) {
//     const base = "https://www.google.com"
//     try {
//       isGoogle=true
//       await axios.get(base, config)
//       // await fetch(base)
//       console.log("success")
//       break
//     } catch (e) {
//       console.log("nonono")
//       // await new Promise((resolve) => setTimeout(resolve, ms))
//     }
//   }
// }
</script>


<template>

  <h2>主页home.vue</h2>
  <div>
    <input placeholder=" input " class="justify-center bg-amber-400">
    <fm-input placeholder="Search"></fm-input>
    <button onclick=""> Search</button>
    <div>
      <router-link :to="{name:'login'}" class="bg-blend-color-burn">login</router-link>
      <router-link :to="{name:'user'}" class="bg-blend-color-burn">user</router-link>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  route: {name: "home"}
}
</script>

<style lang="scss">

</style>
