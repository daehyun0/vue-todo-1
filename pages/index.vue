<template>
  <div class="container">
    <main-view
      :todoList="todoList"
      @switchFinishFlag="switchFinishFlag"
    ></main-view>
  </div>
</template>
 
<script lang="ts">
import Vue from "vue";
import MainView from "@/components/page-view/main.vue";
import TodoItem from "@/model/todo-item";

export default Vue.extend({
  components: {
    MainView,
  },

  data() {
    return {
      todoList: new Array<TodoItem>(),
    };
  },

  methods: {
    switchFinishFlag(idx: number) {
      this.todoList[idx].switchFinishFlag();
    },
  },

  async created() {
    // 그냥 API 인 척
    await new Promise((resolve) => {
      setTimeout(() => {
        const newTodoItem = new TodoItem("id1", false, "title1", "desc1");
        this.todoList.push(newTodoItem);
        resolve(this.todoList);
      }, 1000);
    });

    await new Promise((resolve) => {
      setTimeout(() => {
        const newTodoItem = new TodoItem("id2", false, "title2", "desc2");
        this.todoList.push(newTodoItem);
        resolve(this.todoList);
      }, 1000);
    });

    await new Promise((resolve) => {
      setTimeout(() => {
        const newTodoItem = new TodoItem("id3", false, "title3", "desc3");
        this.todoList.push(newTodoItem);
        resolve(this.todoList);
      }, 1000);
    });
  },
});
</script>

<style>
</style>
