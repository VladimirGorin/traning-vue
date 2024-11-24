<template>
    <div class="manage-form">
        <GreenButton style="width: fit-content" @click="popups.managePostsPopupShow = !popups.managePostsPopupShow">
            Управление постами</GreenButton>

        <GreenInput placeholder="Поиск..." v-model:value="postsSettings.searchQuery" />

        <GreenSelect :options="postsSettings.sortOptions" v-model:selectValue="postsSettings.sortSelectedValue" />

        <GreenPopup v-model:popupShow="popups.managePostsPopupShow">
            <PostForm @createPost="createPost" @deletePost="deletePost" @fillDataError="fillDataError" />
        </GreenPopup>
    </div>

    <PostAlerts :alerts="alerts" />

    <div class="posts">
        <p v-if="postsSettings.isPostsLoading">Загрузка постов...</p>
        <PostList v-if="!postsSettings.isPostsLoading" @deletePost="deletePost" :posts="searchInSortedPosts" />
    </div>

    <div style="background-color: black;height: 40px;" ref="observer-posts" class="observer"></div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import PostAlerts from "@/components/PostAlerts.vue";
import { getData } from "./api/apiService.js";

export default {
    components: {
        PostForm,
        PostList,
        PostAlerts,
    },

    data() {
        return {
            popups: {
                managePostsPopupShow: false,
            },

            paginationSettings: {
                currentPage: 1,
                pageLimit: 10
            },

            postsSettings: {
                searchQuery: "",
                isPostsLoading: true,
                sortSelectedValue: "",
                sortOptions: [{ value: "id", name: "По ID" }, { value: "title", name: "По TITLE" }, { value: "description", name: "По DESCRIPTION" }]
            },
            posts: [],
            alerts: {
                postAddStatus: false,
                postDeleteNotFound: false,
                postDeleteStatus: false,
                postFillStatus: false,
                postDeleteNotNumber: false,
            },
            deletedStatus: false,
        };
    },

    methods: {
        fillDataError() {
            this.alerts.postFillStatus = true;

            setTimeout(() => {
                this.alerts.postFillStatus = false;
            }, 5000);
        },

        createPost(post) {
            this.posts.push(post);

            this.popups.managePostsPopupShow = false;
            this.alerts.postAddStatus = true;

            setTimeout(() => {
                this.alerts.postAddStatus = false;
            }, 5000);
        },

        deletePost(postId) {
            this.popups.managePostsPopupShow = false;

            if (!isFinite(postId)) {
                this.alerts.postDeleteNotNumber = true;
                setTimeout(() => {
                    this.alerts.postDeleteNotNumber = false;
                }, 5000);
                return;
            }

            const findPost = this.posts.find(
                (post) => Number(post?.id) === Number(postId)
            );

            if (findPost) {
                this.posts = this.posts.filter(
                    (post) => Number(post.id) !== Number(postId)
                );
                this.deletedStatus = true;
            } else {
                this.deletedStatus = false;
            }

            if (!this.deletedStatus) {
                this.alerts.postDeleteNotFound = true;
                setTimeout(() => {
                    this.alerts.postDeleteNotFound = false;
                }, 5000);
                return;
            }

            this.alerts.postDeleteStatus = true;
            setTimeout(() => {
                this.alerts.postDeleteStatus = false;
            }, 5000);
        },

        async getPosts() {
            try {
                let posts = await getData("/posts", {_limit: this.paginationSettings.pageLimit, _page:this.paginationSettings.currentPage});

                posts = posts.map((post) => {
                    post.description = post.body;

                    delete post.body;

                    return post;
                });

                this.posts = [...this.posts, ...posts];
            } catch (error) {
                alert(`Произошла ошибка при получении постов: ${error}`);
            } finally {
                this.postsSettings.isPostsLoading = false;
            }
        },

        observePosts() {
            const callback = async (entries, observer) => {
                if(entries[0].isIntersecting){
                    this.paginationSettings.currentPage += 1

                    console.log("Здесь", this.paginationSettings.currentPage)

                    await this.getPosts()
                }
            };

            const observer = new IntersectionObserver(callback, {
                rootMargin: "0px",
                threshold: 1.0,
            });

            observer.observe(this.$refs["observer-posts"])

        },
    },

    mounted() {
        this.getPosts().then(() => {
            this.observePosts();
        });

    },

    computed: {
        sortedPosts() {
            const sortBy = this.postsSettings.sortSelectedValue
            const posts_ = [...this.posts]

            if (sortBy) {
                if (sortBy === 'id') {
                    posts_.sort((a, b) => a[sortBy] - b[sortBy]);
                } else {
                    posts_.sort((a, b) => a[sortBy].length - b[sortBy].length)
                }
            }

            return posts_
        },

        searchInSortedPosts() {
            const posts_ = this.sortedPosts;
            const searchQuery = this.postsSettings.searchQuery.toLowerCase();

            const searchTitle = posts_.filter((post) =>
                post.title.toLowerCase().includes(searchQuery)
            );
            const searchDescription = posts_.filter((post) =>
                post.description.toLowerCase().includes(searchQuery)
            );


            const result = [...searchTitle, ...searchDescription].filter((post, index, array) =>
                index === array.findIndex((p) => p.id === post.id)
            )

            return result
        }

    }

};
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
    padding: 0 10px;
}

#app {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 30px;
    padding: 30px 40px;
}

.manage-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}
</style>
