<template>
    <PostItem @deletePost="$emit('deletePost', post?.id)" v-for="(post) in posts" :key="post.id" :post="post" />
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

.posts {
    display: flex;
    flex-direction: column;
    gap: 40px;

    width: 100%;
}
</style>
