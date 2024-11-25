
export default {
  name: "intersection",
  mounted(element, binding) {
    const observePosts = binding.value;
    observePosts(element)
  },
};
