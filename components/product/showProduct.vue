<template>
  <div
    class="w-full show-product sm:flex-wrap container mx-auto flex gap-[24px]"
  >
    <!-- sidbar filter product -->
    <div class="flex flex-col md:w-[25%] sm:w-full gap-[16px]">
      <!-- search -->
      <layout-search :seachProduct="seachProduct" v-model="textInput" />
      <!-- sort product -->
      <layout-sort
        :sortMinProduct="sortMinProduct"
        :sortMaxProduct="sortMaxProduct"
        :sortMinRateProduct="sortMinRateProduct"
        :sortMaxRateProduct="sortMaxRateProduct"
      />
      <!-- category -->
      <layout-category :category="category" :choiceCategory="choiceCategory" />
    </div>
    <!-- show all products -->
    <div class="flex flex-col md:w-[71%] responsive-product gap-[24px]">
      <!-- show filter product -->
      <div
        class="flex w-[100%] items-center show-search-mobile bg-white justify-between rounded-[24px] pt-[16px] pr-[24px] pb-[16px] pl-[16px]"
      >
        <p class="f14-700">فیلترهای اعمال شده</p>
        <span
          :class="{ hideClear: hideClear }"
          class="bg-[#FCE5EE] flex justify-between items-center md:w-[30%] p-[8px] rounded-[16px]"
        >
          <img class="mt-[5px]" src="@/assets/img/svg/u_search.svg" alt="" />
          {{ showresult }}
          <img
            @click="resetSearch"
            class="mt-[5px]"
            src="@/assets/img/svg/close.svg"
          />
        </span>
      </div>
      <!-- show product -->
      <div
        class="flex w-[100%] gap-[16px] md:flex-wrap product-list"
        v-if="!showSearch"
      >
        <div
          v-for="(item, i) in product.data"
          :key="i"
          class="md:w-[31%] card-product bg-white shadow-product p-[8px] rounded-[24px]"
        >
          <!-- header card -->
          <img
            class="rounded-[16px] border p-2 md:w-full md:h-[170px]"
            :src="item.image"
            alt=""
          />
          <!-- body card -->
          <div class="flex md:w-[160px] p-[16px]">
            <p class="f14-700 truncate">{{ item.title }}</p>
          </div>
          <!-- footer card  -->
          <nuxt-link
            class="text-[#E20054] w-full border-btn justify-center items-center flex gap-[8px] px-[16px] py-[12px] rounded-[16px]"
            :to="`/product/${item.id}`"
          >
            مشاهده جزییات
            <img class="mt-[5px]" src="@/assets/img/svg/left.svg" alt="" />
          </nuxt-link>
        </div>
      </div>
      <!-- show filter product -->
      <div class="flex w-full gap-[16px] flex-wrap">
        <div
          v-for="(item, i) in choiseSearch"
          :key="i"
          class="md:w-[31%] bg-white shadow-product p-[8px] rounded-[24px]"
        >
          <!-- header card -->
          <img
            class="rounded-[16px] border p-2 w-full md:h-[170px]"
            :src="item.image"
            alt=""
          />
          <!-- body card -->
          <div class="flex md:w-[160px] p-[16px]">
            <p class="f14-700 truncate">{{ item.title }}</p>
          </div>
          <!-- footer card  -->
          <nuxt-link
            class="text-[#E20054] w-full border-btn justify-center items-center flex gap-[8px] px-[16px] py-[12px] rounded-[16px]"
            :to="`/product/${item.id}`"
          >
            مشاهده جزییات
            <img class="mt-[5px]" src="@/assets/img/svg/left.svg" alt="" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// get store
import { useGetAllProduct } from "@/stores/AllProducts";

const product = useGetAllProduct();
// create variable
let textInput = ref("");
let category = ref([]);
let choiseSearch = ref([]);
let filterProduct = ref([]);
let showSearch = ref(false);
let showresult = ref("");
let hideClear = ref(true);
let minSort = ref([]);
let maxSort = ref([]);
let minRateSort = ref([]);
let maxRateSort = ref([]);
// send request and get category product
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

// show product
const showProducts = () => {
  product.getProducts();
};

const seachProduct = () => {
  //   filter product
  filterProduct = product.data.filter(
    (filter) => filter.title === textInput.value
  );
  //   add choice item in new array of object
  choiseSearch.value = filterProduct;
  showSearch = true;
  showresult = textInput.value;
  hideClear = false;
};

// reset search
const resetSearch = () => {
  console.log("click");
  hideClear = true;
  showSearch = true;
};

// function sort product a - b

const sortMinProduct = () => {
  minSort = product.data.sort((a, b) => a.rating.count - b.rating.count);
};

// function sort product  - b

const sortMaxProduct = () => {
  maxSort = product.data.sort((b, a) => a.rating.count - b.rating.count);
};

// function min rate product a - b

const sortMinRateProduct = () => {
  minRateSort = product.data.sort((a, b) => a.rating.rate - b.rating.rate);
};

// function sort max Rate product  - b

const sortMaxRateProduct = () => {
  maxRateSort = product.data.sort((b, a) => a.rating.rate - b.rating.rate);
};

// filter in category

const choiceCategory = () => {};

// call functions
showProducts();
getCategory();
</script>
<style lang=""></style>
