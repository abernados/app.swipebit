<template>
    <!-- eslint-disable -->
    <div class="wrapper" id="app">
       <form class="card-form" @submit.prevent="submit">
         <div class="mb-6 text-left">
           <a href="/cards"><font-awesome-icon :icon="['fas', 'arrow-left']" class="mr-2"/> Back</a>
         </div>
          <div class="card-list">
              <div class="card-item" v-bind:class="{ '-active' : isCardFlipped }">
              <div class="card-item__side -front">
                  <!-- <div class="card-item__focus" v-bind:class="{'-active' : focusElementStyle }" v-bind:style="focusElementStyle" ref="focusElement"></div> -->
                  <div class="card-item__cover">
                    <img src="@/assets/images/ATM_Card_3.png" class="card-item__bg">
                  </div>
                  <div class="card-item__wrapper">
                  <div class="card-item__top">
                      <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" class="card-item__chip">
                      <div class="card-item__type">
                      <transition name="slide-fade-up">
                          <img v-bind:src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + getCardType + '.png'" v-if="getCardType" v-bind:key="getCardType" alt="" class="card-item__typeImg">
                      </transition>
                      </div>
                  </div>
                  <label for="cardNumber" class="card-item__number" ref="cardNumber">
                      <template v-if="getCardType === 'amex'">
                        <span v-for="(n, $index) in amexCardMask" :key="$index">
                        <transition name="slide-fade-up">
                            <div
                            class="card-item__numberItem"
                            v-if="$index > 4 && $index < 14 && cardNumber.length > $index && n.trim() !== ''"
                            >*</div>
                            <div class="card-item__numberItem"
                            :class="{ '-active' : n.trim() === '' }"
                            :key="$index" v-else-if="cardNumber.length > $index">
                            {{cardNumber[$index]}}
                            </div>
                            <div
                            class="card-item__numberItem"
                            :class="{ '-active' : n.trim() === '' }"
                            v-else
                            :key="$index + 1"
                            >{{n}}</div>
                        </transition>
                        </span>
                      </template>

                      <template v-else>
                        <span v-for="(n, $index) in otherCardMask" :key="$index">
                            <transition name="slide-fade-up">
                            <div
                                class="card-item__numberItem"
                                v-if="$index < 15 && cardNumber.length > $index && n.trim() !== ''"
                            >*</div>
                            <div class="card-item__numberItem"
                                :class="{ '-active' : n.trim() === '' }"
                                :key="$index" v-else-if="cardNumber.length > $index">
                                {{cardNumber[$index]}}
                            </div>
                            <div
                                class="card-item__numberItem"
                                :class="{ '-active' : n.trim() === '' }"
                                v-else
                                :key="$index + 1"
                            >{{n}}</div>
                            </transition>
                        </span>
                      </template>
                  </label>
                  <div class="card-item__content text-left">
                      <label for="cardName" class="card-item__info" ref="cardName">
                      <div class="card-item__holder">Card Holder</div>
                      <transition name="slide-fade-up">
                          <div class="card-item__name" v-if="cardName.length" key="1">
                          <transition-group name="slide-fade-right">
                              <span class="card-item__nameItem" v-for="(n, $index) in cardName.replace(/\s\s+/g, ' ')" v-if="$index === $index" v-bind:key="$index + 1">{{n}}</span>
                          </transition-group>
                          </div>
                          <div class="card-item__name" v-else key="2">Full Name</div>
                      </transition>
                      </label>
                      <div class="card-item__date" ref="cardDate">
                      <label for="cardMonth" class="card-item__dateTitle">Expires</label>
                      <label for="cardMonth" class="card-item__dateItem">
                          <transition name="slide-fade-up">
                          <span v-if="cardMonth" v-bind:key="cardMonth">{{cardMonth}}</span>
                          <span v-else key="2">MM</span>
                          </transition>
                      </label>
                      /
                      <label for="cardYear" class="card-item__dateItem">
                          <transition name="slide-fade-up">
                          <span v-if="cardYear" v-bind:key="cardYear">{{String(cardYear).slice(2,4)}}</span>
                          <span v-else key="2">YY</span>
                          </transition>
                      </label>
                      </div>
                  </div>
                  </div>
              </div>
              <div class="card-item__side -back">
                  <div class="card-item__cover">
                    <img src="@/assets/images/ATM_Card_3.png" class="card-item__bg">
                  </div>
                  <div class="card-item__band"></div>
                  <div class="card-item__cvv">
                      <div class="card-item__cvvTitle">CVV</div>
                      <div class="card-item__cvvBand">
                      <span v-for="(n, $index) in cardCvv" :key="$index">
                          *
                      </span>

                  </div>
                      <div class="card-item__type">
                          <img v-bind:src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + getCardType + '.png'" v-if="getCardType" class="card-item__typeImg">
                      </div>
                  </div>
              </div>
              </div>
          </div>
          <div class="card-form__inner text-left">
              <div class="card-input">
                <label for="circle_card_id" class="card-input__label">Circle Card ID</label>
                <input readonly type="text" class="c-field__input" v-model="$route.params.id">
              </div>
              <div class="card-input">
                <label for="cardNumber" class="card-input__label">Address Line 1</label>
                <input readonly type="text" class="c-field__input" v-model="addressLine1">
              </div>
              <div class="card-input" v-show="addressLine2">
                <label for="cardNumber" class="card-input__label"  >Address Line 2 (Optional)</label>
                <input readonly type="text" class="c-field__input" v-model="addressLine2" >
              </div>
              <div class="card-form__row gap-3">
                <div class="flex gap-3">
                    <div class="card-form__group">
                      <label for="district" class="card-input__label">District</label>
                      <input type="text" class="c-field__input" v-model="district" readonly>
                    </div>
                    <div class="card-form__group">
                      <label for="city" class="card-input__label" >City</label>
                      <input type="text" class="c-field__input" v-model="city" readonly>
                    </div>
                </div>
                <div class="-cvv">
                    <div class="card-input">
                    <label for="postalCode" class="card-input__label">Postal Code</label>
                    <input type="text" class="c-field__input"  v-mask="'#####'" maxlength="5" v-model="postalCode" readonly>
                    </div>
                </div>
              </div>
             
              <button
                v-if="cashin === false"
                class="c-button w-full block text-center"
                @click="cashin=true"
              >
                Add Funds
              </button>
              <div v-else>
                <form @submit.prevent="submit">
                  <div class="card-input">
                    <label for="amount" class="card-input__label">Enter your desired amount</label>
                    <input type="text" class="c-field__input" v-model="amount" v-mask="'########'" masked="false">
                  </div>
                  <div class="flex gap-3">
                    <button
                      class="c-button v--danger w-full block text-center"
                      @click="cashin=false"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      :disabled="amount == 0"
                      class="c-button w-full block text-center"
                      :class="{ 'v--disabled': amount == 0 }"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
          </div>
      </form>
    </div>
