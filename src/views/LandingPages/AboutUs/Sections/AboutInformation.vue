<script setup>
import { computed } from 'vue';

// example components
import CenteredBlogCard from "../../../../examples/cards/blogCards/CenteredBlogCard.vue";
import icon1 from '@/assets/img/logos/icon1.png';
import icon2 from '@/assets/img/logos/icon2.png';
import icon3 from '@/assets/img/logos/icon3.png';
import icon4 from '@/assets/img/logos/icon4.png';

const data =[
  {id:1,title:'İntensiv bağçılıq sistemi',img:icon1},
  {id:2,title:'Ekoloji təmiz məhsul',img:icon2},
  {id:3,title:'Müasir avadanlıqlar',img:icon3},
  {id:4,title:'Qabaqcıl texnologiyalar',img:icon4},
]
const titles = computed(() => data.map(item => item.title));


</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row align-items-center">
        <div class="d-flex flex-wrap">
          <div v-for="item in data" :key="item.id" class="mb-4">
          <CenteredBlogCard
            :title="item.title"
            :image="item.img"
          />
        </div>
        </div>
      </div>
    </div>
  </section>
</template>
