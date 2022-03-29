<template>

  <div class="bg">
    <form @submit="onSubmit">
      <div>
      <input class="in" type="text" v-model="usernameValue">
      <p>{{ username }}</p>
      </div>
      <div>
        <input class="in" type="password" v-model="passwordValue">
        <p>{{password}}</p>
      </div>
        <button class="w-[60px] h-fit bg-amber-400 text-center">submit</button>

    </form>

  </div>
</template>

<script setup lang="ts">
// import {Field, defineRule, useField, ErrorMessage, useForm} from "vee-validate";
import {email, required} from "@vee-validate/rules";
import v from "@/plugins/validate"
// import{ f } from "@/plugins/validate/index"
// @ts-ignore
// import * as yup from "yup"
//
// defineRule('email', email)
// defineRule('required', required)

const {handleSubmit} = v.useForm({
  initialValues: {
    username: '111',
    password: "123456"
  },
  validationSchema: {
    // username: {required: true, email: true} //vee 用法
    username: v.yup.string().required("cannot be valid").email(), //yup 用法
    // , password: {required: true}
    password:v.yup.string().required("cannot be valid")

  }
})

const {errorMessage: username, value: usernameValue} = v.useField("username", {})
const {value:passwordValue, errorMessage:password} = v.useField("password", {})

const onSubmit = handleSubmit((values) => {
  console.log(values)
  // console.log(usernameError)
})

</script>
//bg-slate-300 h-screen flex
<style scoped lang="scss">
.bg {
  @apply flex h-screen w-screen bg-blue-400 justify-center items-center
}

.in {
  @apply w-[250px] h-[40px] rounded-md
}
</style>
