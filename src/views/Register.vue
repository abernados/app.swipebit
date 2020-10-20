<template>
  <section class="Login flex h-screen">
    <div class="flex items-center lg:w-1/2 o-page o-box bg-blue-light">
      <div class="flex-1 text-center px-4 py-2 m-2">
        <img
          src="@/assets/images/secure_login.svg"
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
          Create your free account
        </h1>
        <p class="mb-0 text-md">
          Please use your active email address and contact number to verify your account.
        </p>
      </header>

      <div class="o-box__body border-none">
        <section class="c-callout v--danger hidden">
          This is just a test. Please ignore.
        </section>

        <form
        ref="anyName" @submit="submit"
          class="mb-4"
        >
          <div class="o-two-columns">
            <div class="c-field" 
              :class="{
                'text-red-600': $v.name.$error,
              }">
              <label
                class="c-field__label float-left"
              >Full Name</label>
              <input
                class="c-field__input"
                :class="{
                  'border-red-600 border-2': $v.name.$error,
                }"
                type="text"
                name="name"
                v-model="name"
              >
               <ul v-if="$v.$error" class="flex mt-1">
                  <li
                    class="text-red-600 mb-2 text-xs"
                    v-if="!$v.name.required"
                  >
                    <strong>This field is required</strong>
                  </li>
                </ul>
            </div>
            <div class="c-field"
              :class="{
                'text-red-600': $v.username.$error,
              }">
              <label
                class="c-field__label float-left"
              >Username</label>
              <input
                class="c-field__input"
                 :class="{
                  'border-red-600 border-2': $v.username.$error,
                }"
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
                   <li
                    class="text-red-600 mb-2 text-xs"
                    v-else-if="!$v.username.minLength"
                  >
                    <strong>Username must be atleast 8 characters</strong>
                  </li>
                </ul>
            </div>
          </div>
          <div class="o-two-columns">
            <div class="c-field mt-4"
              :class="{
                'text-red-600': $v.email.$error,
              }">
              <label
                class="c-field__label float-left"
              >Email Address</label>
              <input
                class="c-field__input"
                 :class="{
                  'border-red-600 border-2': $v.email.$error,
                }"
                type="email"
                name="email"
                v-model="email"
                placeholder="johndoe@sample.com"
              >
              <ul v-if="$v.$error" class="flex mt-1">
                  <li
                    class="text-red-600 mb-2 text-xs"
                    v-if="!$v.email.required"
                  >
                    <strong>This field is required</strong>
                  </li>
                </ul>
            </div>
            <div class="c-field mt-4"
              :class="{
                'text-red-600': $v.contactNumber.$error,
              }">
              <label
                class="c-field__label float-left"
              >Mobile Number</label>
              <vue-phone-number-input v-model="contactNumber" class="w-100" color="#0D1D37" size="lg" clearable
              @update="results = $event"

               :class="{
                  'border-red-600 border-2': $v.contactNumber.$error,
                }"/>
                <ul v-if="$v.$error" class="flex mt-1">
                  <li
                    class="text-red-600 mb-2 text-xs"
                    v-if="!$v.contactNumber.required"
                  >
                    <strong>This field is required</strong>
                  </li>
                </ul>
            </div>
          </div>
          <div class="o-two-columns">
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
          </div>
           <div class="c-field mt-4 flex">
              <label class="c-field__label">
                <input class="mr-2 leading-tight" name="hasTerms" v-model="hasTerms" type="checkbox">
                <span class="text-sm">
                  I agree to the Terms, Data Policy and Cookies Policy of SwipeBit.
                </span>
              </label>
            </div>
          <button
            type="button"
            class="c-button v--warning block w-full mt-6"
            @click="submit"
          >
            Register
          </button>
        </form>
        <div class="c-field my-4">
          <p>
            Already have an account yet?
            <router-link
              to="/login"
              class="text-blue-light font-bold"
            >
              Sign in here.
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  required,
  email,
  minLength,
  sameAs
} from "vuelidate/lib/validators";
import axios from "axios";
export default Vue.extend({
  name: "Register",
  data(){
    return {
      name: null,
      username: null,
      email: null,
      contactNumber: null,
      newContactNumber: null,
      password: null,
      repeatPassword: null,
      country: null,
      hasTerms: false,
      loading: false,
      results: null
    }
  },
   validations: {
          name: { required },
          username: { required,minLength: minLength(8)},
          contactNumber: { required },
          email: { required,email },
          password: { required, minLength: minLength(8)},
          repeatPassword: { sameAsPassword: sameAs('password') }
  },
  methods: {
    async submit(){
      try {
        /* eslint-disable  */
      this.$v.$touch();
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        await axios
          .post(`https://api.swipebitnetwork.com/v1/auth/register/`, {
            name: this.name,
            username: this.username,
            mobile_number: this.newContactNumber,
            password: this.password,
            password_confirmation: this.repeatPassword,
            terms: this.hasTerms == true ? 1 : 0,
            email: this.email,
            country: this.country,
          })
          .then((response) => {
            console.log(response.data.success);
            localStorage.setItem('access_token', response.data.data.token);
             this.$toast.open({
              message: response.data.message,
              type: "success",
              duration: 6000,
              dismissible: true,
              position: "top-right",
              pauseOnHover: true,
            });
            this.loading = false;
            window.location.replace("/otp");
          })
          .catch((error) => {
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
      } catch (error) {
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
    }
  },
  watch: {
     results(x) {
      if (x) {
        this.newContactNumber = x.nationalNumber;  
        this.country = x.countryCallingCode;  
      } else {
        this.newContactNumber = null;  
        this.country = null;  
      }
    }
  }
  
});
</script>
