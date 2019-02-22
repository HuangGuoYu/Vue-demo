<template>
    <div>
      <div>{{$route.params.id}}</div>
      <ul>
        <li>id:{{curMsg.id}}</li>
        <li>title:{{curMsg.title}}</li>
        <li>content:{{curMsg.content}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            curMsg: {
              id: '1'
            },
            msgAll:{}
          }
        },
        mounted() {
          const msgAll = [
            {
              id: 1,
              title: 'message01'
            },
            {
              id: 2,
              title: 'message02'
            },
            {
              id: 3,
              title: 'message03'
            },

          ];
          this.msgAll = msgAll;
        },
      watch: {
          $route: function (value) {
            const id = value.params.id*1;
            this.curMsg = this.msgAll.find(item => {
              return item.id === id;
            });
          }
      }
    }
</script>

<style scoped>

</style>
