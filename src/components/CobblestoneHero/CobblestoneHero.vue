<template>
  <div class="d:f ai:c jc:c w:100 h:100vh">
    <div class="typeset contain ta:c nm-t:4xl">
      <img
        class="lazyload"
        src="/_assets/images/cobblestone.png"
        alt=""
        @click="_handleClick"
      />

      <h1>Welcome to {{ projectName }}!</h1>

      <p v-if="showHelp">
        You should start with the
        <a
          href="https://github.com/PebbleRoad/cobblestone"
          target="_blank"
          rel="noreferrer noopener"
        >
          <strong>README</strong>
        </a>
        :)
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CobblestoneHero",
  props: {
    projectName: {
      type: String,
      default: "Cobblestone",
    },
    showHelp: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    _handleClick: function(e) {
      this.$emit("image:clicked", e);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  background-color: c(white);
}
</style>
