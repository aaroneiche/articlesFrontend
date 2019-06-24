<template>
  <div class="hello">
    <h1>Welcome to Articles! </h1> 
    <p>Articles lets you post, and read articles! It's amazing!</p> 
    <p>Use the navigation in the upper left to mvoe between pages.</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Articles!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* h1, h2 {
  font-weight: normal;
} */

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
