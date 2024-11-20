<template>
    <TextAlertSuccess v-if="alerts.postAddStatus" class="alert success">Успешно добавлен!</TextAlertSuccess>
    <TextAlertSuccess v-if="alerts.postDeleteStatus" class="alert success">Успешно удалён!</TextAlertSuccess>
    <TextAlertError v-if="alerts.postDeleteNotFound" class="alert error">
        Пост с таким ID не найден!
    </TextAlertError>
    <TextAlertError v-if="alerts.postDeleteNotNumber" class="alert error">ID должен быть числом!</TextAlertError>
    <TextAlertError v-if="alerts.postFillStatus" class="alert error">Вы не заполнили поля!</TextAlertError>
</template>
<script>
export default {
    props: {
        alerts: {
            type: Object,
            required: true,
        }
    },
};
</script>
<style></style>
