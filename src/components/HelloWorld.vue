<template>
  <div class="hello row">
    <Post
		v-for="item in content"
		:key="item.title"
		:item="item"
		:view="view"/>
  </div>
</template>

<script>
import Post from '@/components/Post.vue'
export default {
  name: 'HelloWorld',
  components: {
    Post
  },
  props: ['view'],
  created () {
    this.getData()
  },
  data () {
    return {
      content: [],
	  urls: ['http://www.madeinblue.com/wp-json/wp/v2/posts', 'https://www.go-interim.fr/wp-json/wp/v2/posts']
    }
  },
  methods: {
    getData: function () {
      const vm = this
	  this.urls.forEach(url => {
		  fetch(url)
			.then((response) => {
			  return response.json()
			}).then((result) => {
			  vm.content = vm.content
							 .concat(result
									.map((article) => {
										return {
										  title: article.title.rendered,
										  content: new DOMParser()
													.parseFromString(article.excerpt.rendered, 'text/html')
													.body
													.textContent
													.substring(0, 80),
										  date: article.date_gmt
										}
									}))
			})
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  min-height: 100%;
  background-color: #EEEEEE;
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
  color: #42b983;
}
</style>
