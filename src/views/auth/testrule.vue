<!--Form 只绑定submit, -->
<!--名字，规则，default在Field上-->
<!--input只负责绑定-->

<template>
  <div name="bg" class="flex h-screen w-screen bg-amber-400">
  <Form @submit="onsubmit"   >
    <Field name="account" #default="{field, errorMessage}" :rules="{email:true, require:true}" v-model="account">
<input v-bind="field" v-model="account">
      <hr>
      <p>{{errorMessage}}</p>
    </Field>
  </Form>
  </div>
</template>


<script setup lang="ts">
import {defineRule, Field, Form, ErrorMessage} from "vee-validate";
import {email, required} from "@vee-validate/rules";
import {values} from "lodash";
import {ref} from "vue";
defineRule("email",email)
defineRule("require", required)

const account=ref<string>()
const onsubmit=(values)=>{
  console.log(values)
}

</script>

<style scoped lang="scss">
//.bg{
//  @apply
//  h-screen w-screen w-2/4 rounded-2xl bg-amber-400
//
//}
</style>










<!-- &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; -->




<!--<template>-->
<!--  <div class="flex w-screen h-screen justify-center items-center bg-green-200">-->
<!--&lt;!&ndash;    注意Field是单括号,外围需要配合Form(包里的不是默认 h5 form)&ndash;&gt;-->
<!--&lt;!&ndash;    <Form @submit="onSubmit" #default="{field}">&ndash;&gt;-->
<!--&lt;!&ndash;      <Field name="account" :rules="emailT" class=" w-2/4 border p-3 rounded-b-2xl" >&ndash;&gt;-->

<!--&lt;!&ndash;        <input v-bind="field" v-model="account">&ndash;&gt;-->
<!--&lt;!&ndash;        <ErrorMessage name="account"/>&ndash;&gt;-->
<!--&lt;!&ndash;      </Field>&ndash;&gt;-->


<!--&lt;!&ndash;    </Form>&ndash;&gt;-->
<!--    <Form @submit="onSubmit">-->
<!--      <Field-->
<!--      name="account" :rules="{ email:true, }" #default="{field, errorMessage}">-->
<!--  <input v-bind="field" v-model="account">-->
<!--<p>{{errorMessage}}</p>-->
<!--      </Field>-->
<!--      </Form>-->

<!--&lt;!&ndash;      <input type="text" />&ndash;&gt;-->

<!--      </div>-->

<!--</template>-->

<!--<script setup lang="ts">-->
<!--import {Form, Field, ErrorMessage, defineRule} from "vee-validate";-->
<!--import {ref} from "vue";-->
<!--import {email} from "@vee-validate/rules";-->

<!--defineRule('email', email)-->
<!--// defineRule("require", required)-->

<!--const account = ref<string>('')-->
<!--console.log(account)-->
<!--const onSubmit = (values)=>{-->
<!--  console.log(values)-->
<!--}-->
<!--//@ts-ignore-->
<!--const emailT = (value)=>{-->
<!--  return /@/.test(value)?true:"error"-->
<!--}-->
<!--</script>-->

<!--<style scoped lang="scss">-->


<!--</style>-->
