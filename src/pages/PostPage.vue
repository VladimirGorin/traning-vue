<template>
    <div class="post">
      <div class="post-data">
        <div class="post-id">
          <p>№ {{ postId }}</p>
          <br />
        </div>
        <div class="post-title">
          <h4>Заголовок: Тайтл</h4>
        </div>
        <div class="post-description">
          <h4>Описание:</h4>
          <br />
          <p>Дескриптион</p>
        </div>
      </div>
    </div>
  </template>
  <script>

  export default {
    props: {
        posts: {
            type: () => [],
            required: true
        }
    },
    data() {
        return {
            postId: this.$route.params?.id
        }
    }
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

  .post-manage{
      width: 15%;
  }
  </style>
