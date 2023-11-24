<template>
  <div class="flex flex-col gap-[24px]">
    <div
      class="flex shadow-product rounded-[24px] bg-white py-[32px] px-[24px]"
    >
      <img
        class="w-full rounded-[16px] md:h-[310px]"
        src="@/assets/img/png/header.png"
        alt=""
      />
    </div>
    <ProductSpecifications />
  </div>
</template>
<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
const route = useRoute();
const ParamLink = route.params;
// send request
const detailProduct = async () => {
  const details = await axios.get(
    `https://fakestoreapi.com/products/${ParamLink}`
  );
  console.log(details);
};

detailProduct();
</script>
<style lang=""></style>
