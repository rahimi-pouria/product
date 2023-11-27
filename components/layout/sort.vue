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
      <div class="flex gap-[10px] items-center">
        <input @click="sortMinProduct" type="radio" id="check1" />
        <label class="f12-500 text-[#344456]" for="check1"
          >تعداد کم به زیاد</label
        >
      </div>
      <div class="flex gap-[10px] items-center">
        <input @click="sortMaxProduct" type="radio" id="check1" />
        <label class="f12-500 text-[#344456]" for="check1"
          >تعداد زیاد به کم</label
        >
      </div>
      <div class="flex gap-[10px] items-center">
        <input @click="sortMinRateProduct" type="radio" id="check1" />
        <label class="f12-500 text-[#344456]" for="check1"
          >رتبه زیاد به کم</label
        >
      </div>
      <div class="flex gap-[10px] items-center">
        <input @click="sortMaxRateProduct" type="radio" id="check1" />
        <label class="f12-500 text-[#344456]" for="check1"
          >تعداد کم به زیاد</label
        >
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  sortMinProduct: {
    type: Function,
  },
  sortMaxProduct: {
    type: Function,
  },
  sortMinRateProduct: {
    type: Function,
  },
  sortMaxRateProduct: {
    type: Function,
  },
});
</script>
<style lang=""></style>
