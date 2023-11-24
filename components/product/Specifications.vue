<template>
  <div class="flex flex-col w-full gap-[16px] bg-white rounded-[24px] p-[24px]">
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
      <div class="flex flex-col md:w-[79%] gap-[12px] showdescription">
        <div
          v-for="(tech, i) in Specific"
          class="flex bg-[#f5f7fa] custome-radius p-[13px] inviteTech"
          :key="i"
        >
          <p class="text-color">{{ tech }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const Technical = ref(["قیمت", "توضیحات", "دسته بندی", "رتبه", "تعداد"]);
const Specific = ref([
  "۲۸,۰۰۰,۰۰۰ تومان",
  "سنسورهای تشخیص موانع: دارای سنسورهای اولتراسونیک برای تشخیص موانع در مسیر درتوقف خودکار: در صورت تشخیص موانع، درب به صورت خودکار توقف و باز نمی‌شودکلید اضطراری: دارای کلید اضطراری برای قطع فوری تغذیه و توقف درب",
  "کشویی",
  2,
  5,
]);
</script>
<style lang=""></style>
