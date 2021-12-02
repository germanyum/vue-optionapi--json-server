<template>
  <Card />
</template>
<script>
import Card from "@/components/Card.vue";
export default {
  mounted() {
    this.$store.dispatch("filter", "like");
  },
  components: {
    Card,
  },
};
</script>
