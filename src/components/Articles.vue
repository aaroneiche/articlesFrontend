<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Welcome to the Articles page</h2>
    <ul>
      <li> <a href="/articles/id/1">This will link to a article.</a></li>
    </ul>
  </div>
</template>

<script>
/*
import ArticleForm from '@/components/ArticleForm.vue'
import ArticleDisplay from '@/components/ArticleDisplay.vue'
 */
export default {
  name: 'articles',
  data () {
    return {
      msg: `Articles`
    }
  }
/*   ,
  components: {
    ArticleForm,
    ArticleDisplay
  } */
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
