import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "m1",
          image: "https://source.unsplash.com/9wg5jCEPBsw",
          title: "A trip into the mountains",
          description: "Feel the cool breeze",
        },
        {
          id: "m2",
          image: "https://source.unsplash.com/YmQ0-nmWcV0",
          title: "Watch the sea",
          description: "Go to swim with fishes",
        },
        {
          id: "m3",
          image: "https://source.unsplash.com/-YHSwy6uqvk",
          title: "Good eating",
          description: "Tasty food",
        },
      ],
    };
  },
  mutations: {
    SAVE_MEMORY(state, memoryData) {
      const newMemoryData = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };

      state.memories.unshift(newMemoryData);
    },
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit("SAVE_MEMORY", memoryData);
    },
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;
