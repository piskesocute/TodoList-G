<script setup></script>
<template>
  <section class="whattodo-box">
    <div class="d-flex justify-content-end align-items-center">
      <button class="delete-btn btn mb-24">
        <i class="bi bi-trash-fill fs-20"></i>
      </button>
    </div>
    <input type="text" class="input-title" placeholder="new item title" />
    <div
      class="
        second-aria
        w-100
        d-flex
        justify-content-center
        align-items-start
        flex-wrap
        mt-24
      "
    >
      <div class="content-date">
        <div class="position-relative">
          <textarea
            class="w-100 pb-32"
            name=""
            id=""
            cols="30"
            rows="10"
            maxlength="200"
          >
          </textarea>
          <span class="textlenght">1/200</span>
        </div>
      </div>
      <div class="img-box">
        <input class="w-100" type="text" name="" id="" />
      </div>
    </div>
  </section>
</template>
<style lang='scss' scoped>
.whattodo-box {
  padding: 23px 17px 23px 25px;
}
.delete-btn {
}
input,
textarea {
  border: none;
  font-size: 20px;
  background-color: #ebebeb;
  color: #000;
  border-radius: 8px;
  padding: 12px 22px;
}
.input-title {
  border: none;
  font-weight: 400;
  width: 100%;
}

.content-date {
  width: 539px;
  margin-right: 24px;
}

.textlenght {
  position: absolute;
  font-size: 14px;
  line-height: 15px;
  bottom: 17px;
  right: 17px;
}

.img-box {
  width: calc(100% - 563px);
}
</style>
