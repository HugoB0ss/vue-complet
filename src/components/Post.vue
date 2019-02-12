<template>
  <div class="post col-xs-10 mx-auto mt-3 col-sm-5 col-md-5 align-baseline">
    <p class="title">{{item.title}}</p>
    <span class="date">{{item.date}}</span>
    <p class="content">{{item.content}}</p>
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.date{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content {
  height: 70%;
}

</style>
