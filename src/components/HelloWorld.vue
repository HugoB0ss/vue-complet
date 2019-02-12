<template>
  <div class="hello row">
    <Post v-for="item in this.content" :key="item.id" :item="item"/>
  </div>
</template>

<script>
import Post from '@/components/Post.vue'
export default {
  name: 'HelloWorld',
  components: {
    Post
  },
  props: ['content']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  height: 100%;
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
