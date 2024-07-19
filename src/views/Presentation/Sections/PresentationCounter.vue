<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-3 position-relative">
              <DefaultCounterCard
                color="success"
                title="il təcrübə"
                :count="5"
                suffix="+"
                :duration="3000"
                divider="vertical"

              />
            </div>
            <div class="col-md-3 position-relative">
              <DefaultCounterCard
                color="success"
                title="hektar intensiv bağ sahəsi"
                :count="236"
                suffix="+"
                :duration="3000"
                divider="vertical"

              />
            </div>
            <div class="col-md-3 position-relative">
              <DefaultCounterCard
                color="success"
                title="ton tutumlu soyuducu anbar"
                :count="1500"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-3">
              <DefaultCounterCard
                color="success"
                title="hektar perspektiv bağ sahəsi"
                :count="64"
                :duration="3000"
              />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
