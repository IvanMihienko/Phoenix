<template>
  <main class="mx-auto w-full max-w-md p-6">
    <div
      class="mt-7 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
    >
      <div class="p-4 sm:p-7">
        <div class="text-center">
          <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
            Регистрация
          </h1>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Уже есть аккаунт?
            <router-link
              class="font-medium text-blue-600 decoration-2 hover:underline"
              to="/login"
            >
              Вход
            </router-link>
          </p>
        </div>

        <div class="mt-5">
          <!-- Form -->
          <form @submit.prevent="register">
            <div class="grid gap-y-4">
              <!-- ... -->
              <div>
                <label for="email" class="mb-2 block text-sm dark:text-white"
                  >Email адрес</label
                >
                <div class="relative">
                  <input
                    v-model="credentials.email"
                    type="email"
                    id="email"
                    name="email"
                    class="block w-full rounded-md border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                    required
                    aria-describedby="email-error"
                  />
                  <!-- ... -->
                </div>
              </div>
              <div>
                <label for="email" class="mb-2 block text-sm dark:text-white"
                  >Никнейм</label
                >
                <div class="relative">
                  <input
                    v-model="credentials.username"
                    type="text"
                    id="username"
                    name="username"
                    class="block w-full rounded-md border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                    required
                    aria-describedby="username-error"
                  />
                  <!-- ... -->
                </div>
              </div>
              <!-- ... -->
              <div>
                <label for="telegram" class="mb-2 block text-sm dark:text-white"
                  >Telegram</label
                >
                <div class="relative">
                  <input
                    v-model="credentials.telegram"
                    type="text"
                    id="telegram"
                    name="telegram"
                    class="block w-full rounded-md border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                    required
                    aria-describedby="telegram-error"
                  />
                  <!-- ... -->
                </div>
              </div>
              <!-- ... -->
              <div>
                <label for="password" class="mb-2 block text-sm dark:text-white"
                  >Пароль</label
                >
                <div class="relative">
                  <input
                    v-model="credentials.password"
                    type="password"
                    id="password"
                    name="password"
                    class="block w-full rounded-md border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                    required
                    aria-describedby="password-error"
                  />
                  <!-- ... -->
                </div>
              </div>
              <!-- ... -->
              <div>
                <label
                  for="confirm-password"
                  class="mb-2 block text-sm dark:text-white"
                  >Подтвердите пароль</label
                >
                <div class="relative">
                  <input
                    v-model="credentials.confirmPassword"
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    class="block w-full rounded-md border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                    required
                    aria-describedby="confirm-password-error"
                  />
                  <!-- ... -->
                </div>
              </div>
              <!-- ... -->
              <div class="hs-dropdown relative inline-flex">
                <button
                  id="hs-dropdown-basic"
                  type="button"
                  class="hs-dropdown-toggle inline-flex w-full items-center justify-center gap-2 rounded-md border bg-white px-4 py-3 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-800 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
                >
                  <span v-text="genderMap[gender] || 'Пол'"></span>
                  <svg
                    class="h-2.5 w-2.5 text-gray-600 hs-dropdown-open:rotate-180"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>

                <div
                  class="hs-dropdown-menu duration z-10 mt-2 hidden w-56 min-w-[15rem] rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:divide-gray-700 dark:border dark:border-gray-700 dark:bg-gray-800"
                  aria-labelledby="hs-dropdown-basic"
                >
                  <a
                    @click.prevent="setGender('male')"
                    class="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    Мужчина
                  </a>
                  <a
                    @click.prevent="setGender('female')"
                    class="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    Женщина
                  </a>
                </div>
              </div>
              <button
                type="submit"
                class="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Зарегистрироваться
              </button>
            </div>
          </form>
          <!-- End Form -->
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { ref } from "vue";
import { useAuthStore } from "/store";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const auth = useAuthStore();
    const credentials = ref({
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      telegram: "",
      gender: "", // Add gender here
    });
    const gender = ref(""); // Add this line to declare 'gender'
    const genderMap = ref({
      // Add this line to declare 'genderMap'
      male: "Мужчина",
      female: "Женщина",
    });

    const setGender = (value) => {
      // Modify this function
      credentials.value.gender = value;
      gender.value = value; // And this line to set 'gender'
    };

    const register = async () => {
      if (credentials.value.password !== credentials.value.confirmPassword) {
        console.log("Пароли не совпадают.");
        return;
      }

      try {
        await auth.register(credentials.value);
        router.push({ name: "Profile" });
      } catch (error) {
        console.log("Ошибка регистрации:", error);
      }
    };

    return {
      credentials,
      register,
      setGender,
      gender, // Return 'gender' here
      genderMap, // Return 'genderMap' here
    };
  },
};
</script>
