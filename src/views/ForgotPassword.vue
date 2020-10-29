<template>
  <section class="Login flex h-screen bg-white">
    <!-- <div
      class="lg:w-2/3 o-page o-box p-60 bg-contain bg-no-repeat bg-center md:block hidden bg-blue-800"
    >
      <img src="@/assets/images/secure_login.svg" class="mx-auto" />
    </div> -->
    <div class="flex items-center lg:w-1/2 o-page o-box bg-blue-light">
      <div class="flex-1 text-center px-4 py-2 m-2">
        <img
          src="@/assets/images/unlock.svg"
          class="mx-auto w-3/4"
        >
      </div>
    </div>
    <div class="lg:w-1/2 w-full h-full py-24">
      <header class="o-box__header text-center border-none">
        <div class="flex justify-center">
          <logo class="w-1/3" />
        </div>
        <h1 class="mb-0 text-5xl">
          Forgot your password?
        </h1>
        <p class="mb-0 text-md">
          Enter your username below and we'll send you instructions on your email on how
          to change your password.
        </p>
      </header>

      <div class="o-box__body border-none">
        <section class="c-callout v--danger hidden">
          This is just a test. Please ignore.
        </section>

        <form class="mb-4 mx-20"  @submit.prevent="submit()" >
          <div class="c-field"  :class="{ 'text-red-600': $v.username.$error }">
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

          <button
            type="submit"
            :disabled="$v.$error || !username"
            class="c-button v--warning block w-full mt-6"
            :class="{ 'v--disabled': $v.$error || !username }"
          >
            Reset password
          </button>
        </form>
        <div class="c-field my-4">
          <p>
            <router-link
              to="/login"
              class="text-blue-dark font-bold"
            >
              Return to Log in
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
  name: "ForgotPassword",
   data(){
    return{
      username: null,
    }
  },
  validations: {
    username: { required },
  },
   methods: {
     goToDashboard(){
        window.location.replace("/");
     },
    async submit(){

      try {
        /* eslint-disable  */
      this.$v.$touch();
        await axios
          .post(`https://api.swipebitnetwork.com/v1/auth/forgot_password`, {
            username: this.username,
            // token: localStorage.getItem('access_token'),
          })
          .then((response) => {
            console.log(response.data);
              let toast = (Vue as any).toasted.show(response.data.message,{
              duration: 1500,
              position: "top-right",
              type: "success",
              singleton: true,
              onComplete: this.validateForgotpasswordAgain,
              closeOnSwipe:true,
           	 theme: "toasted-primary", 
            });
          })
          .catch((error) => {
            console.log("Your error is: " + error.response.data);
            console.info(error.config);
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
      } catch ({ error }) {
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
    },
    async validateForgotpasswordAgain(){
      try {
        /* eslint-disable  */
        await axios
          .post(`https://api.swipebitnetwork.com/v1/auth/forgot_password`, {
            token: localStorage.getItem('access_token'),
          })
          .then((response) => {
            console.log(response.data);
            localStorage.removeItem('access_token');
            localStorage.setItem('access_token', response.data.data.token);
            axios.defaults.headers.common['Authorization'] = response.data.data.token

              let toast = (Vue as any).toasted.show(response.data.message,{
                duration: 1500,
                position: "top-right",
                type: "success",
                singleton: true,
                onComplete: this.goToDashboard,
                closeOnSwipe:true,
                theme: "toasted-primary", 
              });
          })
          .catch((error) => {
            var errorMessage = JSON.parse(JSON.stringify(error.response));
            console.log("Your error is: " + error.response.data);
            console.info(error.config);
            console.log("Errors: " +errorMessage.data.message)
          });
      } catch ({ error }) {
        var errorMessage = JSON.parse(JSON.stringify(error.response));
        console.log("Your error is 2: " + error);
        console.log("Errors: " +errorMessage.data.message)
      }
    },
   
  }
  
});
</script>
