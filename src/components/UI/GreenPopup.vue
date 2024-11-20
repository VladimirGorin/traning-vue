<template>
    <div v-show="popupShow" @click="closePopup"  class="popup">
        <div @click.stop  class="popup-container">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "GreenPopup",
    props: {
        popupShow: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        closePopup(){
            this.$emit("update:popupShow", false)
        }
    }
}
</script>
<style scoped>
.popup {
    top: 0;
    left: 0;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.800);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.popup-container{
    background-color: white;
    border: 1px solid teal;
    padding: 20px;
    max-width: 800px;
    max-height: 400px;
    height: 100%;
    border-radius: 15px;
}

</style>
