<template>
  <div class="flex flex-col gap-[24px]">
    <div
      class="flex flex-col gap-[24px] shadow-product rounded-[24px] bg-white py-[32px] px-[24px]"
    >
      <div class="flex padding-title">
        <p class="f18-700 text-[#0A2A51]">{{ showDataProduct.title }}</p>
      </div>

      <img
        class="w-full rounded-[16px] border p-3 md:h-[310px]"
        :src="showDataProduct.image"
        alt=""
      />
    </div>
    <!-- Specifications  -->
    <div
      class="flex flex-col w-full gap-[16px] bg-white rounded-[24px] p-[24px]"
    >
      <h2 class="f20-700 text-color">مشخصات فنی</h2>
      <!-- Technical Specifications -->
      <div class="flex w-full justify-between">
        <div class="flex flex-col md:w-[19%] gap-[12px] showtech">
          <div
            v-for="(item, i) in Technical"
            class="flex bg-[#f5f7fa] custome-radius inviteTech p-[13px]"
            :key="i"
          >
            <p class="text-color">{{ item }}</p>
          </div>
        </div>
        <!-- show data  -->
        <ProductSpecifications
          :price="price"
          :description="description"
          :category="category"
          :count="count"
          :rate="rate"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
const route = useRoute();
const Technical = ref(["قیمت", "توضیحات", "دسته بندی", "رتبه", "تعداد"]);
const ParamLink = route.params.id;
let showDataProduct = ref([]);
let description = ref("");
let price = ref(0);
let category = ref("");
let count = ref(0);
let rate = ref(0);

// send request
const detailProduct = async () => {
  const details = await axios.get(
    `https://fakestoreapi.com/products/${ParamLink}`
  );
  showDataProduct = details.data;
  description.value = showDataProduct.description;
  price.value = showDataProduct.price;
  category.value = showDataProduct.category;
  count.value = showDataProduct.rating.count;
  rate.value = showDataProduct.rating.rate;
  console.log(showDataProduct);
};

detailProduct();
</script>
<style lang=""></style>
