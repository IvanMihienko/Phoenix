<template>
    <main class="mx-auto w-full max-w-md p-6">
      <div
        class="mt-7 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
      >
        <div class="p-4 sm:p-7">
          <div class="text-center">
            <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
              Забыли пароль?
            </h1>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Помните пароль?
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
            <form>
              <div class="grid gap-y-4">
                <!-- Form Group -->
                <div>
                  <label for="email" class="mb-2 block text-sm dark:text-white"
                    >Email адрес</label
                  >
                  <div class="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      required
                      aria-describedby="email-error"
                    />
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex hidden items-center pr-3"
                    >
                      <svg
                        class="h-5 w-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path
                          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p class="mt-2 hidden text-xs text-red-600" id="email-error">
                    Пожалуйста, введите правильный адрес
                  </p>
                </div>
                <!-- End Form Group -->

                <button
                  type="submit"
                  class="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  Сбросить пароль
                </button>
              </div>
            </form>
            <!-- End Form -->
          </div>
        </div>
      </div>
    </main>
</template>
<script></script>