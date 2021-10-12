<template>
  <div>
    <p>Your time is: {{ score }}</p>
    <p>Rank: {{ rank }}</p>
  </div>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "Neenjaa!";
    }
  },
};
</script>

<style></style>
