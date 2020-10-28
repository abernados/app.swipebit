<template>
    <div>
        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
            <div class="flex justify-between">
                <h3 class="text-lg leading-6 font-medium text-gray-900">Profile Picture</h3>
            </div>
            <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">You may change your avatar here.</p>
        </div>
        <div>
        </div>
    </div>
</template>

<script>
import moment from "moment";

export default {
    data(){
        return{
            user: JSON.parse(localStorage.getItem('user')),
            moment: moment
        }
    }
}
</script>

<style>

</style>