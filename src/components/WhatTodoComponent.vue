<script setup>
import { useTodoData } from '@/stores/todoData';

const store = useTodoData();
const { changeNav } = store;
</script>
<template>
  <section class="whattodo-box">
    <div class="d-flex justify-content-between align-items-center">
      <button type="button" class="btn mb-24 btn-sm" @click="changeNav">
        <i class="bi bi-list fs-20"></i>
      </button>
      <button type="button" class="btn mb-24 btn-sm">
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
          />
        </div>
      </div>
      <div class="row gx-lg-24">
        <div class="col-md-7">
          <div class="position-relative mb-24">
            <textarea
              class="form-control pb-64"
              placeholder="content"
              style="height: 150px"
              maxlength="200"
            ></textarea>
            <span class="textlenght">1/200</span>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <input type="date" class="form-control text-center fs-20" />
            <span class="px-32"> ~ </span>
            <input type="date" class="form-control text-center fs-20" />
          </div>
        </div>
        <div class="col-md-5">
          <div class="img-box">
            <img class="todo-img rounded-2 mb-24" src="/sausage.png" alt="" />
            <label class="w-100 btn btn-lg btn-btn-green">
                Upload Image
              <input type="file" style="display: none"/>
            </label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang='scss' scoped>
.whattodo-box {
  padding: 23px 17px 23px 25px;
}
.textlenght {
  position: absolute;
  font-size: 14px;
  line-height: 15px;
  bottom: 17px;
  right: 17px;
}
.img-box {
  width: 100%;
  height: 150px;
}
.todo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}
</style>
