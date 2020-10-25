<template>
    <div>
        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
            <div class="flex justify-between">
                <h3 class="text-lg leading-6 font-medium text-gray-900">OTP Mode Settings</h3>
                <router-link class="focus:outline-none" to="/profile/otp-mode/edit">
                    <font-awesome-icon :icon="['fas', 'pen']" size="lg" />
                </router-link>
            </div>
            <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">You can change how notifications will be send to you.</p>
        </div>
        <div>
            <dl>
                <div class="bg-gray-50 px-4 py-5 sm:px-6">
                    <dt class="text-sm leading-5 font-medium text-gray-500">
                        You will receive notifications via <strong class="uppercase text-blue-light"> {{otp_mode}}</strong> on your {{ otp_mode == 'sms' ? 'mobile number: ' +  this.user.mobile_number : 'email address: ' + this.user.email}}
                    </dt>
                </div>
            </dl>
        </div>
    </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import Vue from 'vue'
/* eslint-disable  */

export default {
    data(){
        return{
            user: JSON.parse(localStorage.getItem('user')),
            moment: moment,
            otp_mode: null
        }
    },
    created(){
        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

         axios
          .get(`https://api.swipebitnetwork.com/v1/settings/security/otp`)
          .then((response) => {
              this.otp_mode = response.data.data.otp_mode
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
     
    }
}
</script>

<style>

</style>