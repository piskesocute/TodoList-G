<script setup>
import Datepicker from 'vue3-datepicker';
import { useTodoData } from '@/stores/todoData';
import { computed, onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const store = useTodoData();
const { changeNav, removeItem, changeList } = store;
const { nowList } = storeToRefs(store);
const textLength = computed(() => nowList.value.content.length);

const imgUpload = (e) => {
  const fileData = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(fileData);
  reader.addEventListener('load', (event) => {
    nowList.value.img = event.target.result;
  });
};

onMounted(() => {
  changeList();
});
</script>
<template>
  <section class="whattodo-box">
    <div
      class="
        d-flex
        justify-content-between justify-content-md-end
        align-items-center
      "
    >
      <button
        type="button"
        class="btn mb-24 btn-sm d-block d-md-none"
        @click="changeNav"
      >
        <i class="bi bi-list fs-20"></i>
      </button>
      <button type="button" class="btn mb-24 btn-sm" @click="removeItem">
        <i class="bi bi-trash-fill fs-20"></i>
      </button>
    </div>
    <div class="container-fluid">
      <!-- title -->
      <div class="row mb-24">
        <div class="col-12">
          <input
            class="form-control form-control-lg"
            type="text"
            placeholder="new item title"
            v-model="nowList.title"
          />
        </div>
      </div>
      <div class="row gx-0 gx-lg-24 gy-24 gy-lg-0">
        <div class="col-12 col-lg-7">
          <div class="position-relative mb-24">
            <textarea
              class="form-control pb-64"
              placeholder="content"
              style="height: 150px"
              maxlength="200"
              v-model="nowList.content"
            ></textarea>
            <span class="textlenght">{{ textLength }}/200</span>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <Datepicker
              class="form-control text-center fs-20"
              v-model="nowList.dateFrom"
            />
            <span class="px-32"> ~ </span>
            <Datepicker
              class="form-control text-center fs-20"
              v-model="nowList.dateTo"
              :lower-limit="nowList.dateFrom"
            />
          </div>
        </div>
        <div class="col-12 col-lg-5">
          <div
            class="img-box rounded-2 mb-24"
            :class="{ noimg: nowList.img === '' }"
          >
            <img
              v-if="nowList.img !== ''"
              class="todo-img rounded-2"
              :src="nowList.img"
              alt=""
            />
          </div>
          <label class="w-100 btn btn-lg btn-btn-green">
            Upload Image
            <input type="file" style="display: none" @change="imgUpload" />
          </label>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang='scss' scoped>
.whattodo-box {
  padding: 23px 17px 23px 25px;
  width: 100%;
}
.textlenght {
  position: absolute;
  font-size: 14px;
  line-height: 15px;
  bottom: 10px;
  right: 30px;
}
.img-box {
  width: 100%;
  height: 150px;
  background-color: #e1e1e1;
  position: relative;
  &.noimg::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '請上傳圖片';
  }
}
.todo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}
</style>
