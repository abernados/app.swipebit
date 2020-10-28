<template>
    <div class="">
        ewcfewfewf
        <div class="px-24 bg-white">
            <p>This is just a test</p>
        </div>
    </div>
</template>

<script>

export default {
    // layout: 'no-navbar',
    created(){
        console.log('hahahha');
    },
    data(){
        return{
            user: JSON.parse(localStorage.getItem('user')),
            balance: 0.00,
            loading: false
        }
    },
}
</script>