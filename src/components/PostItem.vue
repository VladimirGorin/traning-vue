<template>
    <div>
        <div class="post-title">{{ post.title }}</div>
        <div class="post-description">{{ post.description }}</div>
    </div>
</template>
<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>
<style>
.post {
    width: 100%;
    border: 2px solid teal;
    padding: 20px;

    display: flex;
    flex-direction: column;
    gap: 40px;
}
</style>
