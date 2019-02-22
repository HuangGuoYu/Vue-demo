<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :commentsAdd="commentsAdd"/>
      <List :comments="comments" :commentsDel="commentsDel"/>
    </div>
  </div>
</template>

<script>
  import Add from './components/Add'
  import List from './components/List'
  export default {
    components: {List, Add},
    data() {
      return {
        comments:[
          {
            name: 'cat',
            content:'vue is ok'
          },
          {
            name: 'cat',
            content:'vue is ok'
          },
          {
            name: 'cat',
            content:'vue is ok'
          }
        ]
      }
    },
    methods:{
      commentsAdd(comment) {
        this.comments.unshift(comment);
      },
      commentsDel(index) {
        this.comments.splice(index, 1);
      }
    }
  }
</script>

<style>

</style>
