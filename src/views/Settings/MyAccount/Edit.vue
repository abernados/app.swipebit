<template>
    <div>
        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
            <div class="flex justify-between">
                <h3 class="text-lg leading-6 font-medium text-gray-900">Edit Account Details</h3>
            </div>
        </div>
        <form @submit.prevent="submit()">
            <div>
                <dl>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm leading-5 font-medium text-gray-500 my-auto">
                            Full name
                        </dt>
                        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                            <div class="c-field" 
                                :class="{
                                    'text-red-600': $v.form.name.$error,
                                }">
                                <input
                                    class="c-field__input"
                                    :class="{
                                    'border-red-600 border-2': $v.form.name.$error,
                                    }"
                                    type="text"
                                    name="name"
                                    v-model="form.name"
                                >
                                <ul v-if="$v.$error" class="flex mt-1">
                                    <li
                                        class="text-red-600 mb-2 text-xs"
                                        v-if="!$v.form.name.required"
                                    >
                                        <strong>This field is required</strong>
                                    </li>
                                </ul>
                            </div>
                        </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm leading-5 font-medium text-gray-500 my-auto">
                            Username
                        </dt>
                        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                            <div class="c-field"
                                :class="{
                                    'text-red-600': $v.form.username.$error,
                                }">
                                <input
                                    class="c-field__input"
                                    :class="{
                                    'border-red-600 border-2': $v.form.username.$error,
                                    }"
                                    type="text"
                                    name="form.username"
                                    v-model="form.username"
                                >
                                <ul v-if="$v.$error" class="flex mt-1">
                                    <li
                                        class="text-red-600 mb-2 text-xs"
                                        v-if="!$v.form.username.required"
                                    >
                                        <strong>This field is required</strong>
                                    </li>
                                    <li
                                        class="text-red-600 mb-2 text-xs"
                                        v-else-if="!$v.form.username.minLength"
                                    >
                                        <strong>Username must be atleast 8 characters</strong>
                                    </li>
                                </ul>
                            </div>
                        </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm leading-5 font-medium text-gray-500 my-auto">
                            Mobile Number
                        </dt>
                        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                            <div class="c-field" 
                                :class="{
                                    'text-red-600': $v.form.mobile_number.$error,
                                }">
                                <input
                                    class="c-field__input"
                                    :class="{
                                    'border-red-600 border-2': $v.form.mobile_number.$error,
                                    }"
                                    type="text"
                                    name="mobile_number"
                                    v-model="form.mobile_number"
                                >
                                <ul v-if="$v.$error" class="flex mt-1">
                                    <li
                                        class="text-red-600 mb-2 text-xs"
                                        v-if="!$v.form.mobile_number.required"
                                    >
                                        <strong>This field is required</strong>
                                    </li>
                                </ul>
                            </div>
                        </dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm leading-5 font-medium text-gray-500 my-auto">
                            Email address
                        </dt>
                        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                            <div class="c-field mt-4"
                                :class="{
                                    'text-red-600': $v.form.email.$error,
                                }">
                                <input
                                    class="c-field__input"
                                    :class="{
                                    'border-red-600 border-2': $v.form.email.$error,
                                    }"
                                    type="email"
                                    name="email"
                                    v-model="form.email"
                                    placeholder="johndoe@sample.com"
                                >
                                <ul v-if="$v.$error" class="flex mt-1">
                                    <li
                                        class="text-red-600 mb-2 text-xs"
                                        v-if="!$v.form.email.required"
                                    >
                                        <strong>This field is required</strong>
                                    </li>
                                </ul>
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
                    <router-link class="focus:outline-none c-button v-info v--outline" to="/profile/account">
                        <font-awesome-icon :icon="['fas', 'arrow-left']"/>
                        Back
                    </router-link>
                    <button type="submit" class="c-button v--success">
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
  email,
  minLength,
} from "vuelidate/lib/validators";
import axios from "axios";
/* eslint-disable  */

export default {
    created(){
        this.form.name = this.user.name;
        this.form.username = this.user.username;
        this.form.email = this.user.email;
        this.form.mobile_number = this.user.mobile_number;
    },
    data(){
        return{
            user: JSON.parse(localStorage.getItem('user')),
            moment: moment,
            form: {
                name: null,
                username: null,
                email: null,
                mobile_number: null,
                password: null,
            }
        }
    },
     validations: {
        form:{
            name: { required },
            username: { required,minLength: minLength(8)},
            mobile_number: { required },
            password: { required },
            email: { required,email },
        }
  },
  methods:{
      goBack(){
        window.location.replace("/profile/account");
      },
      async submit(){
      try {
        /* eslint-disable  */
      this.$v.$touch();
        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');

        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        await axios
          .put(`https://api.swipebitnetwork.com/v1/settings/profile/edit/`, {
            name: this.form.name,
            username: this.form.username,
            mobile_number: this.form.mobile_number,
            email: this.form.email,
            current_password: this.form.password,
          })
          .then((response) => {
            // console.log(response.data.success);
            // console.log(JSON.stringify(response.data.data))
            localStorage.setItem('user', JSON.stringify(response.data.data));

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