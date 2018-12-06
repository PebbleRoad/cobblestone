<template>
  <div class="stack-y:m">
    <form action="#" @submit="_onSubmit">
      <div class="stack-y:m">
        <ExampleBaseComponent
          ref="ageField"
          v-model="age"
          label="Enter your age"
        />

        <ExampleBaseComponent
          ref="favouriteNumberField"
          v-model="favouriteNumber"
          label="Enter your favourite number"
        />

        <button type="submit">Submit</button>
      </div>
    </form>

    <div v-if="formSubmitted">
      <template v-if="formValidationPassed">
        <p>
          You are {{ age }} years old and your favourite number is
          {{ favouriteNumber }}
        </p>
      </template>

      <template v-else>
        <p>Please check for errors in the form.</p>
      </template>
    </div>
  </div>
</template>

<script>
import ExampleBaseComponent from "~Components/ExampleBaseComponent/ExampleBaseComponent.vue";

export default {
  name: "ExampleContainerComponent",
  components: {
    ExampleBaseComponent,
  },
  data() {
    return {
      age: null,
      favouriteNumber: null,
      formSubmitted: false,
      formValidationPassed: false,
    };
  },
  methods: {
    _onSubmit: function(e) {
      e.preventDefault();
      this.formSubmitted = true;
      this.formValidationPassed =
        this.$refs.ageField.isNumber && this.$refs.favouriteNumberField.isNumber
          ? true
          : false;
    },
  },
};
</script>