</template>
<script>
import Vue from 'vue'
// import {
//   required,
//   minLength,
// } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  created(){
        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        console.log('circle id: '+this.$route.params.id);
        axios
          .get(`https://api.swipebitnetwork.com/v1/cards/get/`+ this.$route.params.id)
          .then((response) => {
            this.cardDetails = response.data.data;
            console.log(response.data.data)
            this.cardMonth = this.cardDetails.details.expiration_month
            this.cardYear = this.cardDetails.details.expiration_year
            this.cardName = this.cardDetails.details.billing_details.name
            this.district = this.cardDetails.details.billing_details.district
            this.addressLine1 = this.cardDetails.details.billing_details.line1 
            this.addressLine2  = this.cardDetails.details.billing_details.line2 
            this.postalCode = this.cardDetails.details.billing_details.postalCode 
            this.city = this.cardDetails.details.billing_details.city
            this.cardNumber = '4007 4100 0000 ' + this.cardDetails.last_four
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
    data() {
      return {
        currentCardBackground: Math.floor(Math.random()* 25 + 1), // just for fun :D
        cardDetails: null,
        cardName: "",
        cardNumber: "",
        cardMonth: "",
        cardYear: "",
        cardCvv: "", 
        district: "MA", 
        addressLine1: "", 
        addressLine2 : "", 
        postalCode: "", 
        city: "", 
        StatesInUs: null,
        minCardYear: new Date().getFullYear(),
        amexCardMask: "#### ###### #####",
        otherCardMask: "#### #### #### ####",
        cardNumberTemp: "",
        isCardFlipped: false,
        focusElementStyle: null,
        isInputFocused: false,
        amount: 0,
        cashin: false,
      };
    },
  mounted() {
    this.cardNumberTemp = this.otherCardMask;
    // document.getElementById("cardNumber").focus();
  },
  computed: {
    getCardType () {
      const number = this.cardNumber;
      let re = new RegExp("^4");
      if (number.match(re) != null) return "visa";

      re = new RegExp("^(34|37)");
      if (number.match(re) != null) return "amex";

      re = new RegExp("^5[1-5]");
      if (number.match(re) != null) return "mastercard";

      re = new RegExp("^6011");
      if (number.match(re) != null) return "discover";
      
      re = new RegExp('^9792')
      if (number.match(re) != null) return 'troy'

      return "visa"; // default type
    },
		generateCardNumberMask () {
			return this.getCardType === "amex" ? this.amexCardMask : this.otherCardMask;
    },
    minCardMonth () {
      if (this.cardYear === this.minCardYear) return new Date().getMonth() + 1;
      return 1;
    }
  },
  watch: {
    cardYear () {
      if (this.cardMonth < this.minCardMonth) {
        this.cardMonth = "";
      }
    }
  },
  methods: {
    flipCard (status) {
      this.isCardFlipped = status;
    },
    focusInput (e) {
      this.isInputFocused = true;
      const targetRef = e.target.dataset.ref;
      const target = this.$refs[targetRef];
      this.focusElementStyle = {
        width: `${target.offsetWidth}px`,
        height: `${target.offsetHeight}px`,
        transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`
      }
    },
    blurInput() {
      setTimeout(() => {
        if (!this.isInputFocused) {
          this.focusElementStyle = null;
        }
      }, 300);
      this.isInputFocused = false;
    },
    goBack(){
        window.location.replace("/cards");
    },
    async submit(){
        try {
          /* eslint-disable  */
        // this.$v.$touch();
          axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');
          axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
          console.log(this.amount,this.cardDetails.circle_card_id)
          await axios
            .post(`https://api.swipebitnetwork.com/v1/transactions/add/funds`, {
              amount: this.amount,
              card_id: this.$route.params.id,
            })
            .then((response) => {
              console.log(response.data);
              if (response.data.status == 'pending'){
                response.data.message = 'Transaction is now pending and still being processed.';
              }
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

<style scoped>
  @import '~@/assets/css/custom/credit-card.css';
</style>