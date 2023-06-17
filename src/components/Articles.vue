<template>
  <NavSideBar />

  <!-- Card Blog -->
  <div class="w-full px-4 pt-10 sm:px-6 md:px-8 lg:pl-72">
    <!-- Grid -->
    <div class="grid gap-10 lg:grid-cols-2 lg:gap-y-16">
      <ArticleCards
         v-for="article in articles"
    v-if="articles.length"
    :key="article.id"
    :article="article"
      />
      <div v-else>
    Загрузка статей...
</div>
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Card Blog -->
</template>
<script>
import { ref } from "vue";
import axios from "axios";
import NavSideBar from "./NavSideBar.vue";
import ArticleCards from "./ArticleCards.vue";
import { useArticleStore } from "/store";

export default {
  name: "Articles",
  components: {
    NavSideBar,
    ArticleCards,
  },
  setup() {
    const articleStore = useArticleStore();
    const isLoading = ref(true);

    axios.get("https://api.pro-phoenix.ru/api/articles")
      .then(response => {
        articleStore.articles = response.data;
        isLoading.value = false;
      })
      .catch(error => {
        console.error(error);
        isLoading.value = false;
      });

    return {
      isLoading,
      articles: articleStore.articles
    };
  }
};
</script>
