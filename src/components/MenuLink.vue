<template>
  <router-link
    v-bind="$attrs"
    :to="to"
    class="flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300"
    active-class="bg-gray-100 px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-900 dark:bg-gray-900 dark:text-white"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ["to"],
};
</script>
