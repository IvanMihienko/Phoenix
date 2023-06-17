<template>
  <!-- Sidebar Toggle -->
  <div
    class="sticky inset-x-0 top-0 z-20 border-y bg-white px-4 dark:border-gray-700 dark:bg-gray-800 sm:px-6 md:px-8 lg:hidden"
  >
    <div class="flex items-center py-4">
      <!-- Navigation Toggle -->
      <button
        type="button"
        class="text-gray-500 hover:text-gray-600"
        data-hs-overlay="#application-sidebar"
        aria-controls="application-sidebar"
        aria-label="Toggle navigation"
      >
        <span class="sr-only">Toggle Navigation</span>
        <svg
          class="h-5 w-5"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      <!-- End Navigation Toggle -->
    </div>
  </div>
  <!-- End Sidebar Toggle -->

  <!-- Sidebar -->
  <div
    id="application-sidebar"
    class="hs-overlay scrollbar-y dark:scrollbar-y fixed bottom-0 left-0 top-0 z-[60] hidden w-64 -translate-x-full transform overflow-y-auto border-r border-gray-200 bg-white pb-10 pt-7 transition-all duration-300 hs-overlay-open:translate-x-0 dark:border-gray-700 dark:bg-gray-800 lg:bottom-0 lg:right-auto lg:block lg:translate-x-0"
  >
    <nav
      class="hs-accordion-group flex w-full flex-col flex-wrap p-6"
      data-hs-accordion-always-open
    >
      <div class="mb-4">
        <div class="mb-4 flex flex-row items-center gap-2">
          <img
            class="h-10 w-10 rounded-lg"
            :src="user.avatar"
            alt="user avatar"
          />

          <div class="sm:flex sm:flex-col">
            <div>
              <h3
                v-if="user"
                class="font-medium text-gray-800 dark:text-gray-200"
              >
                {{ user.username }}
              </h3>
              <p v-if="user" class="mt-1 text-xs uppercase text-gray-500">
                {{ user.telegram }}
              </p>
            </div>
          </div>
        </div>
        <button
          @click="logout"
          class="flex w-full items-center gap-x-3.5 rounded-md border-2 border-slate-700 px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.5 9.56757V14.4324C3.5 16.7258 3.5 17.8724 4.22161 18.5849C4.87719 19.2321 5.89578 19.2913 7.81846 19.2968C7.71686 18.6224 7.69563 17.8168 7.69029 16.8689C7.68802 16.4659 8.01709 16.1374 8.42529 16.1351C8.83348 16.1329 9.16624 16.4578 9.16851 16.8608C9.17451 17.9247 9.20249 18.6789 9.30898 19.2512C9.41158 19.8027 9.57634 20.1219 9.81626 20.3588C10.089 20.6281 10.4719 20.8037 11.1951 20.8996C11.9395 20.9985 12.9261 21 14.3407 21H15.3262C16.7407 21 17.7273 20.9985 18.4717 20.8996C19.1949 20.8037 19.5778 20.6281 19.8505 20.3588C20.1233 20.0895 20.3011 19.7114 20.3983 18.9975C20.4984 18.2626 20.5 17.2885 20.5 15.8919V8.10811C20.5 6.71149 20.4984 5.73743 20.3983 5.0025C20.3011 4.28855 20.1233 3.91048 19.8505 3.6412C19.5778 3.37192 19.1949 3.19635 18.4717 3.10036C17.7273 3.00155 16.7407 3 15.3262 3H14.3407C12.9261 3 11.9395 3.00155 11.1951 3.10036C10.4719 3.19635 10.089 3.37192 9.81626 3.6412C9.57634 3.87807 9.41158 4.19728 9.30898 4.74877C9.20249 5.32112 9.17451 6.07525 9.16851 7.1392C9.16624 7.54221 8.83348 7.8671 8.42529 7.86485C8.01709 7.86261 7.68802 7.53409 7.69029 7.13107C7.69563 6.18322 7.71686 5.37758 7.81846 4.70325C5.89578 4.70867 4.87719 4.76789 4.22161 5.41515C3.5 6.12759 3.5 7.27425 3.5 9.56757ZM5.93385 12.516C5.6452 12.231 5.6452 11.769 5.93385 11.484L7.90484 9.53806C8.19348 9.25308 8.66147 9.25308 8.95011 9.53806C9.23876 9.82304 9.23876 10.2851 8.95011 10.5701L8.24088 11.2703L15.3259 11.2703C15.7341 11.2703 16.0651 11.597 16.0651 12C16.0651 12.403 15.7341 12.7297 15.3259 12.7297L8.24088 12.7297L8.95011 13.4299C9.23876 13.7149 9.23876 14.177 8.95011 14.4619C8.66147 14.7469 8.19348 14.7469 7.90484 14.4619L5.93385 12.516Z"
              fill="white"
            />
          </svg>

          Выход
        </button>
      </div>
      <ul class="space-y-1.5">
        <li>
          <MenuLink to="/profile">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z"
                fill="white"
              />
            </svg>

            Профиль
          </MenuLink>
        </li>

        <li>
          <MenuLink to="/articles"
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 16.1436V4.9978C2 3.89963 2.8863 3.00752 3.9824 3.07489C4.95877 3.1349 6.11349 3.25351 7 3.48744C8.04921 3.76431 9.29611 4.35401 10.2823 4.87546C10.5893 5.03782 10.9158 5.15044 11.25 5.21394L11.25 20.3926C10.9471 20.3258 10.6515 20.218 10.3724 20.0692C9.37293 19.5365 8.08145 18.9187 7 18.6334C6.12329 18.402 4.98428 18.2835 4.01486 18.2228C2.90605 18.1535 2 17.2546 2 16.1436Z"
                fill="white"
              />
              <path
                d="M12.75 20.3926C13.0529 20.3258 13.3485 20.218 13.6276 20.0692C14.6271 19.5365 15.9185 18.9187 17 18.6334C17.8767 18.402 19.0157 18.2835 19.9851 18.2228C21.094 18.1535 22 17.2546 22 16.1436V4.93319C22 3.86075 21.1538 2.98041 20.082 3.01775C18.9534 3.05706 17.5469 3.17403 16.5 3.48744C15.5924 3.75916 14.5353 4.30418 13.6738 4.80275C13.3824 4.97145 13.0708 5.09535 12.75 5.17391L12.75 20.3926Z"
                fill="white"
              />
            </svg>

            Задания</MenuLink
          >
        </li>
      </ul>
    </nav>
  </div>
  <!-- End Sidebar -->
</template>

<script>
import { useAuthStore } from "/store.js";
import { useRoute, useRouter } from "vue-router";
import MenuLink from "./MenuLink.vue";

const route = useRoute();

export default {
  setup() {
    const auth = useAuthStore();
    const route = useRoute();
    const router = useRouter(); // define router here
    const logout = () => {
      console.log("Logout button clicked");
      auth.logout();
      router.push("/login");
    };
    return {
      user: auth.user,
      logout,
    };
  },
  name: "MenuComponents",
  components: {
    MenuLink,
  },
};
</script>
