import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "/store";
import LoginPage from "/src/components/LoginPage.vue";
import UserProfile from "/src/components/UserProfile.vue";
import RegPage from "/src/components/Reg.vue";
import RecoverPassword from "/src/components/RecoverPassword.vue";
import ArticlePage from "/src/components/ArticlePage.vue";
import Articles from "/src/components/Articles.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: LoginPage,
    name: "Login",
  },
  {
    path: "/profile",
    component: UserProfile,
    name: "Profile",
    meta: { requiresAuth: true },
  },
  {
    path: "/register",
    component: RegPage,
    name: "Register",
  },
  {
    path: "/recover_password",
    component: RecoverPassword,
    name: "RecoverPassword",
  },
  {
    path: "/article/:id",
    component: ArticlePage,
    name: "Article",
    meta: { requiresAuth: true },
  },
  {
    path: "/articles",
    component: Articles,
    name: "Articles",
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // Получаем элемент оверлея
  const overlayElement = document.querySelector(
    "[data-hs-overlay-backdrop-template]"
  );

  // Убеждаемся, что элемент оверлея существует
  if (overlayElement) {
    // Добавляем класс 'hidden', чтобы скрыть оверлей
    overlayElement.remove();
  }

  // Переходим на следующий маршрут
  next();
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();

  if (to.meta.requiresAuth && !auth.token) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
