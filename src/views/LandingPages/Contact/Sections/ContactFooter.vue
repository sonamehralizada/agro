<script setup>
</script>
<template>
  <footer class="footer py-5 footer_container">
    <div class="container z-index-1 position-relative">
      <div class="footer_items">
        <div class="col-3 img_container">
          <RouterLink
            :to="{ name: 'presentation' }"
            rel="tooltip"
            title="Designed and Coded by Creative Tim"
            data-placement="bottom"
            class="logo-link"
          >
            <img class="logo_style" src="@/assets/img/logos/logo.png" alt="logo" />
          </RouterLink>
        </div>
        <ul class="nav_items">
          <li class="nav-item">
            <RouterLink :to="{ name: 'presentation' }" class="nav-link text-dark opacity-8">
              Əsas Səhifə
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{ name: 'about' }" class="nav-link text-dark opacity-8">
              Haqqımızda
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{ name: 'contactus' }" class="nav-link text-dark opacity-8">
              Məhsullar
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{ name: 'contactus' }" class="nav-link text-dark opacity-8">
              Layihələr
            </RouterLink>
          </li>
      </ul>

        <div class="contact_section">
          <div class="contact-item text-dark mb-2">
            <i class="fas fa-phone text-sm"></i>
            <span class="text-sm opacity-8"><span><img class="icon-img" src="@/assets/img/phone.png" alt="phone"></span>+994 51 233 25 48</span>
          </div>
          <div class="contact-item text-dark mb-4">
            <i class="fas fa-envelope text-sm"></i>
            <span class="text-sm opacity-8"><span><img class="icon-img" src="@/assets/img/email.png" alt="email"></span>office@kronosagro.az</span>
          </div>
          <div class="social_media_items">
            <a href="javascript:;" target="_blank" class="text-dark me-xl-4 me-4 opacity-5">
              <span class="fab fa-dribbble"></span>
            </a>
            <a href="javascript:;" target="_blank" class="text-dark me-xl-4 me-4 opacity-5">
              <span class="fab fa-twitter"></span>
            </a>
            <a href="javascript:;" target="_blank" class="text-dark me-xl-4 me-4 opacity-5">
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

.footer_items {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center items vertically */
}

.contact_section {
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Right align the contact section */
}

.nav_item {
  margin-bottom: 10px; /* Adds space between navigation items */
}

.footer_container {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}
.nav_items {
  list-style: none; /* Removes bullet points */
  padding: 0; /* Removes padding */
  display: flex; /* Displays list items in a row */
  justify-content: center; /* Centers items horizontally */
  gap: 20px; /* Adds space between items */
}
.logo_style{
  width: 60px;
}
.icon-img{
  width: 20px;
  margin-right: 5px;
}

@media (max-width: 768px) {
  .footer_items {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  .nav_items {
    flex-direction: column; 
    align-items: center; 
  }

  .contact_section {
    align-items: center; 
  }

  .img_container {
    margin-bottom: 20px; /* Adds space below the logo on small screens */
  }
  .logo_style{
  width: 40px;
}
}
</style>

