<template>
  <base-layout page-title="Add a Memory" pageDefaultBackLink="/memories">
    <create-memory-form @on-save-memory="saveMemory"></create-memory-form>
  </base-layout>
</template>

<script>
import CreateMemoryForm from "@/components/memories/CreateMemoryForm";

export default {
  components: {
    CreateMemoryForm,
  },
  methods: {
    saveMemory(memoryData) {
      this.$store.dispatch("addMemory", memoryData);
      this.$router.replace("/memories");
    },
  },
};
</script>

<style lang="scss" scoped></style>
