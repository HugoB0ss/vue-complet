<template>
  <div :class="'post align-baseline col-sm-11 mx-auto mt-3 '+ (view === 0? 'col-md-5' : '') ">
    <p class="title">{{item.title}}</p>
    <span class="date">{{item.date + ' - ' + getTime() + ' ago' }}</span>
    <p class="content">{{item.content}}</p>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Post',
  props: ['item', 'view'],
  methods: {
    getTime: function () {
		const diff = moment
						.duration(moment(this.item.date).diff(moment()))
						.humanize()
		return diff
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.post{
  background-color: #3498db ;
  height: 30% ;
  border-radius: 8px;
  color: white;
}
.title{
  background-color: #0984e3 ;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 7px;
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
