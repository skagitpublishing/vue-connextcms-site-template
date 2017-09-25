<template>
  <div class="hello" style="border: 1px solid red;">
    <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'left-menu',
  data () {
    return {
      msg: 'This is the left menu'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
