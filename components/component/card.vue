<template>
  <div class="component-card-root" :class="{ finish: todo.finishFlag }">
    <div class="content-container">
      <div class="title">{{ todo.title }}</div>
      <div class="desc">{{ todo.desc }}</div>
    </div>
    <div class="control-container">
      <button
        class="btn-switch-flag-finish"
        @click="handleClickFinishFlagButton(todo)"
      >
        {{ nameButtonFinish }}
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

  get nameButtonFinish () {
    if (this.todo.finishFlag) {
        return '미완료로 표시';
      }

      return '완료로 표시';
  }
}
</script>

<style lang="scss" scoped>
.component-card-root {
  @apply p-3 bg-white rounded shadow;

  & > .control-container {
    @apply flex justify-end;

    & > .btn-switch-flag-finish {
      @apply rounded;
    }
  }

  &.finish {
    & > .content-container {
      @apply line-through;
    }

    & > .control-container {
      & > .btn-switch-flag-finish {
        @apply text-gray-400;
      }
    }
  }
}
</style>