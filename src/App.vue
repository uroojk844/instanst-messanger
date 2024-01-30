<script setup>
import { ref, watch } from "vue";
const num = ref("");

function openWhatapp() {
  const url = `http://wa.me/${num.value}`;
  window.open(url, "_blank");
}
</script>

<template>
  <section
    class="p-4 grid place-items-center text-center content-center min-h-screen gap-4"
  >
    <h1 class="font-bold text-green-500 text-5xl max-sm:text-4xl">
      Instant Whatsapp Messanger
    </h1>
    <p class="text-2xl max-sm:text-xl">
      Send messages without saving the number
    </p>
    <form
      @submit.prevent="openWhatapp"
      class="grid gap-6 w-full max-w-sm place-items-center"
    >
      <vue-tel-input
        v-model="num"
        :dropdownOptions="{
          showDialCodeInList: true,
          showFlags: true,
          showSearchBox: true,
        }"
        :inputOptions="{
          type: 'tel',
          placeholder: 'Enter a phone number',
          showDialCode: true,
          required: true,
          styleClasses:
            'bg-white py-3 px-6 rounded-full border border-green-500 outline-none w-full max-w-md',
        }"
        styleClasses="outline-none border-2 border-red-500 bg-white w-full py-1 px-3"
        showDialCode="true"
        placeholder="daklsj"
        mode="international"
        required
      />
      <button
        class="bg-green-500 text-white py-3 px-6 border border-green-500 rounded-full hover:bg-green-600"
      >
        Open Whatsapp
      </button>
    </form>
  </section>
</template>

<style>
body {
  background-image: url("https://static.wixstatic.com/media/be39c0_f0ac1137fe6949a8b013d2de336d89f7~mv2.jpg/v1/fill/w_640,h_656,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/be39c0_f0ac1137fe6949a8b013d2de336d89f7~mv2.jpg");
  background-size: 400px;
}

.vue-tel-input {
  border-radius: 32px;
  border: #22c55e solid 1px;
}

.vue-tel-input:has(.vti__input:focus) {
  box-shadow: none;
  border: #22c55e solid 1px;
}
</style>