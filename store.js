import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
  }),
  actions: {
    setUser(user) {
      localStorage.setItem("user", JSON.stringify(user));
      this.user = user;
    },
    setToken(token) {
      localStorage.setItem("token", token);
      this.token = token;
    },
    async login(credentials) {
      const response = await axios.post(
        "https://api.pro-phoenix.ru/api/auth/local",
        {
          identifier: credentials.email,
          password: credentials.password,
        }
      );

      if (response.status === 200) {
        this.setToken(response.data.jwt);
        this.setUser(response.data.user);
      }
    },
    async register(credentials) {
      const response = await axios.post(
        "https://api.pro-phoenix.ru/api/auth/local/register",
        {
          username: credentials.username,
          email: credentials.email,
          password: credentials.password,
          telegram: credentials.telegram,
          gender: credentials.gender,
        }
      );

      if (response.status === 200) {
        this.setToken(response.data.jwt);
        this.setUser(response.data.user);
      }
    },
    logout() {
      this.setToken(null);
      this.setUser(null);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});
export const useArticleStore = defineStore({
  id: "articles",
  state: () => ({
    articles: [],
  }),
  actions: {
    setArticles(articles) {
      this.articles = articles;
    },
  },
});
