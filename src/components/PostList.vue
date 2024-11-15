<template>
    <PostItem v-for="(post, index) in posts" :key="index" :post="post" />
</template>
<script>
import PostItem from './PostItem.vue';

export default {
    components: {
        PostItem
    },
    props:{
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>
<style>
.alert {
    font-size: 19px;
    font-weight: bold;
}

.alert.success {
    color: green;
}

.alert.error {
    color: red;
}

.posts {
    display: flex;
    flex-direction: column;
    gap: 40px;

    width: 100%;
}
</style>
