<template>
    <!-- eslint-disable -->
    <div class="wrapper" id="app">
       <form class="card-form" @submit.prevent="submit">
          <div class="card-list">
              <div class="card-item" v-bind:class="{ '-active' : isCardFlipped }">
              <div class="card-item__side -front">
                  <div class="card-item__focus" v-bind:class="{'-active' : focusElementStyle }" v-bind:style="focusElementStyle" ref="focusElement"></div>
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
                              v-if="$index > 4 && $index < 15 && cardNumber.length > $index && n.trim() !== ''"
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
                      <!-- <label for="cardName" class="card-item__info" ref="cardName">
                      <div class="card-item__holder">Card Holder</div>
                      <transition name="slide-fade-up">
                          <div class="card-item__name" v-if="cardName.length" key="1">
                          <transition-group name="slide-fade-right">
                              <span class="card-item__nameItem" v-for="(n, $index) in cardName.replace(/\s\s+/g, ' ')" v-if="$index === $index" v-bind:key="$index + 1">{{n}}</span>
                          </transition-group>
                          </div>
                          <div class="card-item__name" v-else key="2">Full Name</div>
                      </transition>
                      </label> -->
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
                <label for="cardNumber" class="card-input__label" 
                :class="{'text-red-600': $v.cardNumber.$error}">Card Number</label>
                <input 
                  type="text" 
                  id="cardNumber" 
                  class="c-field__input" 
                  :class="{'border-red-600 border-2': $v.cardNumber.$error,}"
                  v-mask="generateCardNumberMask" 
                  v-model="cardNumber" 
                  v-on:focus="focusInput" 
                  v-on:blur="blurInput" 
                  data-ref="cardNumber" 
                  autocomplete="off">
                  <ul v-if="$v.$error" class="flex mt-1">
                      <li
                          class="text-red-600 mb-2 text-xs"
                          v-if="!$v.cardNumber.required"
                      >
                          <strong>This field is required</strong>
                      </li>
                      <li
                          class="text-red-600 mb-2 text-xs"
                          v-else-if="!$v.cardNumber.minLength"
                          >
                            <strong>Please enter correct length of card number </strong>
                      </li>
                  </ul>
              </div>
              <!-- <div class="card-input">
              <label for="cardName" class="card-input__label">Card Holders</label>
              <input type="text" id="cardName" class="c-field__input" v-model="cardName" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardName" autocomplete="off">
              </div> -->
              <div class="card-form__row">
                <div class="card-form__col">
                    <div class="card-form__group">
                    <label for="cardMonth" class="card-input__label" :class="{'text-red-600': $v.cardMonth.$error}">Expiration Date</label>
                    <select class="card-input__input -select" id="cardMonth" v-model="cardMonth" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardDate">
                        <option value="" disabled selected>Month</option>
                        <!-- eslint-disable-next-line no-mixed-spaces-and-tabs -->
                        <option v-bind:value="n < 10 ? '0' + n : n" v-for="n in 12" v-bind:disabled="n < minCardMonth" v-bind:key="n">{{n<10 ? '0' + n : n}}</option>
                    </select>
                    <select class="card-input__input -select" id="cardYear" v-model="cardYear" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardDate">
                        <option value="" disabled selected>Year</option>
                        <option v-bind:value="$index + minCardYear" v-for="(n, $index) in 12" v-bind:key="n">
                            {{$index + minCardYear}}
                        </option>
                    </select>
                    <ul v-if="$v.$error" class="flex mt-1">
                      <li
                          class="text-red-600 mb-2 text-xs"
                          v-if="!$v.cardYear.required || !$v.cardMonth.required"
                      >
                          <strong>This field is required</strong>
                      </li>
                    </ul>
                    </div>
                </div>
                <div class="card-form__col -cvv">
                    <div class="card-input">
                    <label for="cardCvv" class="card-input__label"  :class="{'text-red-600': $v.cardCvv.$error}">CVV</label>
                    <input type="text" class="c-field__input" id="cardCvv" v-mask="'####'" maxlength="4" v-model="cardCvv" v-on:focus="flipCard(true)" v-on:blur="flipCard(false)" autocomplete="off"
                    :class="{'border-red-600 border-2': $v.cardCvv.$error,}">
                    <ul v-if="$v.$error" class="flex mt-1">
                      <li
                          class="text-red-600 mb-2 text-xs"
                          v-if="!$v.cardCvv.required"
                      >
                          <strong>This field is required</strong>
                      </li>
                    </ul>
                    </div>
                </div>
              </div>
              <div class="card-input">
                <label for="cardNumber" class="card-input__label"  :class="{'text-red-600': $v.addressLine1.$error}">Address Line 1</label>
                <input type="text" class="c-field__input" v-model="addressLine1" :class="{'border-red-600 border-2': $v.addressLine1.$error,}">
                <ul v-if="$v.$error" class="flex mt-1">
                    <li
                        class="text-red-600 mb-2 text-xs"
                        v-if="!$v.addressLine1.required"
                    >
                        <strong>This field is required</strong>
                    </li>
                  </ul>
              </div>
              <div class="card-input">
                <label for="cardNumber" class="card-input__label"  >Address Line 2 (Optional)</label>
                <input type="text" class="c-field__input" v-model="addressLine2" >
              </div>
              <div class="card-form__row">
                <div class="card-form__col flex gap-3">
                    <div class="card-form__group">
                      <label for="district" class="card-input__label"  :class="{'text-red-600': $v.district.$error}">District</label>
                      <input type="text" class="c-field__input" v-model="district" :class="{'border-red-600 border-2': $v.district.$error,}" placeholder="e.g. NY">
                      <ul v-if="$v.$error" class="flex mt-1">
                        <li
                            class="text-red-600 mb-2 text-xs"
                            v-if="!$v.district.required"
                        >
                            <strong>This field is required</strong>
                        </li>
                      </ul>
                    </div>
                    <div class="card-form__group">
                      <label for="city" class="card-input__label"  :class="{'text-red-600': $v.city.$error}">City</label>
                      <input type="text" class="c-field__input" v-model="city" :class="{'border-red-600 border-2': $v.city.$error,}">
                      <ul v-if="$v.$error" class="flex mt-1">
                        <li
                            class="text-red-600 mb-2 text-xs"
                            v-if="!$v.city.required"
                        >
                            <strong>This field is required</strong>
                        </li>
                      </ul>
                    </div>
                </div>
                <div class="card-form__col -cvv">
                    <div class="card-input">
                    <label for="postalCode" class="card-input__label">Postal Code</label>
                    <input type="text" class="c-field__input"  v-mask="'#####'" maxlength="5" v-model="postalCode">
                    </div>
                </div>
              </div>

              <button
                type="submit"
                :disabled="$v.$invalid"
                class="c-button w-full"
                :class="{ 'v--disabled': $v.$invalid }"
              >
                Sign in
              </button>
          </div>
      </form>
    </div>
