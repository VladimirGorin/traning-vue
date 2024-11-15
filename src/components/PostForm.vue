<template>
  <div class="manage-posts">
    <form @submit.prevent @submit="createPost" class="add-post post-from">
      <input placeholder="Введите Заголовок" type="text" v-model="postTitle" />
      <input placeholder="Введите Описание" type="text" v-model="postDescription" />

      <button>Создать пост</button>
    </form>

    <form @submit.prevent @submit="deletePost" class="delete-post post-from">
      <input placeholder="Введите ID" type="number" v-model="postDeleteId" />

      <button>Удалить пост</button>
    </form>

    <p v-if="postAddStatus" class="alert success">Успешно добавлен!</p>
    <p v-if="postDeleteStatus" class="alert success">Успешно удалён!un</p>
    <p v-if="postDeleteNotFound" class="alert error">
      Пост с таким ID не найден!
    </p>
    <p v-if="postDeleteNotNumber" class="alert error">ID должен быть числом!</p>
    <p v-if="postFillStatus" class="alert error">Вы не заполнили поля!</p>
  </div>
</template>
<script>
export default {
  props: {
    deletedStatus: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      postDescription: "",
      postTitle: "",
      postDeleteId: "",

      postAddStatus: false,
      postDeleteNotFound: false,
      postDeleteStatus: false,
      postFillStatus: false,
      postDeleteNotNumber: false,
    };
  },

  methods: {
    fillDataError() {
      this.postFillStatus = true;

      setTimeout(() => {
        this.postFillStatus = false;
      }, 5000);
    },
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

        this.postAddStatus = true;

        setTimeout(() => {
          this.postAddStatus = false;
        }, 5000);
      } else {
        this.fillData();
      }
    },
    deletePost() {
      if (this.postDeleteId) {
        if (!isFinite(this.postDeleteId)) {
          this.postDeleteNotNumber = true;
          setTimeout(() => {
            this.postDeleteNotNumber = false;
          }, 5000);
          return;
        }

        this.$emit("deletePost", this.postDeleteId);

        console.log("Статус удаления из пропса:", this.deletedStatus);
        if (!this.deletedStatus) {
          this.postDeleteNotFound = true;
          setTimeout(() => {
            this.postDeleteNotFound = false;
          }, 5000);
          return;
        }

        // // Обновляем значение пропса через событие
        // this.$emit("update:deletedStatus", false);

        this.postDeleteId = "";
        this.postDeleteStatus = true;
        setTimeout(() => {
          this.postDeleteStatus = false;
        }, 5000);
      } else {
        this.fillDataError();
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
