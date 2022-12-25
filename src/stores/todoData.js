import { defineStore } from 'pinia';
import { ref } from 'vue';

// eslint-disable-next-line import/prefer-default-export
export const useTodoData = defineStore('todoData', () => {
  const navOpen = ref(false);
  const changeNav = () => {
    navOpen.value = !navOpen.value;
  };
  return { navOpen, changeNav };
});
