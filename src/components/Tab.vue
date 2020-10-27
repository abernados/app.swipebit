<template>
    <div class="bg-white px-24 py-6 border-b-2 ">
        <ul class="flex">
            <li class="mr-6"
                :class="{'border-gray-800 border-b-2 text-gray-800 font-bold': checkRoute('Home'),'text-gray-500': !checkRoute('Home')}"
            >
                <a class="hover:text-blue-800" href="/">Wallet</a>
            </li>
            <li class="mr-6"
                :class="{'border-gray-800 border-b-2 text-gray-800 font-bold': checkRoute('CashIn'),'text-gray-500': !checkRoute('CashIn')}"
            >                
            <a class=" hover:text-blue-800" href="/">Cash In</a>
            </li>
            <li class="mr-6"
                :class="{'border-gray-800 border-b-2 text-gray-800 font-bold': checkRoute('SendMoney'),'text-gray-500': !checkRoute('SendMoney')}"
            >                
            <a class=" hover:text-blue-800" href="/">Send Money</a>
            </li>
            <li class="mr-6"
                :class="{'border-gray-800 border-b-2 text-gray-800 font-bold': checkRoute('Transactions'),'text-gray-500': !checkRoute('Transactions')}"
            >                
            <a class=" hover:text-blue-800" href="/">Transactions</a>
                <!-- <span class="bg-red-500 font-semibold inline-block ml-2 px-2 rounded-full text-white text-xs tracking-wide">2</span> -->
            </li>
            <li class="mr-6"
                :class="{'border-gray-800 border-b-2 text-gray-800 font-bold': checkRoute('Cards'),'text-gray-500': !checkRoute('Cards')}"
            >                
            <a class=" hover:text-blue-800" href="/cards">Cards</a>
            </li>
        </ul>
    </div>
</template>

<script>
    /* eslint-disable  */
    export default {
        methods: {
            checkRoute(routeName) {
                return this.$route.matched.some(({ name }) => name === routeName)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>