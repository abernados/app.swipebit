<template>
  <section class="flex h-screen bg-white">
    <div class="flex items-center lg:w-1/2 o-page o-box bg-blue-light">
      <div class="flex-1 text-center px-4 py-2 m-2">
        <img
          src="@/assets/images/phone-sent.svg"
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
          Verification
        </h1>
        <p class="mb-0 text-md">
          You will get an OTP via SMS
        </p>
      </header>

      <div class="o-box__body border-none">
        <form class="mb-4 mx-20" @submit.prevent="submit()" >
          <div class="c-field"  :class="{ 'text-red-600': $v.code.$error }">
            <label
              class="c-field__label float-left"
            >Enter here the OTP sent to your phone number</label>
            <input
              class="c-field__input"
              :class="{ 'border-red-600 border-2': $v.code.$error }"
              type="text"
              name="code"
              v-model="code"
            >
              <ul v-if="$v.$error" class="flex mt-1">
                <li
                  class="text-red-600 mb-2 text-xs"
                  v-if="!$v.code.required"
                >
                  <strong>This field is required</strong>
                </li>
              </ul>
          </div>
          <div class="c-field my-4 float-right">
            <button
              type="button"
              @click="resendOtp"
              class="text-blue-light font-bold"
            >
              Resend again?
            </button>
          </div>
          <button
             type="submit"
            :disabled="$v.$error || !code"
            class="c-button v--warning block w-full mt-6"
            :class="{ 'v--disabled': $v.$error || !code }"
          >
            Verify
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
import moment from "moment";

export default Vue.extend({
  name: "ForgotPassword",
   data(){
    return{
      code: null,
      token: null,
      timer: moment().add(5, 'm').toDate()
    }
  },
  validations: {
    code: { required },
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
          .post(`https://api.swipebitnetwork.com/v1/otp/verify`, {
            code: this.code,
            token: localStorage.getItem('access_token'),
          })
          .then((response) => {
            console.log(response.data);
            this.validateLoginAgain();
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
    async validateLoginAgain(){
      try {
        /* eslint-disable  */
        await axios
          .post(`https://api.swipebitnetwork.com/v1/auth/login`, {
            code: this.code,
            token: localStorage.getItem('access_token'),
          })
          .then((response) => {
            console.log(response.data);
            localStorage.setItem('access_token', response.data.data.access_token);
            localStorage.setItem('user', JSON.stringify(response.data.data.user));
            axios.defaults.headers.common['Authorization'] = response.data.data.access_token

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
            console.log("Your error is: " + error.response.data);
            console.info(error.config);
            var errorMessage = JSON.parse(JSON.stringify(error.response));
              this.$toast.open({
                message: errorMessage.data.message,
                type: "error",
                duration: 6000,
                dismissible: true,
                position: "top-right",
                pauseOnHover: true,
              });
          });
      } catch ({ error }) {
        console.log("Your error is 2: " + error);
          var errorMessage = JSON.parse(JSON.stringify(error.response));
              this.$toast.open({
                message: errorMessage.data.message,
                type: "error",
                duration: 6000,
                dismissible: true,
                position: "top-right",
                pauseOnHover: true,
              });
      }
    },
    resendOtp(){
        try {
        /* eslint-disable  */
        axios
          .post(`https://api.swipebitnetwork.com/v1/otp/resend`, {
            token: localStorage.getItem('access_token'),
          })
          .then((response) => {
            console.log(response.data);
            let toast = (Vue as any).toasted.show(response.data.message,{
              duration: 1500,
              position: "top-right",
              type: "success",
              singleton: true,
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
    }

  }
});
</script>
