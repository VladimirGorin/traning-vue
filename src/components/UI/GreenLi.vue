<template>
    <li>
        <slot></slot>
    </li>
</template>
<script>
export default {
    name: "GreenLi"
}
</script>
<style scoped>
li {
    border: 2px solid teal;
    padding: 15px;
    font-size: 19px;
}
</style>
