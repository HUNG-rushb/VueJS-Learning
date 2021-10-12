<template>
  <div>
    <h1>Reaction time</h1>
    <button @click="start" :disabled="isPlaying">Start</button>
    <Block v-if="isPlaying" :delay="delay" @end="endGame" />
    <Result v-if="show" :score="score" />
  </div>
</template>

<script>
import Block from "./components/Block.vue";
import Resule from "./components/Result.vue";

export default {
  name: "App",
  components: { Block },
  data() {
    return {
      isPlaying: true,
      delay: null,
      score: null,
      show: false,
    };
  },
  methods: {
    start() {
      this.isPlaying = true;
      this.delay = 2000 + Math.random() * 5000;
      this.show = false;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.show = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
