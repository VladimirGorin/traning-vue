<template>

    <div>
        <p>Кол-ов лайков: {{ likes }}</p>
        <p>Кол-ов дизлайков: {{ dislikes }}</p>

        <button v-on:click="addLike">Лайк</button>
        <button v-on:click="addDislike">Дизлайк</button>
    </div>

</template>
<script>

export default {
    data() {
        return {
            likes: 0,
            dislikes: 0
        }
    },

    methods: {
        checkVote(model) {
            if (model === "likes") {
                this.likes = 0
            } else if (
                model === "dislikes"
            ) {
                this.dislikes = 0
            }

        },

        addLike() {
            this.checkVote("dislikes")
            this.likes += 1
        },

        addDislike() {
            this.checkVote("likes")
            this.dislikes += 1
        }
    }
}

</script>
<style></style>
