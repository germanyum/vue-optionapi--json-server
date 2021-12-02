<template>
  <div>
    <div
      class="card text-white bg-dark"
      style="width: 18rem"
      v-for="todo in this.$store.state.todolist"
      :key="todo.id"
    >
      <div class="card-body">
        <h5 class="card-title">
          <p class="card-text">{{ todo.text }}</p>
        </h5>
        <p class="card-text">{{ todo.alt }}</p>
        <div class="row">
          <i
            class="far fa-heart col-4"
            @click="like(todo.id)"
            :style="todo.like ? { color: 'red' } : ''"
          ></i>
          <i
            class="far fa-bookmark col-4"
            @click="bookmark(todo.id)"
            :style="todo.bookmark ? { color: 'blue' } : ''"
          ></i>
          <i class="far fa-trash-alt col-4" @click="delet(todo.id)"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    like(data) {
      this.$store.dispatch("like", data);
    },
    delet(data) {
      this.$store.dispatch("sil", data);
    },
    bookmark(data) {
      this.$store.dispatch("bookmark", data);
    },
  },
};
</script>
<style>
.card {
  text-align: center;
}
</style>
