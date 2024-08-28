<script setup>
import { onMounted, onUnmounted } from "vue";

import about from "@/assets/img/aboutbg1.jpg";


const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("about-us");
});

onUnmounted(() => {
  body.classList.remove("about-us");

});
</script>
<template>
  <section class="py-lg-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card box-shadow-xl overflow-hidden">
            <div class="row">
              <div
                class="col-lg-5 position-relative bg-cover px-0"
                :style="{ backgroundImage: `url(${about})` }"
                loading="lazy"
              >
              
              </div>
              <div class="col-lg-7">
                  <div class="card-header px-4 py-sm-5 py-3">
                    <h2>Biz Kimik?</h2>
                  </div>
                  <div class="card-body pt-1">
                    <div class="row">
                      <div class="col-md-12 pe-2 mb-3">
                        <h4>Haqqımızda</h4>
                        <p class="mb-4">
                            “Kronos Agro” Məhdud Məsuliyyətli Cəmiyyəti 27 dekabr 2022-ci il tarixində yaradılmış, 2023-cü ildə isə fəaliyyətə başlamışdır. Firmanın əkin sahələri Yevlax rayonunun Aran qəsəbəsi əhatə edir. 
                                Əsas fəaliyyət sahələri bağçılıq və əkinçilikdir. Məhsulların əsasən xarici bazarlara ixracı nəzərdə tutulur. 
                        </p>
                      </div>
                      <div class="col-md-12 pe-2 mb-3">
                        <h4>Əkin sahələri</h4>
                        <p class="mb-4">
                            Kronos Agro MMC-nin ümumi bağçılıq sahəsi 40 hektar ərazini əhatə edir. Bağın 35 hektarında müxtəlif növdə ağaclar əkilmişdir. Qalan 5 hektarı isə infrastruktur sahəsi və yollar təşkil edir. Əkin sahəsinin 10 hektarını nektarin və 25 hektarını şaftalı, ağacları təşkil edir.  
                        </p>
                      </div>
                     
                    </div>
            
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
