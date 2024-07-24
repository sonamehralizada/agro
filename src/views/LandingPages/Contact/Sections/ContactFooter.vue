<script setup></script>
<template>
  <footer class="footer py-5 footer_container">
    <div class="container z-index-1 position-relative">
        <div class="footer_items">
            <!-- <div class="col-lg-4 me-auto mb-lg-0 mb-4 text-lg-start text-center"> -->
              <div class="col-3">
                <RouterLink
                  :to="{ name: 'presentation' }"
                  rel="tooltip"
                  title="Designed and Coded by Creative Tim"
                  data-placement="bottom"
                >
                <span class="mb-2 img_container">
                  <img class="w-10" src="@/assets/img/logos/logo.png" alt="logo" />
                </span>
              </RouterLink>
              </div>

              <ul
                class="nav_items "
              >
                <li class="nav-item">
                  <RouterLink
                      :to="{ name: 'presentation' }"
                      class="nav-link text-dark opacity-8"
                      >
                    <span>Əsas Səhifə</span>
                  </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink
                      :to="{ name: 'about' }"
                      class="nav-link text-dark opacity-8"
                      >
                    <span> Haqqımızda</span>
                  </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink
                    :to="{ name: 'contactus' }"
                    class="nav-link text-dark opacity-8"
                    >
                    <span>Məhsullar</span>
                    </RouterLink>
                </li>
                <li class="nav-item">             
                  <RouterLink
                  :to="{ name: 'contactus' }"
                  class="nav-link text-dark opacity-8"
                  >
                  <span>Layihələr</span>
                  </RouterLink>
                </li>
              </ul>

          <div class="contact_section">
          <div class="text-dark mb-2">
            <div class="d-flex justify-content-end align-items-center">
              <i class="fas fa-phone text-sm"></i>
                <span class="text-sm opacity-8">+994 51 233 25 48</span>

              </div>
          </div>
          <div class="text-dark mb-4">
            <div class="d-flex justify-content-end align-items-center">
              <i class="fas fa-envelope text-sm"></i>
              <div class="pl-2">
                <span class="text-sm opacity-8"
                >office@kronosagro.az</span
                >
              </div>
            </div>
          </div>
          <div class="social_media_items">
            <a
            href="javascript:;"
            target="_blank"
            class="text-dark me-xl-4 me-4 opacity-5"
          >
            <span class="fab fa-dribbble"></span>
          </a>
          <a
            href="javascript:;"
            target="_blank"
            class="text-dark me-xl-4 me-4 opacity-5"
          >
            <span class="fab fa-twitter"></span>
          </a>
          <a
            href="javascript:;"
            target="_blank"
            class="text-dark me-xl-4 me-4 opacity-5"
          >
            <span class="fab fa-pinterest"></span>
          </a>
          <a href="javascript:;" target="_blank" class="text-dark opacity-5">
            <span class="fab fa-github"></span>
          </a>
          </div>
          
        </div>
              
        </div>

        <p class="text-sm text-dark opacity-8 mb-0 text-center">
           © Copyright 2024 / Müəllif hüquqları qorunur | Kronos Agro MMC
        </p>
      </div>
  </footer>
</template>
<style>
.footer_container{
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}
.footer_items{
  display: flex;
  justify-content: space-between;
  align-items: start;
}

.contact_section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end
}
.nav_items{

}
@media (max-width: 768px) {
  .footer_items {
    display: flex;
    flex-direction: column;
  justify-content: center;
  align-items: center;
  }
  .nav_items{
  justify-content: center;
  
}
.contact_section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
}
.img_container{
  display: flex;
  justify-content: center;
  align-items: center
}
}
</style>
