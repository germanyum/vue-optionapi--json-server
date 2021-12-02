<template>
  <Card />
</template>
<script>
import Card from "@/components/Card.vue";
export default {
  mounted() {
    this.$store.dispatch("geldi");
  },
  components: {
    Card,
  },
};
</script>
<style>
.left-nav .row {
  background-color: #333;
  color: white;
  text-align: center;
  line-height: 70px;
  text-decoration: none;
  font-weight: bolder;
  height: 70px;
}
.card {
  float: left;
  margin-left: 10px;
  margin-top: 10px;
}
.fa-heart:hover {
  color: red;
}
.fa-bookmark:hover {
  color: blue;
}
.fa-trash-alt:hover {
  color: limegreen;
}
</style>
