<template>
  <div class="main_container">
    <div class="asan_logo">
      <img src="@/assets/CDSSO_LOGO.svg" alt="info">
    </div>
    <b-container class="pb-5">
      <b-row class="justify-content-center">
        <div class="panel-centered">
          <div class="container-fluid">
            <div class="row full-height">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <b-btn>
                  <img src="@/assets/newBack.svg" alt="info">Geri
                </b-btn>
                <validation-observer v-slot="{ handleSubmit }" ref="formValidator">
                  <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                    <base-input alternative
                                class="mb-3"
                                name="fin"
                                prepend-icon="ni ni-email-83"
                                placeholder="İdentifikasiya nömrəsi"
                                v-model="model.pin">
                    </base-input>
                    <base-input alternative
                                class="mb-3"
                                name="Password"
                                prepend-icon="ni ni-lock-circle-open"
                                type="password"
                                placeholder="Şifrə"
                                v-model="model.password">
                    </base-input>
                    <div class="text-center">
                      <base-button type="primary" native-type="submit" class="my-2">Daxil ol</base-button>
                    </div>
                  </b-form>
                </validation-observer>
              </div>
            </div>
          </div>
        </div>
      </b-row>
    </b-container>
  </div>   
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions } from "vuex";
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      model: {
        pin: '',
        password: '',
        rememberMe: false,
        specificToken: '',
      },
    };
  },
  methods: {
    ...mapActions({
        setHomePage: "setHomePage",
    }),
    getCookie(name) {
      let cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith(name + '='));
    if (cookieValue) {
      cookieValue = cookieValue.split('=')[1];
    }
    return cookieValue ? decodeURIComponent(cookieValue) : null;

    },
    setCookie(name, value, expires) {
    const expireTime = expires.toUTCString();
    document.cookie = `${name}=${value}; expires=${expireTime}; path=/`;
  },
    async onSubmit() {
        try {
          const token = this.getCookie('authToken');
          const response = await axios.post('http://localhost:5000/users/asanLogin', {
            pin: this.model.pin,
            password: this.model.password
          }, {
            headers: { 'token': token }
          });

          console.log('Login Response:', response.data);

          if (response.data.status === 200) {
            this.specificToken = response.data.token;
            localStorage.setItem('user', JSON.stringify(response.data));
            // Cookie'ye token ve süresi dolma zamanını kaydedin
            this.setCookie('authToken', response.data.token, new Date(response.data.expiresAt));
            this.setCookie('tokenExpire', response.data.expiresAt, new Date(response.data.expiresAt));
            await this.$router.push('/dashboard');
          } else {
            alert('Login failed!');
          }
        } catch (error) {
          console.error('Error occurred:', error);
        }
      },

  },
  mounted() {
    console.log('Specific token:', this.specificToken);
  },
  computed: {
    ...mapGetters(['getHomePage']),
  }
};
</script>
  <style>
  .panel-centered{
    display: flex;
    max-width: 640px;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 24px;
    margin-top: 30px;
    padding: 35px 10px;
    background-color: #fff;
    border: 1px solid #dae2ff;
}
.container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.full-height{
    height: 100% !important;
}
.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.panel-buttons {
    width: 100%;
    cursor: pointer;
    text-align: left;
    height: 60px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    transition: background-color .8s;
    border: 1.173px solid #dae2ff;
}

.panel-left {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
}

.info_icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    margin-right: 0 !important;
}
.login_tabs_rigth {
    margin-left: 40px;
    display: flex;
    align-items: center;
}
.botton-center{
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
.button-title{
    width: 100%;
    margin: 0;
    margin-left: 20px;
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    color: #0d55cf;
}

.back-button{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90px;
    border-radius: 10px;
    border: 1px solid #cacdd5;
    padding: 16px;
    cursor: pointer;
    height: 48px;
    color: #525c76;
    font-weight: 700;
}
</style>
  