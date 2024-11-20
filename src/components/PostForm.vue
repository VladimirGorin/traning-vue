<template>
  <div class="manage-posts">
    <form @submit.prevent @submit="createPost" class="add-post post-from">
      <GreenInput placeholder="Введите Заголовок" type="text" v-model:value="postTitle" />
      <GreenInput placeholder="Введите Описание" type="text" v-model:value="postDescription" />

      <GreenButton>Создать пост</GreenButton>
    </form>

    <form @submit.prevent @submit="deletePost" class="delete-post post-from">
      <GreenInput placeholder="Введите ID" type="number" v-model:value="postDeleteId" />

      <GreenButton>Удалить пост</GreenButton>
    </form>
  </div>
</template>
<script>

export default {
  data() {
    return {
      postDescription: "",
      postTitle: "",
      postDeleteId: "",
    };
  },

  methods: {
    createPost() {
      if (this.postTitle.trim() && this.postDescription.trim()) {
        const post = {
          id: Date.now(),
          title: this.postTitle,
          description: this.postDescription,
        };

        this.$emit("createPost", post);

        this.postTitle = "";
        this.postDescription = "";
      } else {
        this.$emit("fillDataError")
      }
    },
    async deletePost() {
      if (this.postDeleteId) {
        this.$emit("deletePost", this.postDeleteId);
        this.postDeleteId = "";
      } else {
        this.$emit("fillDataError")
      }
    }

  },
};
</script>
<style>
.manage-posts {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}

.post-from {
  border: 1px solid teal;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

.add-post {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
</style>
