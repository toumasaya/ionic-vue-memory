<template>
  <base-layout
    :pageTitle="loadMemory ? loadMemory.title : 'Loading...'"
    pageDefaultBackLink="/memories"
  >
    <h2 v-if="!loadMemory">Could not load a memory for the given id.</h2>
    <h2 v-else>Loaded it</h2>
  </base-layout>
</template>

<script>
export default {
  data() {
    return {
      memoryId: this.$route.params.id,
    };
  },
  computed: {
    loadMemory() {
      return this.$store.getters.memory(this.memoryId);
    },
  },
  // watch: {
  //   $route(currentRoute) {
  //     this.memoryId = currentRoute.params.id;
  //   },
  // },
};
</script>

<style lang="scss" scoped></style>
