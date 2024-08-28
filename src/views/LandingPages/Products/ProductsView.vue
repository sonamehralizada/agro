<script setup>


import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";
import Footer from "../Contact/Sections/ContactFooter.vue";
import Products from "../Products/Products.vue";


import image from "@/assets/img/landscape.jpg";

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
    <Products/>

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
