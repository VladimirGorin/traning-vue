<template>
  <div class="post">
    <div class="post-data">
      <div class="post-id">
        <p>№{{ post?.id }}</p>
        <br />
      </div>
      <div class="post-title">
        <h4>Заголовок: {{ post.title }}</h4>
      </div>
      <div class="post-description">
        <h4>Описание:</h4>
        <br />
        <p>{{ post.description }}</p>
      </div>
    </div>
    <div class="post-manage">
      <GreenButton @click="$router.push(`/posts/${post?.id}`)"
        >Открыть</GreenButton
      >
      <GreenButton @click="$emit('deletePost', post?.id)">Удалить</GreenButton>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
.post {
  width: 100%;
  border: 2px solid teal;
  padding: 20px;

  display: flex;
  flex-direction: row;
  gap: 10px;
}

.post-manage {
  width: 15%;
  display: flex;
  gap: 20px;
  flex-direction: column;
}
</style>
