<template>
  <div class="flex shadow-product bg-white py-[32px] px-[24px]">
    <!-- header  -->
    <img :src="showData.image" alt="" />
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
};

detailProduct();
</script>
<style lang=""></style>
