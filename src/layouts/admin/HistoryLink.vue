<script setup lang="ts">
import {ref} from "vue";

const links = ref <{title: string}[]> ([
  {title:"editor"},
  {title:"editor1"},
  {title:"editor2"},
  {title:"editor3"}
])
</script>

<template>
  <div class="m-3 grid grid-flow-col gap-2 justify-start">
    <a v-for="link in links" class="py-3 px-3 rounded-md bg-white ">
      {{link.title}}<i> X</i>
    </a>
  </div>
</template>
<style scoped lang="scss">

</style>
