<template>
  <div class="logo">
    <img
      alt="Swipebit logo"
      src="@/assets/logo2.png"
      class="mx-auto"
      :width="size"
    >
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    size: String,
  },
};
</script>

<style>
</style>