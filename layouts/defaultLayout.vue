<template>
  <div class="w-full flex flex-col gap-[24px]">
    <div class="flex w-full bg-white py-[40px] header">
      <!-- header layout -->
      <LayoutHeader />
    </div>
    <!-- show page data -->
    <slot />
    <!-- layout footer -->
    <div class="flex w-full bg-white">
      <LayoutFooter />
    </div>
  </div>
</template>
<script setup></script>
<style>
.header {
  border-radius: 0px 0px 16px 16px;
}
</style>
