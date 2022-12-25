import { defineStore } from 'pinia';
import { ref } from 'vue';

// eslint-disable-next-line import/prefer-default-export
export const useTodoData = defineStore('todoData', () => {
// 控制nav開關
  const navOpen = ref(false);
  const changeNav = () => {
    navOpen.value = !navOpen.value;
  };
  const nowList = ref({
    title: '',
    content: '',
    date: '',
    img: '',
  });
  const nowListIndex = ref(0);

  const listData = ref([{
    title: '',
    content: '',
    date: '',
    img: '',
  },
  ]);

  const changeList = (index = 0) => {
    nowListIndex.value = index;
    nowList.value = listData.value[index];
  };

  const addItem = () => {
    listData.value.push({
      title: '',
      content: '',
      date: '',
      img: '',
    });
    changeList(nowListIndex.value + 1);
  };

  const removeItem = () => {
    listData.value.splice(nowListIndex.value, 1);
    if (listData.value.length <= 0) addItem();
    changeList(nowListIndex.value - 1);
  };

  return {
    navOpen,
    changeNav,
    nowList,
    listData,
    addItem,
    nowListIndex,
    removeItem,
    changeList,
  };
});
