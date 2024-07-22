<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="card_custom">
    <div >
        <img :src="image" :alt="title" class="img-fluid border-radius-lg mb-2" />
    </div>
    <div>
      <h5 class="font-weight-bold">
        <a href="javascript:;">{{ title }}</a>
      </h5>
    </div>
  </div>
</template>
<style>
.card_custom{
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 20px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 255px;
}

</style>
