
<template>
  <section class="py-lg-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card box-shadow-xl overflow-hidden mb-5">
            <div class="row">
              <div
                class="col-lg-5 position-relative bg-cover px-0 h-20"
                :style="{ backgroundImage: `url(${bgContact})` }"
                loading="lazy"
              >
                <div
                  class="z-index-2 text-center d-flex h-100 w-100 d-flex m-auto justify-content-center"
                >
                  <div class="mask bg-gradient-dark opacity-8"></div>
                  <div
                    class="p-5 ps-sm-8 position-relative text-start my-auto z-index-2"
                  >
                    <h3 class="text-white">Əlaqə məlumatlarımız</h3>
                  
                    <div class="d-flex p-2 text-white">
                      <div>
                        <i class="fas fa-phone text-sm"></i>
                      </div>
                      <div class="ps-3">
                        <span class="text-sm opacity-8"><span><img class="icon-img" :src="phoneIcon" alt="phone"></span>+994 51 233 25 48</span>
                      </div>
                    </div>
                    <div class="d-flex p-2 text-white">
                      <div>
                        <i class="fas fa-envelope text-sm"></i>
                      </div>
                      <div class="ps-3">
                        <span class="text-sm opacity-8"
                          ><span><img class="icon-img" :src="emailIcon" alt="email"></span>office@kronosagro.az</span
                        >
                      </div>
                    </div>
      
                    <div class="mt-4">
                      <div
                        color="none"
                        size="lg"
                        class="btn-icon-only btn-link text-white mb-0"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Log in with Facebook"
                      >
                        <i class="fab fa-facebook"></i>
                    </div>
                      <div
                        color="none"
                        size="lg"
                        class="btn-icon-only btn-link text-white mb-0"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Log in with Twitter"
                      >
                        <i class="fab fa-twitter"></i>
                    </div>
                      <div
                        color="none"
                        size="lg"
                        class="btn-icon-only btn-link text-white mb-0"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Log in with Dribbble"
                      >
                        <i class="fab fa-dribbble"></i>
                    </div>
                      <div
                        color="none"
                        size="lg"
                        class="btn-icon-only btn-link text-white mb-0"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Log in with Instagram"
                      >
                        <i class="fab fa-instagram"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <form class="p-3" id="contact-form">
                  <div class="card-header px-4 py-sm-5 py-3">
                    <h2>ƏLAQƏ</h2>
                  </div>
                  <div class="card-body pt-1">
                    <div class="row">
                      <div class="col-md-12 pe-2 mb-3 input-data">
                        
                        <input
                          class="input-group-static mb-4"
                          label="Ad və soyad"
                          placeholder="Ad və soyad"
                          type="text"
                          v-model="fullName"
                        />

                      </div>
                      <div class="col-md-12 pe-2 mb-3 input-data">
                        <div class="underline"></div>

                        <input
                        placeholder="Email"
                          class="input-group-static mb-4"
                          label="E-poçt"
                          type="email"
                          v-model="email" 
                          required
                        />
                      </div>
                      <div class="col-md-12  form-row">
                        <div class="input-data textarea">

                        <textarea 
                          class="input-group-static mb-4"
                          :rows="6"
                          placeholder="Məktubunuz"
                          required
                          v-model="message"
                          >Məktubunuz</textarea
                        >
                        </div>
                      </div>
                      
                    </div>
                    <div class="form-row submit-btn">
                      <div class="col-md-6 text-end ms-auto input-data">
                        <div class="inner"></div>

                        <input type="submit" value="Göndər">

                      </div>
                    </div>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { ref } from 'vue';
import axios from 'axios';
//Vue Material Kit 2 components


// image
import bgContact from "@/assets/img/examples/blog2.jpg";
import phoneIcon from '@/assets/img/phone.png';
import emailIcon from '@/assets/img/email.png';


const fullName = ref(true)
const message = ref(true)

const email = ref(true)


// tooltip

export default {
  setup() {
    return { bgContact,emailIcon,phoneIcon };
  },
  data() {
    return {
      fullName:null,
      email:null,
      message:null,
    };
  },
   methods: {
    // async submitForm(e) {
    //   e.preventDefault()
    //   const data = {
    //     fullName: this.fullName,
    //     message: this.message,
    //     email: this.email,

    //   }

    //   try {
    //     const response = await axios.post('http://localhost:5000/form',data);
    //     console.log('Response:', response.data);

    //     if (response.data.status === 200) {
    //       alert('Message send successful!');
    //     } else {
    //       alert('Message failed!');
    //     }
    //   } catch (error) {
    //     console.error('Error occurred:', error);
    //     alert('An error occurred while trying to log in.');
    //   }
    // },
  }
    
  
};
</script>

<style scoped>

.container form .form-row{
  display: flex;
  margin: 32px 0;
}
form .form-row .input-data{
  width: 100%;
  height: 40px;
  margin: 0 20px;
  position: relative;
}
form .form-row .textarea{
  height: 70px;
}
.input-data input,
.textarea textarea{
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
  border-bottom: 2px solid rgba(0,0,0, 0.12);
}
.input-data input:focus ~ label, .textarea textarea:focus ~ label,
.input-data input:valid ~ label, .textarea textarea:valid ~ label{
  transform: translateY(-20px);
  font-size: 14px;
  color: #3498db;
}
.textarea textarea{
  resize: none;
  padding-top: 10px;
}
.input-data label{
  position: absolute;
  pointer-events: none;
  bottom: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
}
.textarea label{
  width: 100%;
  bottom: 40px;
  background: #fff;
}
.input-data .underline{
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;
}
.btn_label{
  z-index: 10000;
}
.input-data .underline:before{
  position: absolute;
  content: "";
  height: 2px;
  width: 100%;
  background: #3498db;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
}
.input-data input:focus ~ .underline:before,
.input-data input:valid ~ .underline:before,
.textarea textarea:focus ~ .underline:before,
.textarea textarea:valid ~ .underline:before{
  transform: scale(1);
}
.submit-btn .input-data{
  overflow: hidden;
  height: 45px!important;
  width: 25%!important;
}
.submit-btn .input-data .inner{
  height: 100%;
  width: 300%;
  position: absolute;
  left: -100%;
  background: -webkit-linear-gradient(right, #56d8e4, #9f01ea, #56d8e4, #9f01ea);
  transition: all 0.4s;
}
.submit-btn .input-data:hover .inner{
  left: 0;
}
.submit-btn .input-data input{
  background: none;
  border: none;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
  z-index: 2;
}
.icon-img{
  width: 30px;
  margin-right: 5px;
}
@media (max-width: 700px) {
  .container .text{
    font-size: 30px;
  }
  .container form{
    padding: 10px 0 0 0;
  }
  .container form .form-row{
    display: block;
  }
  form .form-row .input-data{
    margin: 35px 0!important;
  }
  .submit-btn .input-data{
    width: 40%!important;
  }
}</style>