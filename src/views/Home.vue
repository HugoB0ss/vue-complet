<template>
  <div class="home">
    <nav id="nav" class="text-right">
      <button class="btn" @click="switchView()">Switch to {{view === 0 ? 'list' : 'thumbnails'}}</button>
    </nav>
    <div class="container">
      <HelloWorld :content="content"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      content: [{ id: 1, abc: 1, content: 1, title: '1235654215634315624210' }, { id: 2, abc: 1, content: 1, title: 2 }, { id: 3, abc: 1, content: 1, title: 2 }],
      view: 1
    }
  },
  methods: {
    switchView: function () {
      this.view = (this.view + 1) % 2
      fetch('https://www.thermiefrance.com/wp-json/wp/v2/posts')
        .then((result) => {
          console.log(result.body.getReader())
        })
    }
  }
}
</script>

<style lang="scss">

.home {
  height: 100%;
  width: 100%;
}
.container {
  height: 100%;
}
#nav {
  padding: 5px ;
  width:100%;
  background-color: #2c3e50;
  button {
    background-color: #e74c3c;
  }
}
</style>
