<template>
  <div>
    <template v-if="status >= 200 && status < 300">
      <img :src="response.data.data.avatar" />
    </template>

    <template v-if="status >= 300 || status === 'error'">
      <span class="fw:bold">Error:</span>
      <div v-if="status === 'error'">Something went wrong.</div>
      <div v-else>{{ response.response.status }}</div>
    </template>

    <template v-if="!completed">
      <span class="fs:i">Loading...</span>
    </template>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ExampleAxiosFetching",
  props: {
    request: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      status: null,
      response: null,
      completed: false,
    };
  },
  mounted() {
    axios
      .get(this.request)
      .then(response => {
        this.response = response;
        this.status = response.status;
      })
      .catch(error => {
        console.log(error);
        this.response = error;
        this.status = error.status || "error";
      })
      .then(() => {
        this.completed = true;
      });
  },
};
</script>
