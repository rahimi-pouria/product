<template>
  <div class="w-full container mx-auto flex gap-[24px]">
    <!-- sidbar filter product -->
    <div class="flex flex-col md:w-[25%] gap-[16px]">
      <!-- search -->
      <div class="flex flex-col bg-white p-[16px] rounded-[24px] gap-[16px]">
        <p class="text-[#445A74] f13-500">فیلتر و جستجو</p>
        <div class="pt-2 relative mx-auto text-gray-600">
          <input
            class="border-2 border-[#E20054] bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button
            type="submit"
            class="absolute border-l-2 right-0 top-0 mt-5 mr-4"
          >
            <svg
              class="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style="enable-background: new 0 0 56.966 56.966"
              xml:space="preserve"
              width="512px"
              height="512px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button>
          <img
            class="absolute left-0 top-0 mt-5 ml-4"
            src="@/assets/img/svg/close.svg"
            alt=""
          />
        </div>
        <!-- button search -->
        <button
          class="bg-[#E20054] rounded-[12px] text-white flex items-center justify-center py-[10px] px-[124px]"
        >
          جستجو
        </button>
      </div>
      <!-- sort product -->
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
            <input type="radio" id="check1" />
            <label class="f12-500 text-[#344456]" for="check1"
              >تعداد کم به زیاد</label
            >
          </div>
          <div class="flex gap-[10px] items-center">
            <input type="radio" id="check1" />
            <label class="f12-500 text-[#344456]" for="check1"
              >تعداد زیاد به کم</label
            >
          </div>
          <div class="flex gap-[10px] items-center">
            <input type="radio" id="check1" />
            <label class="f12-500 text-[#344456]" for="check1"
              >رتبه زیاد به کم</label
            >
          </div>
          <div class="flex gap-[10px] items-center">
            <input type="radio" id="check1" />
            <label class="f12-500 text-[#344456]" for="check1"
              >تعداد کم به زیاد</label
            >
          </div>
        </div>
      </div>
      <!-- category -->
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
            class="flex gap-[10px] items-center"
          >
            <input type="checkbox" id="check1" />
            <label class="f12-500 text-[#344456]" for="check1">{{
              item
            }}</label>
          </div>
        </div>
      </div>
    </div>
    <!-- show all products -->
    <div class="flex flex-col md:w-[75%] gap-[24px]">
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
          v-for="(item, i) in product.data"
          :key="i"
          class="w-[32%] bg-white shadow-product p-[8px] rounded-[24px]"
        >
          <!-- header card -->
          <img
            class="rounded-[16px] border p-2 w-full md:h-[170px]"
            :src="item.image"
            alt=""
          />
          <!-- body card -->
          <div class="flex md:w-[250px] p-[16px]">
            <p class="f14-700 truncate">{{ item.title }}</p>
          </div>
          <!-- footer card  -->
          <nuxt-link
            class="text-[#E20054] w-full border-btn justify-center items-center flex gap-[8px] px-[16px] py-[12px] rounded-[16px]"
            :to="`/product/${item.id}`"
          >
            مشاهده جزیات
            <img src="@/assets/img/svg/left.svg" alt="" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useGetAllProduct } from "@/stores/AllProducts";
let category = ref([]);
const getCategory = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    category.value = data;
  } catch (error) {
    console.error(error);
  }
};
const product = useGetAllProduct();

const showProducts = () => {
  product.getProducts();
};

showProducts();
getCategory();
</script>
<style lang=""></style>
