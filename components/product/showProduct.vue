<template>
  <div class="w-full container mx-auto flex gap-[24px]">
    <!-- sidbar filter product -->
    <div class="flex md:w-[20%]">sidbar</div>
    <div class="flex flex-col md:w-[80%] gap-[24px]">
      <!-- show filter product -->
      <div
        class="flex w-full items-center bg-white justify-between rounded-[24px] pt-[16px] pr-[24px] pb-[16px] pl-[16px]"
      >
        <p>فیلترهای اعمال شده</p>
        <span
          class="bg-[#FCE5EE] flex justify-between items-center w-[15%] p-[8px] rounded-[16px]"
        >
          <img class="mt-[5px]" src="@/assets/img/svg/u_search.svg" alt="" />
          دو لنگه
          <img class="mt-[5px]" src="@/assets/img/svg/close.svg" />
        </span>
      </div>
      <!-- show product -->
      <div class="flex w-full gap-[16px] flex-wrap">
        <div
          v-for="(item, i) in products"
          class="w-[32%] bg-white shadow-product p-[8px] rounded-[24px]"
        >
          <!-- header card -->
          <img
            class="rounded-[16px] w-full md:h-[170px]"
            :src="item.image"
            alt=""
          />
          <!-- body card -->
          <div class="flex w-full p-[16px]">
            <p class="f14-700">{{ item.title }}</p>
          </div>
          <!-- footer card  -->
          <nuxt-link
            class="text-[#E20054] w-full border-btn justify-center items-center flex gap-[8px] px-[16px] py-[12px] rounded-[16px]"
            :to="`/${item.id}`"
            >مشاهده جزیات
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
let products = ref([]);
const showdata = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  products = response.data;
  console.log(products);
};
showdata();
</script>
<style lang=""></style>
