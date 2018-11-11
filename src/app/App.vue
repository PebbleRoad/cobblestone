<template>
  <div id="app" v-cloak>
    <router-view></router-view>
  </div>  
</template>

<script>
  import DesignTokens from '~Styles/tokens/_.scss';

  export default {
    name: 'App',
    data() {
      return {
        tokens: this.designTokens
      }
    },
    created() {
      this.designTokens = DesignTokens;
    }
  }
</script>
