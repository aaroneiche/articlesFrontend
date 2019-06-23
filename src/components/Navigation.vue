<template>
<ul>
<li><router-link to="/">Home</router-link></li>
<li><router-link to="/articles">Articles</router-link></li>
<li><router-link to="/articles/create">Create A Post</router-link></li>
</ul>
</template>

<script>
export default {
  name: 'navigation'
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>

