<template>
    <div>
        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
            <div class="flex justify-between">
                <h3 class="text-lg leading-6 font-medium text-gray-900">Edit OTP Mode</h3>
            </div>
        </div>
        <form @submit.prevent="submit()">
            <div>
                <dl>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm leading-5 font-medium my-auto text-gray-500">
                            You will receive notifications via
                        </dt>
                        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                            <div class="c-field mt-4">
                                <select name="otp_mode" v-model="form.otp_mode" class="c-field__input">
                                    <option value="sms">SMS</option>
                                    <option value="email">Email</option>
                                </select>
                            </div>
                        </dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm leading-5 font-medium text-red-500 my-auto">
                            For security purposes, please enter your password
                        </dt>
                        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                            <div class="c-field mt-4"
                                :class="{
                                    'text-red-600': $v.form.password.$error,
                                }">
                                <input
                                    class="c-field__input"
                                    :class="{
                                    'border-red-600 border-2': $v.form.password.$error,
                                    }"
                                    type="password"
                                    name="password"
                                    v-model="form.password"
                                >
                                <ul v-if="$v.$error" class="flex mt-1">
                                    <li
                                        class="text-red-600 mb-2 text-xs"
                                        v-if="!$v.form.password.required"
                                    >
                                        <strong>This field is required</strong>
                                    </li>
                                </ul>
                            </div>
                        </dd>
                    </div>
                </dl>
            </div>
            <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
                <div class="flex justify-between">
                    <router-link class="focus:outline-none c-button v-info v--outline" to="/profile/otp-mode">
                        <font-awesome-icon :icon="['fas', 'arrow-left']"/>
                        Back
                    </router-link>
                    <button type="submit" class="c-button v--success"
                        :disabled="$v.$invalid"
                         :class="{ 'v--disabled': $v.$invalid }"
                    >
                        <font-awesome-icon :icon="['fas', 'check']"/>
                        Update
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from "axios";
import {
  required,
} from "vuelidate/lib/validators";
/* eslint-disable  */

export default {
    created(){
         axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

         axios
          .get(`https://api.swipebitnetwork.com/v1/settings/security/otp`)
          .then((response) => {
              this.form.otp_mode = response.data.data.otp_mode
          })
          .catch((error) => {
            const errorMessage = JSON.parse(JSON.stringify(error.response));
              Vue.toasted.show(errorMessage.data.message,{
                duration: 3000,
                position: "top-right",
                type: "error",
                singleton: true,
                closeOnSwipe:true,
                theme: "toasted-primary", 
              });
          });
     
    },
    data(){
        return{
            user: JSON.parse(localStorage.getItem('user')),
              form:{
                otp_mode: null,
                password: null,
            }
        }
    },
     validations: {
        form:{
            otp_mode: { required },
            password: { required },
        }
  },
  methods:{
      goBack(){
        window.location.replace("/profile/otp-mode");
      },
      async submit(){
      try {
        /* eslint-disable  */
      this.$v.$touch();
        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');

        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        await axios
          .put(`https://api.swipebitnetwork.com/v1/settings/security/otp/edit`, {
            otp_mode: this.form.otp_mode,
            current_password: this.form.password,
          })
          .then((response) => {
             let toast = Vue.toasted.show(response.data.message,{
              duration: 2000,
              position: "top-right",
              type: "success",
              singleton: true,
              onComplete: this.goBack,
              closeOnSwipe:true,
           	 theme: "toasted-primary", 
            });
          })
          .catch((error) => {
            var errorMessage = JSON.parse(JSON.stringify(error.response));
              let toast = Vue.toasted.show(errorMessage.data.message,{
                duration: 3000,
                position: "top-right",
                type: "error",
                singleton: true,
                closeOnSwipe:true,
                theme: "toasted-primary", 
              });
          });
      } catch (error) {
        console.log("Your error is 2: " + error);
         var errorMessage = JSON.parse(JSON.stringify(error.response));
          let toast = Vue.toasted.show(errorMessage.data.message,{
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
}
</script>

<style>

</style>