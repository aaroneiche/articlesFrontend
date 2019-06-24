<template>
  <div class="hello">
    <h1>{{article.title}}</h1>
    <div class="date">Published on {{displayDate}}</div>
    <div class="categories">
      <b-tag rounded is-large v-for="category in article.categories">{{category}}</b-tag>
    </div>
    <div class="body">{{article.body}}</div>

    <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="true"></b-loading>


    <b-message v-if="errorMessage.length > 0" title="Danger" type="is-danger" aria-close-label="Close message">
      <div>{{errorMessage}}</div>
      <router-link to="/articles/">Back the articles list</router-link>
    </b-message>
  </div>
</template>

<script>
import axios from 'axios'
import dateformat from 'dateformat'

export default {
  name: 'articlesDisplay',
  data () {
    return {
      msg: `Articles Form`,
      article: {},
      isLoading: false,
      displayDate: '',
      errorMessage: ''
    }
  },
  methods: {
    getArticle () {
      this.isLoading = true
      axios({
        method: 'GET',
        url: `http://localhost:8080/api/articles/${this.$route.params.id}`
      }).then(res => {
        if (res.status === 200) {
          // if successful, provide a link there.
          this.article = res.data
          this.displayDate = dateformat(res.data.date, 'mmmm dS, yyyy')
          this.isLoading = false
        }
      }).catch(err => {
        console.log(err.response)
        if (err.response.status === 404) {
          // couldn't find that
          this.errorMessage = err.response.data.error
          this.isLoading = false
        }
      })
    }
  },
  beforeMount () {
    this.getArticle()
  }
}
</script>
<style>
h1{
  font-size: 3em;
}
div.date {
  margin-bottom: 10px;
}
div.body {
  white-space: pre-wrap;
}
</style>
