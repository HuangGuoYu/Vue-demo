<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="comment.name">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="comment.content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
    export default {
        name: "Add",
        props: {
          commentsAdd: {
            type: Function,
            required: true
          }
        },
        data() {
          return {
            comment :{
              name: '',
              content: ''
            }
          }
        },
        methods: {
          add() {
            const sCom = {
              name: '',
              content: ''
            }
            sCom.name = this.comment.name.trim();
            sCom.content = this.comment.content.trim();

            if (sCom.name === '' || sCom.content === '') {
              alert('the content is\'nt null');
              return;
            }

            this.commentsAdd(sCom);

            this.comment.name = '';
            this.comment.content = '';
          }
        }
    }
</script>

<style scoped>

</style>
