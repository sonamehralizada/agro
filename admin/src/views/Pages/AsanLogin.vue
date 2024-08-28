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
                <div v-for="(header, index) in headers" :key="index" class="panel-buttons">
                  <div class="panel-left">
                    <div class="login_tab_left">
                        <RouterLink  class="botton-center" v-if="header.pathRout" :to="header.pathRout">
                            <img :src="header.path" :alt="header.text">
                            <p class="button-title">{{ header.text }}</p>
                        </RouterLink>
                    </div>
                    <div class="login_tabs_rigth">
                      <div class="info_icon">
                        <img src="@/assets/loginTypesInfo.svg" alt="info">
                      </div>
                    </div>
                  </div>
                </div>
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
import { RouterLink } from "vue-router";
import { mapGetters, mapActions } from "vuex";
import sima from '@/assets/sima.svg';
import asanImza from '@/assets/asan-imza.svg';
import simaToken from '@/assets/sima-token.svg';
import fin from '@/assets/fin.svg';
import bsxm from '@/assets/bsxm.svg';

export default {
  data() {
    return {
      model: {
        email: '',
        password: '',
        rememberMe: false,
        token: '',
      },
      headers: [
        { text: 'SİMA Rəqəmsal İmza ilə', path: sima, id: 1, pathRout: '/fin' },
        { text: 'Asan imza ilə', path: asanImza, id: 2, pathRout: '/fin' },
        { text: 'SİMA Token (Elektron İmza) ilə', path: simaToken, id: 3, pathRout: '/fin' },
        { text: 'İdentifikasiya nömrəsi ilə', path: fin, id: 4, pathRout: '/fin' },
        { text: 'BSXM Elektron İmza ilə', path: bsxm, id: 5, pathRout: '/fin' }
      ],
    };
  },
  methods: {
    ...mapActions({
      setGlobalToken: "setGlobalToken",
      setUser: 'setUser',
      logout: 'logout'
    }),
    generateToken() {
      return [...Array(100)].map(() => (~~(Math.random() * 36)).toString(36)).join('');
    },
    setCookie(name, value, days) {
      let expires = "";
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/; secure; samesite=strict";
    },
    async onSubmit() {
      try {
        const response = await axios.post('http://localhost:5000/users/login', {
          email: this.model.email,
          password: this.model.password
        });
        console.log('Response:', response.data);

        if (response.data.status === 200) {
          localStorage.setItem('user', JSON.stringify(response.data));          
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
    this.model.token = this.generateToken();
    this.setCookie('authToken', this.model.token, 7);
    console.log('Token set in cookie:', this.model.token);
  },
  computed: {
    ...mapGetters(['getHomePage']),
  }
};
</script>

  <style>
  .main_container{
    width: 100vw;
    height: 100vh;
    background-color: #f0f2fa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .asan_logo{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
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
    border: 1.173px solid #dae2ff;
    transition: all 300ms ease-in-out;
}
.panel-buttons:hover{
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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
.panel-left{
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
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
</style>
  