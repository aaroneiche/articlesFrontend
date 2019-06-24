<template>
  <div class="hello">
    <b-message v-if="errorMessage > ''" title="Danger" type="is-danger" aria-close-label="Close message">
      <div>{{errorMessage}}</div>
    </b-message>
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
              <td><router-link :to="`/articles/id/${article.id}`">{{article.title}}</router-link></td>
              <td>{{article.date}}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import dateformat from 'dateformat'

export default {
  name: 'articles',
  data () {
    return {
      msg: `Articles`,
      articles: [],
      errorMessage: ``
    }
  },
  mounted: function () {
    this.getArticles();
  },
  methods: {
    getArticles () {
      axios({
        method: 'GET',
        url: 'http://localhost:8080/api/articles'
      }).then(res => {
        // if successful, provide a link there.
        this.articles = res.data;

        this.articles.forEach(a => {
          a.date = dateformat(a.date, 'mmmm dS, yyyy');
        })
      })
        .catch(err => {
          this.isLoading = false;
          if (!err.response) {
            // network error
            this.errorMessage = 'There was an error communicating with the server';
          } else {
            // occurs with a response from server
            this.errorMessage = err.response.data.message;
          }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

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
