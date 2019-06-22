<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Welcome to the Articles page</h2>
  </div>
</template>

<script>
export default {
  name: 'articles',
  data () {
    return {
      msg: `Articles`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
  color: #35495E;
}
</style>
