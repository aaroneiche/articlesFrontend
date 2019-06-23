<template>
  <div>
    <form>
      
    </form>
    <button @click="createArticle">Click me!</button>
  </div>
</template>

<script>
import axios from 'axios'

let title = `How to make a thing`
let body = `I am the article body, and I'm very important.`

export default {
  name: 'articlesForm',
  data () {
    return {
      msg: `Articles Form`
    }
  },
  methods: {
    createArticle () {
      axios({
        method: 'POST',
        url: 'http://localhost:8080/api/articles',
        data: {
          'title': title,
          'body': body
        }
      }).then(res => {
        // error handling
        alert(res)
        // if successful, provide a link there.
      })
    }
  }
}
</script>