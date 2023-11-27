<template>
  <div class="flex flex-col bg-white p-[16px] rounded-[24px] gap-[16px]">
    <div class="flex w-full items-center justify-between">
      <p class="text-[#445A74] f13-500">مرتب سازی</p>
      <img
        class="w-[16px] h-[16px]"
        src="@/assets/img/svg/arrowDown.svg"
        alt=""
      />
    </div>
    <div class="flex flex-col gap-[20px]">
      <div
        v-for="(item, i) in category"
        :key="i"
        class="flex gap-[10px] items-center"
      >
        <input type="checkbox" id="check1" />
        <label class="f12-500 text-[#344456]" for="check1">{{ item }}</label>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  category: String,
});
</script>
<style lang=""></style>
