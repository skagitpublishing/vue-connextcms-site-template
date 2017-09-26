<template>
  <div style="border: 1px solid green;">
    <p>This is the active content</p>
  </div>
</template>

<script>
  export default {
    name: 'activeContent',
    data () {
      return {
        msg: 'This is the active content.'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  */
</style>
