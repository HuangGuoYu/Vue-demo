<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item v-for="(comment, index) in comments" :key="index" :comment="comment" :commentsDel="commentsDel" :index="index"/>
    </ul>
  </div>
</template>

<script>
    import Item from './Item'
    export default {
      props:['comments', 'commentsDel'], //申明需要接受父组件给的属性，直接变为组件属性
      name: "List",
      components: {Item},

    }
</script>

<style>
  .reply {
    margin-top: 0px;
  }
</style>
