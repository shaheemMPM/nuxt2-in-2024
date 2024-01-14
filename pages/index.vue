<template>
  <Tutorial />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
  head: {
    title: "Main page",
  },
  mounted() {
    console.log("state from index.vue: ", this.$store.state);
  },
});
</script>
