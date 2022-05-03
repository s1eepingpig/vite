<script setup lang="ts">

import {ref} from "vue";

interface menuItem {
  title: string
  icon?: string
  subtitle?: string
  active?:boolean
}

interface Menu extends menuItem {
  active?:boolean
  child?: menuItem[]
}
// @ts-ignore
const menus = ref<Menu[]>([{
  title: "ErrorPage",
  icon: "1",
  subtitle: "lol",
  active:false,
  child: [{
    title: "child1",
    active:true
  }]
},

  {title: '404',
    child: [{
      title: "404child1",
      active:true
    }]},
  {title: '403'},
  {title: "500"}
] as Menu[])

const resetMenus = ()=>{
  menus.value.forEach(pmenu=>{
    pmenu.active=false;
    pmenu.child?.forEach((cmenu)=>{
      cmenu.active=false
    })
  })
}

const handle = (pmenu:menuItem, cmenu?:menuItem)=>{
  resetMenus()
console.log(menus)
  pmenu.active=true
}
</script>

<template>
  <div class="admin h-screen w-screen flex">
    <div class="menu w-[200px] bg-gray-700">
      abc
      <div class="logo text-white">
        <i class="fas fa-robot">logo icon here</i>
      </div>
      <div class="left-container">
        <dl @click="handle(menu)" v-for="(menu, index) of menus" :key="index">
          <dt class="">
            <section>
              <i>{{ menu.icon }}</i>
              <span>{{ menu.title }}</span>
            </section>
          </dt>

          <section><i class="angeldown">></i></section>
          <dd v-if="menu.active" :class="cmenu.active" v-for="(cmenu, key) of menu.child" :key="key">{{ cmenu.title }}</dd>
        </dl>
      </div>
    </div>
    <div class="content flex-auto bg-amber-200">

    </div>
  </div>
  <router-view/>
</template>


<style lang="scss">
.admin {
  .left-container {
    dl {
      @apply text-gray-300 text-sm;
      dt {
        @apply text-sm mt-6 flex justify-between cursor-pointer items-center;

        section {
          @apply flex items-center;
          i {
            @apply mr-2 text-2xl;
          }
        }
      }

      dd {
        @apply py-3 pl-4 my-2 text-white rounded-md cursor-pointer duration-100 hover:bg-violet-400;

        &.active {
          @apply bg-violet-500 hover:bg-violet-100;
        }
      }
    }

  }
}
</style>
