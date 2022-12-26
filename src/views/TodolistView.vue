<script setup>
import ListComponent from '@/components/ListComponent.vue';
import WhatTodoComponent from '@/components/WhatTodoComponent.vue';
import { useTodoData } from '@/stores/todoData';
import { storeToRefs } from 'pinia';

const store = useTodoData();

const { navOpen } = storeToRefs(store);
</script>
<template>
  <section
    class="d-flex justify-content-center align-items-center position-relative"
  >
    <ListComponent
      class="list-component"
      :class="{ actived: navOpen }"
    ></ListComponent>
    <WhatTodoComponent
      class="whattodo-component"
      :class="{ actived: navOpen }"
    ></WhatTodoComponent>
  </section>
</template>
<style lang='scss' scoped>
.list-component {
  width: 250px;
  height: 100vh;
  background-color: #a1ffc7;
  @include md {
    width: 320px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    transform: translate(-100%);
    transition: 0.2s;
    &.actived {
      transform: translate(0%);
      transition: 0.2s;
    }
  }
}
.whattodo-component {
  width: calc(100vw - 250px);
  height: 100vh;
  position: relative;
  transition: 0.5s;

  @include md{
    width: 100%;
    &:before{
    display: block;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    content: '';
    transform: translate(-200%,0);
    background-color: rgba(0, 0, 0, .6);
    background-size: cover;
    background-position: center center;
    transition: .1s ease-in;
  }
  &.actived:before{
    transform: translate(0,0);
    transition: .2s;

  }
  }

}
</style>
