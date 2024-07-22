<script setup>
// example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";

// sections
import Footer from "./Sections/ContactFooter.vue";
import Profile from "./Sections/ContactProfile.vue";
import Posts from "./Sections/ContactPosts.vue";
import Contact from "./Sections/ContactContact.vue";

// image
import image from "@/assets/img/landscape.jpg";
</script>
<template>
   <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar
          :sticky="true"
        />
      </div>
    </div>
  </div>
  <Header>
    <div
      class="page-header min-height-200"
      :style="{ backgroundImage: `url(${image})` }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-8"></span>
    </div>
  </Header>
  <!-- <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
    <Profile />
    <Posts />
  </div> -->
  <Contact />
  <Footer />
</template>
