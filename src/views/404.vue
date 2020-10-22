<template>
  <section class="flex h-screen">
    <div class="flex items-center o-page o-box bg-blue-light w-full place-content-center">
      <div class="px-4 py-2 m-2">
        <img
          src="@/assets/images/404.svg"
          class="mx-auto w-3/4 h-64"
        >
        <div class="text-white font-bold">
          <h2 class="text-6xl">There's NOTHING here</h2>
          <p class="text-2xl">...maybe the page you're looking for is not found or never existed.'</p>
        </div>
         <div class="c-field my-8">
          <p>
            <router-link
              to="/login"
              class="font-bold c-button v--warning v--outline"
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
