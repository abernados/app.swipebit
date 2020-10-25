<template>
    <section class="o-page gap-4">
        <div class="text-left pb-4">
        <p class="text-2xl text-gray-500">My Profile</p>
        </div>
        <div class="grid grid-rows-8 grid-cols-6 gap-4">
        <div class=" col-span-12">
            <div class="" style="">
                <div class="bg-gray-100 flex gap-8 px-8">
                    <div class="w-1/4 py-8">
                        <div class="max-w-4xl mx-auto">
                            <div class=" overflow-hidden text-left">
                                <div class="px-4 py-3 sm:px-6"
                                    :class="{
                                        'bg-white border-yellow-dark border-l-4': $route.matched.some(({ name }) => name === 'MyProfile.View'),
                                    }">
                                    
                                    <h3 class="text-md"
                                        :class="{
                                            'font-bold text-blue-dark': $route.matched.some(({ name }) => name === 'MyProfile.View'),
                                            'font-medium text-gray-900': !$route.matched.some(({ name }) => name === 'MyProfile.View'),
                                        }">
                                        <router-link to="/profile/account">My Account</router-link>
                                    </h3>
                                </div>
                                <div class="px-4 py-3 sm:px-6"
                                    :class="{
                                        'bg-white border-yellow-dark border-l-4': $route.matched.some(({ name }) => name === 'ProfilePicture.View'),
                                    }">
                                    <h3 class="text-md"
                                        :class="{
                                            'font-bold text-blue-dark': $route.matched.some(({ name }) => name === 'ProfilePicture'),
                                            'font-medium text-gray-900': !$route.matched.some(({ name }) => name === 'ProfilePicture'),
                                        }">
                                        <router-link to="/profile/picture">Profile Picture</router-link>
                                        
                                    </h3>
                                </div>
                                <div class="px-4 py-3 sm:px-6 ">
                                    <h3 class="text-md"
                                    :class="{
                                            'font-bold text-blue-dark': $route.matched.some(({ name }) => name === 'Password'),
                                            'font-medium text-gray-900': !$route.matched.some(({ name }) => name === 'Password'),
                                        }">
                                        <router-link to="/profile/password">Password Management</router-link>
                                    </h3>
                                </div>
                                <div class="px-4 py-3 sm:px-6">
                                    <h3 class="text-md leading-6 font-medium text-gray-900">
                                        OTP Mode Settings
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-3/4 py-8 ">
                        <div class="max-w-4xl mx-auto">
                            <div class="bg-white shadow overflow-hidden sm:rounded-lg text-left">
                                <router-view :key="$route.path"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
import moment from "moment";

export default {
    name: '',
    data(){
        return{
            user: JSON.parse(localStorage.getItem('user')),
            moment: moment
        }
    },
}
</script>