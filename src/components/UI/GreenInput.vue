<template lang="">
      <input :value="value" @input="onChange" />
</template>
<script>
export default {
    name: "GreenInput",

    props: {
        value: [String, Number]
    },

    methods: {
        onChange(event) {
            this.$emit("update:value", event.target.value)
        }
    }


}
</script>
<style lang="">

</style>
