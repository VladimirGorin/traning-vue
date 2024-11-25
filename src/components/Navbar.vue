<template>
  <div class="navbar">
    <ul>
      <GreenLi @click="$router.push('/')">Главная</GreenLi>
      <GreenLi @click="$router.push('/posts')">Посты</GreenLi>
      <GreenLi @click="$router.push('/about')">О нас</GreenLi>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  width: fit-content;
}

.navbar > ul {
  display: flex;
  align-items: center;
  gap: 20px;
}

.navbar > ul > li {
  list-style-type: none;
  width: max-content;
  cursor: pointer;
}
</style>
