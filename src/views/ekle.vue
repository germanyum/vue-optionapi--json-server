<template>
  <div class="row mt-5">
    <div class="col-3"></div>
    <div class="col-6">
      <div class="form-group newform">
        <label class="col-form-label">Todo</label>
        <input
          class="form-control"
          type="text"
          v-model="text"
          placeholder="Todo"
        />
        <label class="col-form-label">Detay</label>
        <input
          class="form-control"
          type="text"
          placeholder="Description"
          v-model="alt"
        />
        <br />
        <button type="submit" class="btn btn-primary" @click="de">Ekle</button>
      </div>
    </div>
    <div class="col-3"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "",
      alt: "",
    };
  },
  methods: {
    de() {
      this.$store.dispatch("ekle", { text: this.text, alt: this.alt });
    },
  },
};
</script>
