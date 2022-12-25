<script setup>
import ListComponent from '@/components/ListComponent.vue';
import WhatTodoComponent from '@/components/WhatTodoComponent.vue';
</script>
<template>
  <section class="d-flex justify-content-center align-items-center">
    <ListComponent class="list-component"></ListComponent>
    <WhatTodoComponent class="whattodo-component"></WhatTodoComponent>
  </section>

</template>
<style lang='scss' scoped>
.list-component{
  width: 250px;
  height: 100vh;
  background-color: #a1ffc7;
}
.whattodo-component{
  width: 100%;
  height: 100vh;
}
</style>
