<script setup lang="ts">

const props = defineProps({
  modelValue:String
})
//这里经历了多次报错，来源于 defineProps，Vue3确实是自动加载defineProps
// 但是需要在<script 中添加lang="ts" 和添加setup 关键字，另外，变量名也要符合传参的名字。
</script>
<template>
<!--  用$event来触法及时更新表单内容-->
  <input type="text" :value="this.props.modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
  <div></div>
</template>
<style scoped>
input{
  @apply rounded-md border w-full py-1 px-2 outline-none focus:ring-2 ring-violet-600 duration-300 ring-offset-2
}
</style>
