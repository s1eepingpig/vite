

<script setup lang="ts">
import {reactive} from "vue";
import FmInput from "@/components/fm-input.vue";
import {defineRule, Field, ErrorMessage, useField, useForm} from "vee-validate";
import {required, email} from "@vee-validate/rules";
import * as yup from "yup";
import userAPIs from "@/apis/userAPIs";
import {values} from "lodash";
import store from "@/utils/store";
// const form = reactive<{account:string, password:string}>({
//   account:"123",
//   password:"123",
// // })
const{errorMessage:accountError, value:account} = useField("account", {})
const{errorMessage:passwordError, value:password} = useField("password", {})
const {handleSubmit} = useForm({
  initialValues:{
    account:"123@qq.com",
    password:456563
  },
  validationSchema:{
    account:yup.string().required().email(),
    password:yup.string().required().min(5)
  }
})

const onSubmit =  handleSubmit(async(values) => {

  const result  = await userAPIs.login(values)
  store.set('token',{
    expire:100, result
  })
  console.log(result.data)
})

// const onSubmit = async (values)=>{
//   const{result:{token}} = await userAPIs.login(values)
//   console.log(token)
// }
</script>
<template>
  <link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/6.1.1/css/all.css" rel="stylesheet">
<div class="bg-slate-300 h-screen flex justify-center items-center ">

  <div class="w-[720px]  bg-green-200 -translate-y-55 grid grid-cols-2 rounded-md shadow-md overflow-hidden">

    <div class="p-7">
      <h2 class=" text-center text-lg  text-gray-600">Log in</h2>
      <form class="mt-5" @submit="onSubmit">

<!--        <fm-input v-model="form.account"  />-->
<!--        <input type="text" placeholder="Please input your username" class="hd-input"/>-->
<!--        <input type="password" placeholder="Please input your password" class="hd-input mt-3"/>-->
<!--        <fm-input  v-model="form.password" placeholder="Plz input your password"/>-->
        <Field name="account"  class="hd-input"  v-model="account" />
<!--        <ErrorMessage name="account" as="div" />-->
        <ErrorMessage name="account" v-model="accountError"/>


        <Field name="password"  class="hd-input" v-model="password"/>
        <ErrorMessage name="password" v-model="passwordError"/>
        <div>
          <i class="fa-brands fa-weixin "></i>
        </div>

        <button class="bg-indigo-700 text-white w-full py-3 mt-3">Log in</button>
      </form>
    </div>

    <div>
    <img src="../../assets/loginImg.jpg" >
    </div>

  </div>

</div>
</template>
<style scoped type="scss">
.hd-input{
  @apply rounded-md border w-full py-1 px-2 outline-none focus:ring-2 ring-violet-600 duration-300 ring-offset-2
}
</style>
