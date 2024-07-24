<script setup>
import { ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox'

import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";
import Footer from "../Contact/Sections/ContactFooter.vue";

import image from "@/assets/img/landscape.jpg";
import product1 from '@/assets/img/nektarin.jpg';
import product2 from '@/assets/img/plum2.jpg';
import product3 from '@/assets/img/peach3.jpg';

const products = [
  { id: 1, title: 'Nektarin', img: product1 ,season:'İyun ayının ortası'},
  { id: 2, title: 'Gavalı', img: product2 ,season:'İyul ayının ortası'},
  { id: 3, title: 'Şaftalı', img: product3 ,season:'İyun ayının ortası'},
];
// Mapping to lightbox format
const images = products.map(product => ({
  src: product.img,
  title: product.title
}));

const visible = ref(false);
const index = ref(0);

const showLightbox = (idx) => {
  index.value = idx;
  visible.value = true;
};

</script>

<template>
  <div class="h-100 w-100 project_container">
    <div class="container position-sticky z-index-sticky top-0">
            <div class="row">
            <div class="col-12">
                <DefaultNavbar
                :sticky="true"
                />
            </div>
            </div>
        </div>    <Header>
            <div
            class="page-header min-height-200"
            :style="{ backgroundImage: `url(${image})` }"
            loading="lazy"
            >
            <span class="mask bg-gradient-dark opacity-8"></span>
            </div>
        </Header>
    
    <div class="container mt-5 mb-8">
      <div class="row">
        <div v-for="(product, idx) in products" :key="product.id" @click="showLightbox(idx)" class="col-lg-4 col-md-4 col-sm-6 mb-4 cursor-pointer">
          <div class="product-card">
            <div class="product-image" :style="{ backgroundImage: `url(${product.img})` }"></div>
            
            <div class="product-info text-center p-3">
              <h5>{{ product.title }}</h5>
              <p>Məhsul dövrü:{{ product.season }}</p>
            </div>
          </div>
        </div>
        <VueEasyLightbox
                :visible="visible"
                :imgs="products.map(product => product.img)"
                :index="index"
                @hide="visible = false"
            />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.page-header {
  height: 200px;
  background-size: cover;
  background-position: center;
}

.product-card {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
}

.product-image {
  height: 200px;
  background-size: cover;
  background-position: center;
}

.project_container {
  min-height: 100vh;
}

.projects_footer {
  position: relative; 
}
.projects_footer {
position: absolute;
bottom: 0;
left: 0;
right: 0;
}

</style>
