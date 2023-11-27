<template>
  <div class="w-full flex container mx-auto md:justify-between footer-menu">
    <!-- title footer -->
    <div class="flex md:w-[38%] title-footer pt-[160px] pb-[80px] items-end">
      <p class="f13-500 text-[#445A74] p-[40px]">
        هفت روز هفته از ۸ صبح تا ۱۲ شب پاسخگو هستیم
      </p>
    </div>
    <!-- auick access menu -->
    <div
      class="flex flex-col md:w-[20%] gap-[24px] sm:w-[50%] quick-menu-mobile md:p-[40px]"
    >
      <h3 class="f20-700 text-[#253343]">دسترسی سریع</h3>
      <div
        v-for="(item, i) in MenuFooter.quickAccess"
        :key="i"
        class="flex flex-col gap-[12px]"
      >
        <nuxt-link
          class="text-[#30445B] hover:text-[#E20054] f13-500"
          :to="item.path"
          >{{ item.name }}</nuxt-link
        >
      </div>
    </div>
    <!-- Site guide menu -->
    <div
      class="flex flex-col md:w-[20%] gap-[24px] sm:w-[50%] quick-menu-mobile md:p-[40px]"
    >
      <h3 class="f20-700 text-[#253343]">راهنمای سایت</h3>
      <div
        v-for="(item, i) in MenuFooter.SiteGuide"
        :key="i"
        class="flex flex-col gap-[12px]"
      >
        <nuxt-link
          class="text-[#30445B] hover:text-[#E20054] f13-500"
          :to="item.path"
          >{{ item.name }}</nuxt-link
        >
      </div>
    </div>
    <!-- Site guide menu -->
    <div
      class="flex flex-col md:w-[22%] gap-[24px] sm:w-[50%] quick-menu-mobile md:p-[40px]"
    >
      <h3 class="f20-700 text-[#253343]">شبکه های اجتماعی</h3>
      <div
        v-for="(item, i) in MenuFooter.socialMedia"
        :key="i"
        class="flex flex-col gap-[12px]"
      >
        <div class="flex w-full gap-[12px]">
          <img class="w-[24px] h-[24px]" :src="item.icon" alt="" />
          <nuxt-link
            class="text-[#30445B] hover:text-[#E20054] f13-500"
            :to="item.path"
            >{{ item.name }}</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useQuickAccess } from "@/stores/footer";
const MenuFooter = useQuickAccess();
</script>
<style lang=""></style>
