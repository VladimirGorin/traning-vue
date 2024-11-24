<template>
    <Header />
    <div class="main">
        <router-view />
    </div>
</template>
<script>
import Header from '@/components/Header.vue';

export default {
    components: {
        Header
    }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;

    text-decoration: none;
    color: black;
}

input,
button {
    width: 100%;
    height: 40px;
    font-size: 20px;
    padding: 0 10px;
}

.main {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 30px;
    padding: 30px 40px;
}
</style>
