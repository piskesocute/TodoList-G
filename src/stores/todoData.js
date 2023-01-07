import { defineStore } from 'pinia';
import { ref } from 'vue';

// eslint-disable-next-line import/prefer-default-export
export const useTodoData = defineStore('todoData', () => {
  // nav狀態
  const navOpen = ref(false);
  // 控制nav開關
  const changeNav = () => {
    navOpen.value = !navOpen.value;
  };

  // 目前停留選單內容
  const nowList = ref({
    title: '',
    content: '',
    dateFrom: '',
    dateTo: '',
    img: '',
  });

  // 目前停留選單序列
  const nowListIndex = ref(0);

  // 選單資料
  const listData = ref([{
    title: '',
    content: '',
    dateFrom: '',
    dateTo: '',
    img: '',
  },
  ]);

  // 變換目前停留選單
  const changeList = (index = 0) => {
    nowListIndex.value = index;
    nowList.value = listData.value[index];
  };
  // 新增list
  const addItem = () => {
    listData.value.push({
      title: '',
      content: '',
      dateFrom: '',
      dateTo: '',
      img: '',
    });
    // 新增後前往最新選單
    changeList(listData.value.length - 1);
  };

  // 刪除list
  const removeItem = () => {
    // 清單長度少於1則先增加再刪除第一項，再將nowListIndex導回0
    if (listData.value.length <= 1) {
      addItem();
      listData.value.splice(0, 1);
      changeList(0);
      return;
    }

    listData.value.splice(nowListIndex.value, 1);
    // 假如刪除完後nowListIndex小於1(在第0陣列)
    // 則用changeList()將nowListIndex導回0

    if (nowListIndex.value < 1) {
      changeList(0);
      return;
    }
    // 剩餘時候nowListIndex導回前一個
    changeList(nowListIndex.value - 1);
  };

  return {
    navOpen,
    changeNav,
    nowList,
    nowListIndex,
    listData,
    changeList,
    addItem,
    removeItem,
  };
});
