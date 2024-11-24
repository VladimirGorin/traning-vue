<template>
    <div class="header">
        <div class="h2">Vue 3</div>
        <Navbar />
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';

export default {
    components: {
        Navbar
    }
}
</script>
<style scoped>
    .header{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0 15px;
        background-color: rgba(161, 156, 149, 0.582);
    }
</style>
