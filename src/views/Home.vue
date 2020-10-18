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
            <!-- <div class="w-2/3">
              <img src="@/assets/images/white_mastercard.png" alt="">
              <img src="@/assets/images/red_mastercard.png" alt="">
            </div> -->
          </div>
        </div>
      </div>
      <div class="row-span-4 col-span-2">
        <div class="o-box">
          <div class="o-box__body rounded-sm bg-white px-4 py-4">
            <div class="flex items-center justify-between">
                <img src="@/assets/images/turkey_flag.svg" alt="Avatar" class="c-avatar v--small object-cover ">
                <p class=" text-sm ml-2 uppercase font-bold">try</p>
                <p class="ml-auto text-sm uppercase font-bold">500 try</p>
            </div>
          </div>
          <div class="o-box__body rounded-sm bg-white px-4 py-4">
            <div class="flex items-center justify-between">
                <img src="@/assets/images/usa_flag.jpg" alt="Avatar" class="c-avatar v--small object-cover ">
                <p class=" text-sm ml-2 uppercase font-bold">usd</p>
                <p class="ml-auto text-sm uppercase font-bold">107 usd</p>
            </div>
          </div>
          <div class="o-box__body rounded-sm bg-white px-4 py-4">
            <div class="flex items-center justify-between">
                <img src="@/assets/images/bitcoin_logo.png" alt="Avatar" class="c-avatar v--small object-cover ">
                <p class=" text-sm ml-2 font-bold">Bitcoin</p>
                <a href="#" class="ml-auto text-sm uppercase font-bold text-blue-500">buy now</a>
            </div>
          </div>
          <div class="o-box__body rounded-sm bg-white px-4 py-4">
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
          </div>
        </div>
      </div>
      
    </div>
    <!-- <header class="grid grid-cols-4 gap-8">
      <widget-tile
        title="Users"
        value="20"
        icon="users"
        url="/home"
        class="bg-blue"
      />
      <widget-tile
        title="Total Sales"
        value="27,244"
        icon="money-bill"
        url="/home"
      />
      <widget-tile
        title="Transactions"
        value="483"
        icon="table"
        url="/home"
      />
      <widget-tile
        title="Balance"
        value="20,432"
        icon="coins"
        url="/home"
      />
    </header> -->
    <div>
      <!-- <chart></chart> -->
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: {},
});
</script>
