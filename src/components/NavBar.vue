<template>
    <div>
        <nav class="flex items-center justify-between flex-wrap bg-white px-24 py-3 border-b">
            <div class="flex items-center flex-shrink-0 text-white mr-6 ">
                <img src="@/assets/swipebit-logo-wot.png" alt="SwipeBit" width="54" height="54">
                <span class="tracking-tight font-logo">bit</span>
            </div>
            <div class="block ml-auto relative">
                <div class="block">
                    <img src="@/assets/images/person.jpg" alt="Avatar" class="c-avatar v--small v--circle object-cover inline-block">
                    <button type="button" class="inline-block text-sm px-4 py-2 leading-none mt-4 lg:mt-0 outline-none focus:outline-none" @click="isOpen = !isOpen">Janella
                        <font-awesome-icon :icon="['fas', icon]" class="ml-2"/>
                    </button>
                </div>
                <button v-if="isOpen" @click="isOpen = false" type="button" tabindex="-1" class="fixed inset-0 h-full w-full cursor-default"></button>
                <div v-if="isOpen" class="absolute right-0 border text-sm mt-2 py-2 w-48 bg-white rounded-lg shadow-xl text-left">
                    <a class="block px-4 py-2 text-gray-800 hover:bg-blue-medium hover:text-white" href="#">Account</a>
                    <a class="block px-4 py-2 text-gray-800 hover:bg-blue-medium hover:text-white" href="#">Settings</a>
                    <a class="block px-4 py-2 text-gray-800 hover:bg-blue-medium hover:text-white" href="#">Sign out</a>
                </div>

            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isOpen: false,
            }
        },
        computed: {
            icon() {
                return (this.isOpen ? 'angle-up' : 'angle-down');
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>