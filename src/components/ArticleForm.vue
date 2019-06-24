<template>
  <div class="hello articleForm">
    <form>
      <b-field :type="{'is-danger':titleError}"
               :message="{ 'Please enter a title': titleError }">
          <b-input placeholder="Title" type="title" v-model="title"></b-input>
      </b-field>
      <b-field :type="{'is-danger':bodyError}"
               :message="{ 'Please add something to post': bodyError }">
             <b-input type="textarea"
                minlength="10"
                maxlength="1000"
                placeholder="Put your instructable here!"
                v-model="body">
            </b-input>
      </b-field>
      <b-field 
      :type="{'is-danger':categoryError}"
      :message="{ 'Please select at least one category': categoryError }">
          <b-select
              multiple
              native-size="4"
              v-model="selectedCategories">
              <option v-for="cat in categories">{{cat}}</option>
          </b-select>
      </b-field>
      <b-button type="is-info" @click="createArticle">Submit</b-button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'articlesForm',
  data () {
    return {
      title: '',
      body: '',
      selectedCategories: [],
      categories: [
        'Electronics',
        'Toys',
        '3D Printing',
        'Sewing'
      ],
      titleError: false,
      bodyError: false,
      categoryError: false
    }
  },
  methods: {
    createArticle () {
      // check for empty
      if (this.title.length === 0) {
        this.titleError = true
        return false
      }

      if (this.body.length === 0) {
        this.bodyError = true
        return false
      }

      if (this.selectedCategories.length === 0) {
        this.categoryError = true
        return false
      }

      axios({
        method: 'POST',
        url: 'http://localhost:8080/api/articles',
        data: {
          'title': this.title,
          'body': this.body,
          categories: this.selectedCategories
        }
      }).then(res => {
        // error handling
        // if successful, provide a link there.
      })
    }
  }
}
</script>

<style>
</style>