</template>
<script>
import Vue from 'vue'
import {
  required,
  minLength,
} from "vuelidate/lib/validators";
import axios from "axios";
export default {
  created(){
    (async () => {
        const response = await fetch(
          'https://parseapi.back4app.com/classes/Uszipcode_US_Zip_Code?limit=0&order=State&keys=State,US_Zip_Code,country',
          {
            headers: {
              'X-Parse-Application-Id': 'bx1jAaGOfAegUwtrIWcGSy030O7fpR5Hs9gzKeTq', // This is your app's application id
              'X-Parse-REST-API-Key': '02TCQhAtWPRnGT8bdXOXAdxAD7vZ9dhRLn1XQkzu', // This is your app's REST API key
            }
          }
        );
        const data = await response.json(); // Here you have the data that you need
        console.log(JSON.stringify(data, null, 2));
      })();
  },
    data() {
    return {
      currentCardBackground: Math.floor(Math.random()* 25 + 1), // just for fun :D
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
      isInputFocused: false
    };
  },
  validations: {
    cardNumber: { required,minLength: minLength(18) },
    cardMonth: { required },
    cardYear: { required },
    cardCvv: { required },
    district: { required },
    addressLine1: { required },
    postalCode: { required },
    city: { required },
  },
  mounted() {
    this.cardNumberTemp = this.otherCardMask;
    document.getElementById("cardNumber").focus();
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
      this.$v.$touch();
        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');

        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        await axios
          .post(`https://api.swipebitnetwork.com/v1/cards/add`, {
            number: this.cardNumber.replaceAll(' ',''),
            cvv: this.cardCvv,
            exp_month: this.cardMonth,
            exp_year: this.cardYear,
            district: this.district,
            address_line_1: this.addressLine1,
            address_line_2 : this.addressLine2,
            postal_code: this.postalCode,
            city: this.city,
          })
          .then((response) => {

             let toast = Vue.toasted.show('Successfully created a new card.',{
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