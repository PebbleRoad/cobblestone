<template>
  <label class="d:f fld:r ai:c ts:s">
    <span class="ts:xs fw:bold">{{ label }}</span>

    <input
      type="text"
      class="m-x:xs ts:xs p:2xs"
      :value="value"
      @input="_onInput"
    />

    <span v-if="value">
      <template v-if="isNumber"
        >✅</template
      >
      <template v-else
        >❌</template
      >
    </span>
  </label>
</template>

<script>
export default {
  name: "ExampleVueBaseComponent",
  props: {
    label: {
      type: String,
      default: "Enter numbers only:",
    },
    value: {
      type: String,
      default: "",
    },
  },
  computed: {
    isNumber: function() {
      return this.value && !isNaN(Number(this.value));
    },
  },
  methods: {
    _onInput: function(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
