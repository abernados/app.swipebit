<template>
  <section class="flex h-screen">
    <div class="flex items-center lg:w-1/2 o-page o-box bg-blue-light">
      <div class="flex-1 text-center px-4 py-2 m-2">
        <img
          src="@/assets/images/security.svg"
          class="mx-auto w-3/4"
        >
      </div>
    </div>
    <div class="lg:w-1/2 w-full h-full">
      <header class="o-box__header text-center border-none">
        <div class="flex justify-center">
          <logo class="w-1/3" />
        </div>
        <h1 class="mb-0 text-5xl">
          Reset password
        </h1>
        <p class="mb-0 text-md">
          In order to protect your account, make sure your password:
        </p>
        <div>
           <ul class="flex-wrap list-disc list-inside ml-40 mt-1 text-left">
                <li class="mb-2 text-xs">Is longer than <strong>7 characters</strong></li>
                <li class="mb-2 text-xs">Does not match or significantly contain your username.</li>
                <li class="mb-2 text-xs">Is not a member of this <strong>list of common passwords</strong></li>
                <li class="mb-2 text-xs">Contain atleast <strong>1 special character</strong></li>
                <li class="mb-2 text-xs">Contain atleast <strong>1 digit</strong></li>
                <li class="mb-2 text-xs">Contain atleast <strong>1 uppercase letter</strong></li>
              </ul>
        </div>
      </header>

      <div class="o-box__body border-none pt-0">
        <section class="c-callout v--danger hidden">
          This is just a test. Please ignore.
        </section>

        <form class="mb-4 mx-20" >
          <div class="c-field mt-4"
            :class="{
              'text-red-600': $v.password.$error,
            }">
            <label
              class="c-field__label float-left"
            >Password</label>
            <div class="c-input-group">
              <input
                type="password"
                name="password"
                v-model="password"
                class="c-field__input"
                  :class="{
                'border-red-600 border-2': $v.password.$error,
              }"
              >
              <ul v-if="$v.$error" class="flex mt-1">
                <li
                  class="text-red-600 mb-2 text-xs"
                  v-if="!$v.password.required"
                >
                  <strong>This field is required</strong>
                </li>
                  <li
                  class="text-red-600 mb-2 text-xs"
                  v-else-if="!$v.password.minLength"
                >
                  <strong>Password must be atleast 8 characters</strong>
                </li>
              </ul>
            </div>
          </div>
          <div class="c-field mt-4"
            :class="{
              'text-red-600': $v.repeatPassword.$error,
            }">
            <label
              class="c-field__label float-left"
            >Repeat Password</label>
            <div class="c-input-group">
              <input
                type="password"
                name="repeatPassword"
                v-model="repeatPassword"
                class="c-field__input"
                  :class="{
                'border-red-600 border-2': $v.repeatPassword.$error,
              }">
              <ul v-if="$v.repeatPassword.$error" class="flex mt-1">
                <li
                  class="text-red-600 mb-2 text-xs"
                  v-if="!$v.repeatPassword.sameAs"
                >
                  <strong>Password did not match</strong>
                </li>
              </ul>
            </div>
          </div>

          <button
            type="button"
            @click="submit"
            class="c-button v--warning block w-full mt-6"
          >
            Set new password
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
  name: "ResetPassword",
   data(){
    return{
      repeatPassword: null,
      password: null,
    }
  },
  validations: {
    password: { required },
    repeatPassword: { required },
  },
   methods: {
    async submit(){

      try {
        /* eslint-disable  */
      this.$v.$touch();
        await axios
          .patch(`https://api.swipebitnetwork.com/v1/auth/reset_password`, {
            password: this.password,
            password_confirmation: this.repeatPassword,
            token: localStorage.getItem('forgotpass_token'),
            code: localStorage.getItem('forgotpass_code'),
          })
          .then((response) => {
            console.log(response.data);
             this.$toast.open({
              message: response.data.message,
              type: "success",
              duration: 3000,
              dismissible: true,
              position: "top-right",
              pauseOnHover: true,
            });
            localStorage.removeItem('forgotpass_token')
            localStorage.removeItem('forgotpass_code')
            window.location.replace("/login");

          })
          .catch((error) => {
            console.log("Your error is: " + error.response.data);
            console.info(error.config);

             var errorMessage = JSON.parse(JSON.stringify(error.response));
             this.$toast.open({
              message: errorMessage.data.message,
              type: "success",
              duration: 3000,
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
          type: "success",
          duration: 3000,
          dismissible: true,
          position: "top-right",
          pauseOnHover: true,
        });
      }
    }
  }
  
});
</script>
