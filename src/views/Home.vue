<template>
  <div class="home">
    <nav id="nav" class="text-right">
      <button class="btn" @click="switchView()">Switch to {{view === 0 ? 'list' : 'thumbnails'}}</button>
    </nav>
    <div class="container">
      <HelloWorld :view="view"/>
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
      view: 1
    }
  },
  methods: {
    switchView: function () {
      this.view = (this.view + 1) % 2
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
