<template>
  <div class="flex flex-col md:w-[79%] gap-[12px] showdescription">
    <div class="flex bg-[#f5f7fa] custome-radius p-[13px] inviteTech">
      <p class="text-color">{{ price }}</p>
    </div>
    <div class="flex bg-[#f5f7fa] custome-radius p-[13px] inviteTech">
      <p class="text-color">{{ description }}</p>
    </div>
    <div class="flex bg-[#f5f7fa] custome-radius p-[13px] inviteTech">
      <p class="text-color">{{ category }}</p>
    </div>
    <div class="flex bg-[#f5f7fa] custome-radius p-[13px] inviteTech">
      <p class="text-color">{{ rate }}</p>
    </div>
    <div class="flex bg-[#f5f7fa] custome-radius p-[13px] inviteTech">
      <p class="text-color">{{ count }}</p>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  price: Number,
  description: String,
  category: String,
  count: Number,
  rate: Number,
});
</script>
<style lang=""></style>
