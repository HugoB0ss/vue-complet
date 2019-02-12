<template>
  <div class="post col-xs-10 mx-auto mt-3 col-sm-3 col-md-3 align-baseline">
    <h3 class="title">{{item.title}}</h3>
    <span>item.timeElapsed</span>
    <p>item.content</p>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: ['item']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.post{
  background-color: #3498db ;
  height: 30% ;
}
.title{
  background-color: #2980b9 ;
  overflow: hidden;
}
.content {
  overflow: auto;
}

</style>
