<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container>
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white">Xoş gəlmisiniz!</h1>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <b-row class="justify-content-center">
        <b-col lg="5" md="7">
          <b-card no-body class="bg-secondary border-0 mb-0">
            <b-card-header class="bg-transparent pb-5">
              <h1 class="text-lead text-center mt-2 mb-3"><small>Daxil olun</small></h1>
            </b-card-header>
            <b-card-body class="px-lg-5 py-lg-5">
              <validation-observer v-slot="{ handleSubmit }" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input alternative
                              class="mb-3"
                              name="Email"
                              :rules="{ required: true, email: true }"
                              prepend-icon="ni ni-email-83"
                              placeholder="Email"
                              v-model="model.email">
                  </base-input>
                  <base-input alternative
                              class="mb-3"
                              name="Password"
                              :rules="{ required: true, min: 6 }"
                              prepend-icon="ni ni-lock-circle-open"
                              type="password"
                              placeholder="Password"
                              v-model="model.password">
                  </base-input>
                  <b-form-checkbox v-model="model.rememberMe">Məni xatırla</b-form-checkbox>
                  <div class="text-center">
                    <base-button type="primary" native-type="submit" class="my-4">Daxil ol</base-button>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';
import {mapGetters, mapActions} from "vuex";


export default {
  data() {
    return {
      model: {
        email: '',
        password: '',
        rememberMe: false
      }
    };
  },
  methods: {
    ...mapActions({
        setHomePage: "setHomePage",
        setUser:'setUser',
        logout:'logout'

    }),
    async onSubmit() {
      try {
        const response = await axios.post('http://localhost:5000/users/login', {
          email: this.model.email,
          password: this.model.password
        });
        console.log('Response:', response.data);

        if (response.data.status === 200) {
          localStorage.setItem('user', JSON.stringify(response.data));          
          await this.$router.push('/dashboard')

        } else {
          alert('Login failed!');
        }
      } catch (error) {
        console.error('Error occurred:', error);
      }
    },


  },
    computed: {
    ...mapGetters(['getHomePage']),

  }
};
</script>
