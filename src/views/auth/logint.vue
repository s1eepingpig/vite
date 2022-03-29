<script setup lang="ts">

import {useForm, Field, useField,  ErrorMessage} from "vee-validate";
// import {mixed, string} from "yup";
import * as yup from 'yup';
import {values} from "lodash";

const {errorMessage:accountError, value:account} = useField("account",{})

const { handleSubmit } = useForm({
  initialValues:{
    account:123,
    password:456
  },
  validationSchema:{
    account:yup.string().required().email(),
    password:yup.mixed().required()
  }
})
const onSubmit = handleSubmit(values=>{
  console.log(values)
})
</script>

<template >
  <h1>log int</h1>
  <form @submit="onSubmit">
    <Field name="account"  v-model="account" />
<!--    <div :v-if="errors.account" >account Errorrrr</div>-->
    <error-message type="h2" name="account" v-model="accountError"/>


    <button>click</button>
  </form>
</template>

<style scoped type="scss">

</style>
