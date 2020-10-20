<template>
    <div>
        <nav class="flex items-center justify-between flex-wrap bg-white px-24 py-3 border-b">
            <div class="flex items-center flex-shrink-0 text-white mr-6 ">
                <img src="@/assets/swipebit-logo-wot.png" alt="SwipeBit" width="54" height="54">
                <span class="tracking-tight font-logo">bit</span>
            </div>
            <div class="block ml-auto relative">
                <div class="block">
                    <img src="@/assets/images/avatar.svg" alt="Avatar" class="c-avatar v--small v--circle object-cover inline-block">
                    <button type="button" class="inline-block text-sm px-4 py-2 leading-none mt-4 lg:mt-0 outline-none focus:outline-none" @click="isOpen = !isOpen">Janella
                        <font-awesome-icon :icon="['fas', icon]" class="ml-2"/>
                    </button>
                </div>
                <button v-if="isOpen" @click="isOpen = false" type="button" tabindex="-1" class="fixed inset-0 h-full w-full cursor-default"></button>
                <div v-if="isOpen" class="absolute right-0 border text-sm mt-2 py-2 w-auto bg-white rounded-lg shadow-xl text-left w-full">
                    <a class="block px-4 py-2 text-gray-800 hover:bg-blue-medium hover:text-white" href="/my-profile">My profile</a>
                    <!-- <a class="block px-4 py-2 text-gray-800 hover:bg-blue-medium hover:text-white" href="#">Settings</a> -->
                    <button class="block px-4 py-2 text-gray-800 hover:bg-blue-medium hover:text-white w-full text-left" @click="logout">Sign out</button>
                </div>

            </div>
        </nav>
    </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

    export default {
        data() {
            return {
                isOpen: false,
                userAccount: localStorage.getItem('userDetails')
            }
        },
        computed: {
            icon() {
                return (this.isOpen ? 'angle-up' : 'angle-down');
            }
        },
        methods: {
            logout(){
                console.log(localStorage.getItem('access_token'));
                try {
                    /* eslint-disable  */
                    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
                    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');
                    axios
                    .post(`https://api.swipebitnetwork.com/v1/auth/logout`)
                    .then((response) => {
                        console.log(response.data);
                          this.$toast.open({
                            message: response.data.message,
                            type: "success",
                            duration: 3000,
                            dismissible: true,
                            position: "top-right",
                            pauseOnHover: true,
                        });
                        localStorage.removeItem('access_token');
                        localStorage.removeItem('user');
                        window.location.replace('/login');
                    })
                    .catch((error) => {
                        console.log("Your error is: " + error.response.data);
                        console.info(error.config);
                    });
                } catch ( response ) {
                    console.log("Your error is 2: " + response);
                }
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>