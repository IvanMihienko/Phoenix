<template>
  <main class="mx-auto w-full max-w-md p-6">
    <div
      class="mt-7 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
    >
      <div class="p-4 sm:p-7">
        <div class="text-center">
          <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
            Войти
          </h1>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Нет аккаунта?
            <router-link
              class="font-medium text-blue-600 decoration-2 hover:underline"
              to="/register"
            >
              Регистрация
            </router-link>
          </p>
        </div>

        <div class="mt-5">
          <!-- Form -->
          <form @submit.prevent="login">
            <div class="grid gap-y-4">
              <!-- Form Group -->
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
                </div>
              </div>
              <!-- End Form Group -->

              <!-- Form Group -->
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
                </div>
              </div>
              <!-- End Form Group -->

              <button
                type="submit"
                class="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Войти
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
      password: "",
    });

    async function login() {
      try {
        await auth.login(credentials.value);

        // Сохранение токена в localStorage
        localStorage.setItem("token", auth.token);
        localStorage.setItem("user", JSON.stringify(auth.user));

        router.push({ name: "Profile" });
      } catch (error) {
        console.log("Ошибка аутентификации:", error);
      }
    }

    // Получение токена из localStorage при загрузке страницы
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token) {
      auth.setToken(token);
    }
    if (user) {
      auth.setUser(JSON.parse(user));
    }

    return {
      credentials,
      login,
    };
  },
};
</script>
