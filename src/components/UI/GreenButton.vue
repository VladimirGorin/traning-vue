<template>
    <button><slot></slot></button>
</template>
<script>
export default {
    name: "GreenButton"
}
</script>
<style scoped>
button {
    border: 1px solid teal;
    background: transparent;
    height: fit-content;
}
</style>
