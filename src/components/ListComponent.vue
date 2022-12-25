<script setup>
import { useTodoData } from '@/stores/todoData';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const store = useTodoData();
const { changeNav, addItem, changeList } = store;
const { listData, nowListIndex } = storeToRefs(store);
onMounted(() => {
  changeList(0);
});
</script>
<template>
  <section class="list-box">
    <ul class="list-unstyled d-flex flex-column pt-24">
      <li class="d-flex justify-content-between align-items-center">
        <h1 class="fs-20 fw-bold">Demo Todo List</h1>
        <button
          type="button"
          class="btn btn-sm d-block d-md-none me-3"
          @click="changeNav"
        >
          <i class="bi bi-x-lg fs-20"></i>
        </button>
      </li>
      <li
        v-for="(item, index) in listData"
        :key="index + 103021"
        class="list-item bg-hover-green fs-20 lh-base"
        :class="{ active: index === nowListIndex }"
      >
        <a
          class="text-black text-decoration-none"
          href=""
          @click.prevent="changeList(index)"
        >
          <p class="m-0 p-1" v-if="item.title === ''">
            {{ index + 1 }}.item title
          </p>
          <p class="m-0 p-1" v-else>{{ index + 1 }} .{{ item.title }}</p>
        </a>
      </li>
    </ul>
    <div class="d-flex justify-content-center align-items-center">
      <button
        type="button"
        class="add-btn"
        @click="addItem"
        :disabled="listData.length >= 10"
      >
        Add item
      </button>
    </div>
  </section>
</template>
<style lang='scss' scoped>
.list-box {
  width: 100%;
  height: 100%;
  h1 {
    margin-top: 12px;
    margin-left: 21px;
    margin-bottom: 9px;
  }
}
.list-item {
  margin-bottom: 8px;
  padding-top: 4px;
  padding-left: 13px;
  padding-right: 31px;
  padding-bottom: 3px;
  font-size: 20px;
  font-weight: 400;
  position: relative;
  overflow: hidden;
  transition: 0.2s;
  &.active:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 27px 31px 27px 0px;
    border-color: transparent rgb(255, 255, 255) transparent transparent;
    position: absolute;
    right: -8px;
    top: 50%;
    transform: translate(0%, -50%);
    transition: 0.2s;
  }
}
.add-btn {
  border: none;
  border-radius: 10px;
  background-color: #e7ffe9;
  padding: 9px 41px 9px 36px;
  font-size: 20px;
  font-weight: 400;
  transition: 0.2s;
  &:hover {
    background: #81f8b1;
    transition: 0.2s;
  }
  &:disabled {
    &:hover {
      background: #e7ffe9;
    }
  }
}
</style>
