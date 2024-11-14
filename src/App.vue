<template>
    <PostForm @createPost="createPost" />
    <div class="posts">
        <PostList :posts="posts" />
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
    components: {
        PostForm, PostList
    },
    data() {
        return {
            posts: []
        }
    },

    methods: {
        createPost(post) {
            this.posts.push(post)
        }
    }

}

</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
}

input,
button {
    width: 100%;
    height: 40px;
    font-size: 20px;
}

#app {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 30px;
    padding: 30px 40px;
}
</style>
