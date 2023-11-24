<template>
  <div class="w-full">
    <div class="p-4">
      <p class="text-[#6783A0] text-lg">
        {{ currentRoute }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const currentRoute = computed(() => route.path);
</script>
<style lang=""></style>
