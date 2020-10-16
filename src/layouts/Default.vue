<template>
    <div class="bg-gray-200">
        <nav-bar />
        <tab />

        <div class="px-24">
            <slot />
        </div>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar.vue';
    import Tab from '@/components/Tab.vue';
    export default {
        components: { NavBar, Tab }
    }
</script>

<style lang="scss" scoped>

</style>