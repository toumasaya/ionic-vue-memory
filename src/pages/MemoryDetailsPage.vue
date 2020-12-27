<template>
  <base-layout
    :pageTitle="loadMemory ? loadMemory.title : 'Loading...'"
    pageDefaultBackLink="/memories"
  >
    <h2 v-if="!loadMemory">Could not load a memory for the given id.</h2>
    <memory-overview
      v-else
      :title="loadMemory.title"
      :image="loadMemory.image"
      :description="loadMemory.description"
    ></memory-overview>
  </base-layout>
</template>

<script>
import MemoryOverview from "@/components/memories/MemoryOverview.vue";

export default {
  components: {
    MemoryOverview,
  },
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
