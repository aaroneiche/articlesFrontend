<template>
  <div class="hello">
    <p>This will show an article</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'articlesDisplay',
  data () {
    return {
      msg: `Articles Form`,
      article: {}
    }
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
  },
  beforeMount () {
    console.log(this.$route.params)
  }
}
</script>