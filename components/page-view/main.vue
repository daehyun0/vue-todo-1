<template>
  <div class="page-view-root">
    <card
      class="card"
      v-for="(todo, idx) in todoList"
      :key="todo.id"
      :todo="todo"
      @switchFinishFlag="$emit('switchFinishFlag', idx)"
    ></card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Card from "@/components/component/card.vue";
import TodoItem from "@/model/todo-item";

@Component({
  components: {
    Card,
  },
})
export default class PageViewMain extends Vue {
  @Prop({
    type: Array,
    required: true,
    default: () => {
      return [];
    },
  })
  readonly todoList!: Array<TodoItem>;

  handle(e: TodoItem, idx: number) {
    this.$emit("update:todo", idx, e);
  }
}
</script>

<style lang="scss" scoped>
.page-view-root {
  & > .card {
    & + .card {
      @apply mt-4;
    }
  }
}
</style>