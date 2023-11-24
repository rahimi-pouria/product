import type { useMainMenu } from '~/sotres/menu'; import type { useMainMenu }
from '~/sotres/menu';
<template>
  <div class="w-full container mx-auto">
    <nav class="flex items-center justify-between flex-wrap">
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-[100%] flex lg:justify-center lg:gap-[229.5px]">
        <div class="w-[90%] lg:justify-end flex gap-[24px]">
          <div
            v-for="(item, i) in menu.Mainmenu"
            class="text-md gap-[24px] text-[#0A2A51]"
          >
            <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
            <img :src="item.icon" alt="" />
          </div>
        </div>
        <div class="w-[10%] flex justify-end">
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >Download</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
// import store
import { useMainMenu } from "@/stores/menu.ts";
const menu = useMainMenu();
</script>
<style></style>
