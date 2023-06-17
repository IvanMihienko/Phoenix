<script>
import NavSideBar from "./NavSideBar.vue";
import CategoriesCards from "./CategoriesCards.vue";

export default {
  name: "AppComponents",
  components: {
    CategoriesCards,
    NavSideBar,
  },
};
</script>
<template>
  <NavSideBar />

  <!-- Content -->
  <div class="w-full px-4 pt-10 sm:px-6 md:px-8 lg:pl-72">
    <!-- Page Heading -->
    <header>
      <h1
        class="block text-2xl font-bold text-gray-800 dark:text-white sm:text-3xl"
      >
        Добро пожаловать,
      </h1>
      <p class="mt-2 text-lg text-gray-800 dark:text-gray-400">
        Ваша статистика и энергия находятся ниже
      </p>
    </header>
    <!-- End Page Heading -->
    <CategoriesCards />
  </div>
  <!-- End Content -->
</template>
