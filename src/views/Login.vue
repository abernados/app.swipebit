<template>
  <section class="Login flex h-screen bg-white">
    <div class="flex items-center lg:w-2/3 o-page o-box bg-blue-light">
      <div class="flex-1 text-center px-4 py-2 m-2">
        <img
          src="@/assets/images/crypto.svg"
          class="mx-auto w-3/4"
        >
      </div>
    </div>
    <div class="lg:w-1/3 w-full h-full">
      <header class="o-box__header text-center border-none">
        <div class="flex justify-center">
          <logo class="w-1/3" />
        </div>
        <h1 class="mb-0 text-5xl">
          Welcome Back!
        </h1>
        <p class="mb-0 text-md">
          To keep connected with us, please login using your username and password. We will send you a One Time Password (OTP) on your phone number.
        </p>
      </header>

      <div class="o-box__body border-none">
        <section class="c-callout v--danger hidden">
          This is just a test. Please ignore.
        </section>

        <form class="my-4" @submit.prevent="submit()" >
          <div class="c-field" :class="{ 'text-red-600': $v.username.$error }">
            <label
              class="c-field__label float-left"
            >Username</label>
            <input
              class="c-field__input"
              :class="{ 'border-red-600 border-2': $v.username.$error }"
              type="text"
              name="username"
              v-model="username"
            >
             <ul v-if="$v.$error" class="flex mt-1">
                <li
                  class="text-red-600 mb-2 text-xs"
                  v-if="!$v.username.required"
                >
                  <strong>This field is required</strong>
                </li>
              </ul>
          </div>

          <div class="c-field mt-4" :class="{ 'text-red-600': $v.password.$error }">
            <label
              class="c-field__label float-left"
            >Password</label>
              <input
                type="password"
                name="password"
                v-model="password"
                class="c-field__input"
               :class="{ 'border-red-600 border-2': $v.password.$error }"
              >
              <ul v-if="$v.$error" class="flex mt-1">
                <li
                  class="text-red-600 mb-2 text-xs"
                  v-if="!$v.password.required"
                >
                  <strong>This field is required</strong>
                </li>
              </ul>
          </div>
          <div class="c-field my-4 float-right">
            <router-link
              to="/forgot-password"
              class="text-blue-light font-bold"
            >
              Forgot password?
            </router-link>
          </div>
          <button
            type="submit"
            :disabled="$v.$error || !username || !password"
            class="c-button v--warning block w-full mt-6"
            :class="{ 'v--disabled': $v.$error || !username || !password }"
          >
            Sign in
          </button>
        </form>
        <div class="c-field my-4">
          <p>
            Dont have an account yet?
            <router-link
              to="/register"
              class="text-blue-light font-bold"
            >
              Register here.
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { required } from "vuelidate/lib/validators";
import axios from "axios";

export default Vue.extend({
  name: "Login",
  data(){
    return{
      username: null,
      password:null
    }
  },
  validations: {
    username: { required },
    password: { required }
  },
   methods: {
     goToOTP(){
        window.location.replace("/otp");
     },
    async submit(){

      try {
        /* eslint-disable  */
      this.$v.$touch();
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

        await axios
          .post(`https://api.swipebitnetwork.com/v1/auth/login`, {
            username: this.username,
            password: this.password,
          })
          .then((response) => {
            console.log(response.data);
            console.log('Token: ' + response.data.data.token);
            localStorage.setItem('access_token', response.data.data.token);
           
            let toast = (Vue as any).toasted.show(response.data.message,{
              duration: 1500,
              position: "top-right",
              type: "success",
              singleton: true,
              onComplete: this.goToOTP,
              closeOnSwipe:true,
           	 theme: "toasted-primary", 
            });

          })
          .catch((error) => {
             var errorMessage = JSON.parse(JSON.stringify(error.response));
              let toast = (Vue as any).toasted.show(errorMessage.data.message,{
                duration: 3000,
                position: "top-right",
                type: "error",
                singleton: true,
                closeOnSwipe:true,
                theme: "toasted-primary", 
              });
          });
      } catch ( error ) {
        console.log("Your error is 2: " + error);
         var errorMessage = JSON.parse(JSON.stringify(error.response));
           let toast = (Vue as any).toasted.show(errorMessage.data.message,{
                duration: 3000,
                position: "top-right",
                type: "error",
                singleton: true,
                closeOnSwipe:true,
                theme: "toasted-primary", 
              });
      }
    }
  }
  
});
</script>
