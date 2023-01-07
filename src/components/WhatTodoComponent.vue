<script setup>
import '@vuepic/vue-datepicker/dist/main.css';
import { useTodoData } from '@/stores/todoData';
import {
  computed, onMounted,
} from 'vue';
import { storeToRefs } from 'pinia';

const store = useTodoData();
const { changeNav, removeItem, changeList } = store;
const { nowList } = storeToRefs(store);
const textLength = computed(() => nowList.value.content.length);

// 上傳圖片
const imgUpload = (e) => {
  const fileData = e.target.files[0];
  // 判斷上傳內容是否為圖片格式
  if (fileData.type.indexOf('image') === -1) {
    alert('格式錯誤，請重新上傳jpg、jpge、png、gif、svg等圖形檔案');
    return;
  }
  // 將圖片投射到img標籤上
  const reader = new FileReader();
  reader.readAsDataURL(fileData);
  reader.addEventListener('load', (event) => {
    nowList.value.img = event.target.result;
  });
};

// 計算dataTo的時間為dataFrom
const dateAdd = computed(() => {
  // 必須將字串改為YYYY-MM-DD的格式，必須要補0
  const date = new Date(nowList.value.dateFrom);
  let day = date.getDate() + 1;
  day = day < 10 ? `0${day}` : day;
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
});

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
        class="btn mb-24 btn-sm d-block d-md-none p-0 border-0 btn-hover"
        @click="changeNav"
      >
        <div class="hamburger-box">
          <div class="hamburger"></div>
          <div class="hamburger"></div>
          <div class="hamburger"></div>
        </div>
      </button>
      <button
        type="button"
        class="btn mb-24 trash-btn p-0 border-0 btn-hover "
        @click="removeItem"
      >
      <img class="trash-btn d-block" src="/trash-fill.svg" alt="">
        <!-- <i class="bi bi-trash-fill fs-20"></i> -->
      </button>
    </div>
    <div class="container-fluid p-0">
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
              class="form-control w-100 text-resize"
              placeholder="content"
              style="height: 150px"
              maxlength="200"
              v-model="nowList.content"
            ></textarea>
            <span class="textlenght">{{ textLength }}/200</span>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <label for="dateFrom" />
            <input
              type="date"
              name="dateFrom"
              class="w-100 text-center fs-18 fs-md-20 input-date"
              v-model="nowList.dateFrom"
              onkeydown="return false;"
              ref="fromDateRef"
              @click="$refs.fromDateRef.showPicker()"
            />

            <span class="px-1 mx-18">~</span>
            <input
              type="date"
              class="w-100 text-center fs-20 right-date input-date"
              :min="dateAdd"
              v-model="nowList.dateTo"
              onkeydown="return false;"
              ref="toDateRef"
              @click="$refs.toDateRef.showPicker()"
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
          <label class="w-100 btn btn-lg btn-btn-green add-btn">
            Upload Image
            <input
              type="file"
              style="display: none"
              @change="imgUpload"
              multiple
              accept="image/*"
            />
          </label>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang='scss' scoped>
.whattodo-box {
  padding: 24px 17px 24px 25px;
  width: 100%;
  @include md{
    padding: 22px 15px 24px 20px;
  }
}

.text-resize{
  resize:none;
}
.btn-hover:hover {
  background: #81f8b1;
  transition: 0.2s;
}
.textlenght {
  position: absolute;
  font-size: 14px;
  line-height: 15px;
  bottom: 10px;
  right: 17px;

}
.img-box {
  width: 100%;
  height: 150px;
  background-color: #ebebeb;
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
.input-date {
  background-color: #ebebeb;
  border: 0;
  border-radius: 10px;
  line-height: 1.5rem;
  transition: 0.2s;
  padding: 13px 0px;
  @include md{
    padding: 13px 0px;
  }
  &:hover {
    background: #81f8b1;
    transition: 0.2s;
  }
  &:focus-visible {
    border: 0;
    outline: none;
  }
}
.input-date::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}
// .dp__theme_light {
//   --dp-background-color: #EBEBEB;
// }

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

.trash-btn{
  width: 20px;
  height: 20px;
}
.hamburger-box {
  width: 24px;
  height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .hamburger {
    width: 24px;
    height: 5px;
    background-color: #000;
  }
}
</style>
