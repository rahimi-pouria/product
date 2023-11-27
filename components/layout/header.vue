<template>
  <div class="container mx-auto items-center z-0">
    <nav class="flex items-center justify-between flex-wrap">
      <div class="lg:hidden flex justify-between w-[100%]">
        <button
          @click="showMenuMobile = !showMenuMobile"
          class="flex items-center px-3 py-2 border rounded text-[#000] border-[#000]"
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
        <div class="w-[10%] flex justify-end items-center">
          <nuxt-link
            class="border rounded-[16px] text-center flex items-center justify-center px-[16px] py-[12px] bg-[#E20054] text-white border-[#E20054]"
            to="/"
          >
            تماس
            <img
              class="w-[16px] h-[16px]"
              src="@/assets/img/svg/phone.svg"
              alt=""
            />
          </nuxt-link>
        </div>
      </div>
      <!-- show menu desktop and tablet -->
      <div class="w-[100%] flex menu-desktop lg:items-center lg:gap-[229.5px]">
        <div class="w-[90%] lg:justify-end flex gap-[24px]">
          <div
            v-for="(item, i) in menu.Mainmenu"
            class="text-md gap-[24px] text-[#0A2A51]"
          >
            <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
            <img :src="item.icon" alt="" />
          </div>
        </div>
        <div class="w-[10%] flex justify-end items-center">
          <nuxt-link
            class="border rounded-[16px] text-center flex items-center justify-center px-[16px] py-[12px] bg-[#E20054] text-white border-[#E20054]"
            to="/"
          >
            تماس
            <img
              class="w-[16px] h-[16px]"
              src="@/assets/img/svg/phone.svg"
              alt=""
            />
          </nuxt-link>
        </div>
      </div>
    </nav>
    <!-- show menu mobile -->
    <div
      :class="{ showMenuMobile: showMenuMobile }"
      class="flex flex-col gap-[30px] py-[30px] w-[50%] bg-white z-10"
    >
      <div
        v-for="(item, i) in menu.Mainmenu"
        :key="i"
        class="text-md gap-[24px] menu-mobile text-[#0A2A51]"
      >
        <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
        <img :src="item.icon" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
// import store
import { useMainMenu } from "@/stores/menu.ts";
const menu = useMainMenu();

const showMenuMobile = ref(true);
</script>
<style>
.showMenuMobile {
  display: none !important;
}
</style>
