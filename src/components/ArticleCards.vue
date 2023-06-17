<template>
  <!-- Card -->
  <a class="group overflow-hidden rounded-xl" :href="article.link">
    <div class="sm:flex">
      <div
        class="relative h-44 w-full flex-shrink-0 overflow-hidden rounded-xl sm:w-56"
      >
        <img
          class="absolute left-0 top-0 h-full w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          :src="articles.imageUrl"
          :alt="articles.imageAlt"
        />
      </div>

      <div class="mt-4 grow px-4 sm:ml-6 sm:mt-0 sm:px-0">
        <h3
          class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white"
        >
          {{ articles.title }}
        </h3>
        <p class="mt-3 text-gray-600 dark:text-gray-400">
          {{ articles.description }}
        </p>
        <p
          class="mt-4 inline-flex items-center gap-x-1.5 font-medium text-blue-600 decoration-2 hover:underline"
        >
          Читать далее
          <svg
            class="h-2.5 w-2.5"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </p>
      </div>
    </div>
  </a>
  <!-- End Card -->
</template>

<script>
export default {
  props: ["articles"],
  setup(props) {
    const { article } = toRefs(props)

    return {
      article,
    };
  },
};
</script>

