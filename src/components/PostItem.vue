<template>
    <div class="post">
        <div class="post-id">
            <p>№{{ post?.id }}</p>
            <br>
        </div>
        <div class="post-title">
            <h4>Заголовок: {{ post.title }}</h4>
        </div>
        <div class="post-description">
            <h4>Описание:</h4>
            <br>
            <p>{{ post.description }}</p>
        </div>
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
    gap: 10px;
}
</style>
