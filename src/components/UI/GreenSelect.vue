<template>
    <select class="greenSelect" :value="selectValue" @change="changeOption">
        <option value="" disabled >Выберете значение</option>
        <option v-for="option in options" :key="option.value" :value="option.value" >{{ option.name }}</option>
    </select>
</template>
<script>
export default {
    name: "GreenSelect",
    props: {
        selectValue: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            default: () => [],
            required: true
        }
    },
    methods: {
        changeOption(event) {
            this.$emit("update:selectValue", event.target.value)
        }
    }
}
</script>
<style scoped>
    .greenSelect{
        width: fit-content;
        min-width: 200px;
        height: fit-content;
        border: 1px solid teal;
        background-color: transparent;
        font-size: 17px;
        padding: 10px;
    }
</style>
