<template>
    <div>
        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
            <div class="flex justify-between">
                <h3 class="text-lg leading-6 font-medium text-gray-900">Change Password</h3>
            </div>
        </div>
        <form @submit.prevent="submit()">
            <div>
                <dl>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm leading-5 font-medium text-gray-500 my-auto">
                            Current Password
                        </dt>
                        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                            <div class="c-field" 
                                :class="{
                                    'text-red-600': $v.form.current_password.$error,
                                }">
                                <input
                                    class="c-field__input"
                                    :class="{
                                    'border-red-600 border-2': $v.form.current_password.$error,
                                    }"
                                    type="password"
                                    name="current_password"
                                    v-model="form.current_password"
                                >
                                <ul v-if="$v.$error" class="flex mt-1">
                                    <li
                                        class="text-red-600 mb-2 text-xs"
                                        v-if="!$v.form.current_password.required"
                                    >
                                        <strong>This field is required</strong>
                                    </li>
                                </ul>
                            </div>
                        </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm leading-5 font-medium text-gray-500 my-auto">
                            New Password
                        </dt>
                        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                            <div class="c-field"
                                :class="{
                                    'text-red-600': $v.form.password.$error,
                                }">
                                <input
                                    class="c-field__input"
                                    :class="{
                                    'border-red-600 border-2': $v.form.password.$error,
                                    }"
                                    type="password"
                                    name="form.password"
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
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm leading-5 font-medium text-gray-500 my-auto">
                            Repeat your new password
                        </dt>
                        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                            <div class="c-field" 
                                :class="{
                                    'text-red-600': $v.form.password_confirmation.$error,
                                }">
                                <input
                                    class="c-field__input"
                                    :class="{
                                    'border-red-600 border-2': $v.form.password_confirmation.$error,
                                    }"
                                    type="password"
                                    name="password_confirmation"
                                    v-model="form.password_confirmation"
                                >
                                <ul v-if="$v.$error" class="flex mt-1">
                                    <li
                                        class="text-red-600 mb-2 text-xs"
                                        v-if="!$v.form.password_confirmation.required"
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
                <div class="flex justify-end">
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
import moment from "moment";
import Vue from 'vue'
import {
  required,
} from "vuelidate/lib/validators";
import axios from "axios";
/* eslint-disable  */

export default {
    data(){
        return{
            user: JSON.parse(localStorage.getItem('user')),
            moment: moment,
            form: {
                current_password: null,
                password_confirmation: null,
                password: null,
            }
        }
    },
     validations: {
        form:{
            current_password: { required },
            password_confirmation: { required },
            password: { required },
        }
  },
  methods:{
      async submit(){
      try {
        /* eslint-disable  */
      this.$v.$touch();
        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');

        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        await axios
          .patch(`https://api.swipebitnetwork.com/v1/settings/security/password/edit`, {
            password: this.form.password,
            password_confirmation: this.form.password_confirmation,
            current_password: this.form.current_password,
          })
          .then((response) => {
             let toast = Vue.toasted.show(response.data.message,{
              duration: 2000,
              position: "top-right",
              type: "success",
              singleton: true,
              closeOnSwipe:true,
           	 theme: "toasted-primary", 
            });
            window.location.reload();
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