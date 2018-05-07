export default {
  PAGE: (state, page) => {
    state.page = page;
  },
  MENU: (state) => {
    state.menu = !state.menu;
  },
  ANGLAIS: (state) => {
    state.anglais = true;
  },
  FRANCAIS: (state) => {
    state.anglais = false;
  },
  MENUCLOSE: (state) => {
    state.menu = false;
  },
  PAGES: (state, pages) => {
    state.pages = pages;
  },
  POSTS: (state, posts) => {
    state.posts = posts;
  },
  POST: (state, post) => {
    state.post = post;
  },
  CATEGORY: (state, category) => {
    state.category = category;
  },
  CATEGORIES: (state, categories) => {
    state.categories = categories;
  }
};
