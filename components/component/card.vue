<template>
  <div class="component-card-root" :class="{ finish: !todo.finishFlag }">
    <div class="content-container">
      <div class="title">{{ todo.title }}</div>
      <div class="desc">{{ todo.desc }}</div>
    </div>
    <div class="control-container">
      <button
        class="btn-switch-flag-finish"
        @click="handleClickFinishFlagButton(todo)"
      >
        Button
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TodoItem from "~/model/todo-item";

@Component
export default class ComponentCard extends Vue {
  @Prop({ type: TodoItem, default: "title default" })
  todo!: TodoItem;

  handleClickFinishFlagButton(todo: TodoItem) {
    this.$emit("switchFinishFlag");
  }
}
</script>

<style lang="scss" scoped>
.component-card-root {
  & > .control-container {
    @apply flex justify-end;
  }
}
</style>