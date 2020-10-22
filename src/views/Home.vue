<template>
  <section class="o-page gap-4">
    <div class="text-left pb-4">
      <p class="text-2xl text-gray-500">Wallet</p>
    </div>
    <div class="grid grid-rows-8 grid-cols-6 gap-4">
      <div class="row-span-1 col-span-1">
        <button type="button" class="bg-green-500 hover:bg-green-700 px-4 py-3 rounded-sm text-white w-full">
          <font-awesome-icon :icon="['fas', 'plus-circle']" class="mr-2"/>
          Deposit
        </button>
      </div>
      <div class="row-span-1 col-span-1">
        <button type="button" class="bg-blue-500 hover:bg-blue-700 px-4 py-3 rounded-sm text-white w-full">
          <font-awesome-icon :icon="['fas', 'arrow-down']" class="mr-2"/>
          Withdraw</button>
      </div>
      <div class="row-span-3 col-span-4">
        <div class="o-box bg-center bg-no-repeat bg-cover" :style="{'background-image': 'url(' + require('@/assets/images/banner_with_2_cards.png') + ')'}">
          <div class="o-box__body rounded-sm " >
            <div class="w-1/3 text-left">
              <p class="font-bold pb-4">Mastercard</p>
              <p class="pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur, odio commodo porttitor facilisis, enim eros hendrerit dui, et ornare augue arcu auctor erat.</p>
              <a href="#" class="text-sm uppercase font-bold text-blue-500">get now 
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row-span-4 col-span-2">
        <div class="o-box">
          <div class="o-box__body rounded-sm bg-white px-4 py-4">
            <div class="flex items-center justify-between">
                <img src="@/assets/images/swipe.svg" alt="Avatar" class="c-avatar v--small object-cover ">
                <p class=" text-sm ml-2 uppercase font-bold">Balance</p>
                <p class="ml-auto text-sm uppercase font-bold">{{balance || 0.00}}</p>
            </div>
          </div>
          <!-- <div class="o-box__body rounded-sm bg-white px-4 py-4">
            <div class="flex items-center justify-between">
                <img src="@/assets/images/etherium_logo.png" alt="Avatar" class="c-avatar v--small object-cover ">
                <p class=" text-sm ml-2 font-bold">Etherium</p>
                <a href="#" class="ml-auto text-sm uppercase font-bold text-blue-500">buy now</a>
            </div>
          </div>
          <div class="o-box__body rounded-sm bg-white px-4 py-4">
            <div class="flex items-center justify-between">
                <p class="text-sm">Total:</p>
                <p class=" text-sm ml-2 font-bold">500 TRY</p>
                <a href="#" class="ml-auto text-sm uppercase font-bold text-gray-500 hover:text-gray-600" >currencies
                  <font-awesome-icon :icon="['fas', 'angle-right']" class="ml-2"/>
                </a>
            </div>
          </div> -->
          <div class="o-box__body rounded-sm bg-white px-4 py-4 my-4">
            <div class="flex items-center justify-between">
            <font-awesome-icon :icon="['fas', 'shield-alt']" class="c-avatar v--small object-cover self-start ml-4 mt-10" />
                <div>
                  <p class="font-bold ml-6 text-left text-sm uppercase">Verify Your Account</p>
                  <p class="pb-4 text-left mx-6 mt-4">Click <button @click="verifyAccount"> here </button> to unlock Premium Features and to have multiple cards on your account.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-4">
        <div class="o-box">
          <div class="o-box__body rounded-sm bg-white px-4 py-4">
            <div class="flex items-center justify-between">
                <p class=" text-sm ml-2 font-bold">Recent Activity</p>
                <p class="ml-auto text-sm font-bold">View All</p>
            </div>
            <div class="flex flex-col mt-6 mb-2">
              <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                          <th class="px-6 py-3 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                        <tr>
                          <td class="px-6 text-left py-4 whitespace-no-wrap text-sm leading-5">
                            18 Oct 2020
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap text-left">
                            <div class="text-sm font-bold text-blue-light">Payment from Swipebit Network </div>
                            <div class="text-xs leading-5 text-gray-500">Completed</div>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap text-right">
                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                               65,123.43 PHP
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td class="px-6 text-left py-4 whitespace-no-wrap text-sm leading-5">
                            18 Oct 2020
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap text-left">
                            <div class="text-sm font-bold text-blue-light">Payment to SM Department Store </div>
                            <div class="text-xs leading-5 text-gray-500">Completed</div>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap text-right">
                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              - 265,776.43 PHP
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td class="px-6 text-left py-4 whitespace-no-wrap text-sm leading-5">
                            18 Oct 2020
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap text-left">
                            <div class="text-sm font-bold text-blue-light">Payment from Company ABC </div>
                            <div class="text-xs leading-5 text-gray-500">Pending</div>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap text-right">
                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                               43,245.43 USD
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td class="px-6 text-left py-4 whitespace-no-wrap text-sm leading-5">
                            18 Oct 2020
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap text-left">
                            <div class="text-sm font-bold text-blue-light">Payment to Swipebit Network </div>
                            <div class="text-xs leading-5 text-gray-500">Completed</div>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap text-right">
                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              - 123.43 PHP
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td class="px-6 text-left py-4 whitespace-no-wrap text-sm leading-5">
                            18 Oct 2020
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap text-left">
                            <div class="text-sm font-bold text-blue-light">Payment from Swipebit Network </div>
                            <div class="text-xs leading-5 text-gray-500">Completed</div>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap text-right">
                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                               4,323.43 USD
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td class="px-6 text-left py-4 whitespace-no-wrap text-sm leading-5">
                            18 Oct 2020
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap text-left">
                            <div class="text-sm font-bold text-blue-light">Payment to Swipebit Network </div>
                            <div class="text-xs leading-5 text-gray-500">Pending</div>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap text-right">
                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              - 123.43 PHP
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "Home",
  data(){
    return{
      balance: 0.00
    }
  },
  created(){
    axios.defaults.headers.common['Authorization'] = 'Bearer ' +localStorage.getItem('access_token')

    axios
      .post(`https://api.swipebitnetwork.com/v1/transactions/check/balance`)
      .then((response) => {
        console.log(response.data);
        this.balance = response.data.data.amount_cool;
      });
     
  },
  methods:{
    verifyAccount(){
      console.log('WALA PA ITO');
    }
  }
});
</script>
