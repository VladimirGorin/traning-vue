<template>
  <form @submit.prevent class="add-post">
    <input type="text" v-model="postTitle" />
    <input type="text" v-model="postDescription" />

    <p v-if="postStatus" class="alert success">Успешно добавлен!</p>
    <p v-if="postFillStatus" class="alert error">Вы не заполнили поля!</p>

    <button @click="createPost">Создать пост</button>
  </form>
</template>
<script>
export default {

  data() {
    return {
      postDescription: "",
      postTitle: "",
      postStatus: false,
      postFillStatus: false
    }
  },

  methods: {
    createPost() {

      if (this.postTitle.trim() && this.postDescription.trim()) {
        const post = { title: this.postTitle, description: this.postDescription }

        this.$emit("createPost", post)

        this.postTitle = ""
        this.postDescription = ""

        this.postStatus = true

        setTimeout(() => {
          this.postStatus = false
        }, 5000);
      } else {

        this.postFillStatus = true

        setTimeout(() => {
          this.postFillStatus = false
        }, 5000);
      }
    }
  }
};
</script>
<style>
.add-post {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
</style>
