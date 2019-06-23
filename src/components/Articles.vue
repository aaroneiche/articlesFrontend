<template>
  <div class="hello">
    <h2>Welcome to the Articles page</h2>
    <table class="table is-bordered is-striped is-hoverable is-fullwidth">
      <thead>
          <tr>
              <th>Article Title</th>
              <th>Date Published</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="article in articles" :key="article.id">
              <td><router-link :to="`/articles/${article.id}`">{{article.title}}</router-link></td>
              <td>{{article.date}}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'articles',
  data () {
    return {
      msg: `Articles`,
      articles: []
    }
  },
  beforeMount: function () {
    this.getArticles()
  },
  methods: {
    getArticles () {
      axios({
        method: 'GET',
        url: 'http://localhost:8080/api/articles'
      }).then(res => {
        // if successful, provide a link there.
        this.articles = res.data
      })
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
