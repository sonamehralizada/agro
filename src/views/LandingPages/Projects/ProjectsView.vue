<script setup>
// example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";

// sections
import Footer from "../Contact/Sections/ContactFooter.vue";

// image
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
               <h2 class=" text-center mt-6">
                Burada tezliklə məlumat yerləşdiriləcək

               </h2>

    </div>
    <div class="projects_footer">
        <Footer />
    </div>


</template>
<style>


.projects_footer {
position: absolute;
bottom: 0;
left: 0;
right: 0;
}

</style>
