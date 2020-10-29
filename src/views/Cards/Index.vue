<template>
    <section class="o-page gap-4">
        <div class="grid grid-rows-8 grid-cols-6 gap-5">
          <div class=" col-span-12">
              <div class="bg-gray-100 flex gap-8 px-8">
                  <div class="w-full py-4">
                      <div class=" overflow-hidden text-left">
                          <div class="flex items-center justify-between">
                              <p class=" text-sm ml-2 uppercase font-bold">Wallet Balance</p>
                              <button class="rounded-full px-4 text-sm c-button font-bold focus:outline-none" @click="reloadBalance" :class="{ 'animate-spin': loading }">
                                <font-awesome-icon :icon="['fas', 'sync']" />
                              </button>
                          </div>
                          <div class="text-4xl text-left px-2 text-blue-500" v-if="!loading">
                            {{balance || 0.00}}
                            <p class="italic text-xs text-black">* This amount is the total balance of all of your cards and currencies.</p>
                          </div>
                          <div class="animate-pulse bg-gray-200 mt-2 px-2 py-6 text-4xl text-blue-500 text-left" v-else></div>
                      </div>
                  </div>
              </div>
              <div class="text-left pt-12 border-b-2 border-gray-400">
                <p class="text-lg text-black">Cards</p>
              </div>
              <div class="my-6 grid grid-cols-6 gap-3 items-center justify-between text-white font-bold" >
                <a v-for="card in cards" :key="card.circle_card_id" :href="'/cards/view/' + card.circle_card_id"
                    class="bg center bg-cover rounded-lg flex-1 h-32 hover:text-yellow-light hover:opacity-100 opacity-75 hover:shadow-2xl " :style="{'background-image': 'url(' + require('@/assets/images/'+ cardBg[Math.floor(Math.random() * cardBg.length)] +'') + ')'}">
                  <p class="my-6 text-md font-mono">XXXX XXXX XXXX {{card.last_four}}</p>
                  <div class="flex justify-around -mt-8">
                    <p class="my-12 text-sm font-logo text-white">bit</p>
                    <p class="my-12">{{card.details.network}}</p>
                  </div>
                </a>
                <!-- Add new card -->
                <a href="/cards/create"
                  class="rounded-lg text-blue-dark bg-white border-dashed border-4 border-gray-400 py-6 h-32 hover:border-transparent hover:bg-blue-dark hover:text-white hover:opacity-100 opacity-75 hover:shadow-2xl ">
                  <font-awesome-icon :icon="['fas', 'plus-circle']" size="2x"/>
                  <p class="pt-4">Add a new card</p>
                </a>
              </div>
          </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
export default {
    name: '',
    data(){
        return{
            user: JSON.parse(localStorage.getItem('user')),
            balance: 0.00,
            loading: false,
            cardLoading: false,
            cards: null,
            cardBg:  ['ATM_Card_1.png','ATM_Card_2.png','ATM_Card_3.png'],
        }
    },
    created(){
      this.reloadBalance();
      this.getAllCards();
    },
    methods:{
    reloadBalance(){
      this.loading =true;
      axios.defaults.headers.common['Authorization'] = 'Bearer ' +localStorage.getItem('access_token')
      axios
        .post(`https://api.swipebitnetwork.com/v1/transactions/check/balance`)
        .then((response) => {
          console.log(response.data);
          this.balance = response.data.data.amount_cool;
          this.loading =false;
        });
      },
    getAllCards(){
      this.cardLoading =true;
      axios.defaults.headers.common['Authorization'] = 'Bearer ' +localStorage.getItem('access_token')
      axios
        .get(`https://api.swipebitnetwork.com/v1/cards/all`)
        .then((response) => {
          console.log(response.data);
          this.cards = response.data.data;
          this.loading =false;
        });
    },
  },
}
</script>