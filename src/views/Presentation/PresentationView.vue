<script setup>
import { onMounted, onUnmounted } from "vue";
import { computed } from 'vue';

import Typed from "typed.js";
//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import ContactUsFooter from "../LandingPages/Contact/Sections/ContactFooter.vue";
import CenteredBlogCard from "../..//examples/cards/blogCards/CenteredBlogCard.vue";
import AboutUs from "../LandingPages/AboutUs/AboutUs.vue";


import icon1 from '@/assets/img/logos/icon1.png';
import icon2 from '@/assets/img/logos/icon2.png';
import icon3 from '@/assets/img/logos/icon3.png';
import icon4 from '@/assets/img/logos/icon4.png';

const data =[
  {id:1,title:'İntensiv bağçılıq sistemi',img:icon1},
  {id:2,title:'Ekoloji təmiz məhsul',img:icon2},
  {id:3,title:'Müasir avadanlıqlar',img:icon3},
  {id:4,title:'Qabaqcıl texnoloqiyalar',img:icon4},
]
const titles = computed(() => data.map(item => item.title));


import Header from "../../examples/Header.vue";
//images
import vueMkHeader from "@/assets/img/landscape.jpg";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  if (document.getElementById("typed")) {
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
  }
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div
      class="page-header min-vh-70"
      :style="`background-image: url(${vueMkHeader})`"
      loading="lazy"
    >
    <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1 class="text-white">
              “Kronos Agro” Məhdud Məsuliyyətli Cəmiyyəti <span class="text-white" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <h1>27 dekabr 2022-ci il tarixində yaradılmış, </h1>
              <h1>2023-cü ildə isə fəaliyyətə başlamışdır. </h1>
              <h1>tool</h1>
            </div>
            <p class="lead mb-4 text-white opacity-8">
              Firmanın əkin sahələri Yevlax rayonunun Aran qəsəbəsi əhatə edir. 
              Əsas fəaliyyət sahələri bağçılıq və əkinçilikdir. Məhsulların əsasən xarici bazarlara ixracı nəzərdə tutulur.

            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>
  <section class="mt-4 mb-2">
    <div class="container">
      <div class="row align-items-center">
        <div class="d-flex align-items-center justify-content-center flex-wrap">
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
  <section class="mb-4">
    <div class="container">
      <AboutUs/>
    </div>
  </section>
  
  
<ContactUsFooter />
</template>
