<script setup>
import ListComponent from '@/components/ListComponent.vue';
import WhatTodoComponent from '@/components/WhatTodoComponent.vue';
import { useTodoData } from '@/stores/todoData';
import { storeToRefs } from 'pinia';

const store = useTodoData();
const { navOpen } = storeToRefs(store);

</script>
<template>
  <div class=" d-flex justify-content-end align-items-center">
  </div>
  <section class="d-flex justify-content-center align-items-center position-relative">
    <ListComponent class="list-component" :class="{actived:navOpen}"></ListComponent>
    <WhatTodoComponent class="whattodo-component"></WhatTodoComponent>
  </section>

</template>
<style lang='scss' scoped>
.list-component{
  width: 250px;
  height: 100vh;
  background-color: #a1ffc7;
  @include md{
    width: 320px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transform:translate(-100%) ;
    transition: .2s;
    &.actived{
      transform:translate(0%);
      transition: .2s;
    }
  }
}
.whattodo-component{
  width: 100%;
  height: 100vh;
}
</style>
