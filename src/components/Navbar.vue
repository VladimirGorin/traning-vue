<template>
  <div class="navbar">
    <ul>
      <GreenLi
        v-for="(route, index) in $router.getRoutes()"
        :key="index"
        @click="$router.push(route.path)"
      >
        {{ route?.name }}
      </GreenLi>
    </ul>
  </div>
</template>

<script>
export default {
};
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
