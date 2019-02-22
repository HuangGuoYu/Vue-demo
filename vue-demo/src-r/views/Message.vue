<template>
    <ul>
      <li v-for="(msg, index) in messages" :key="msg.id">
        <a href="???/">{{msg.title}}</a>
      </li>
    </ul>
</template>

<script>
    export default {
        data(){
          return {
            messages:[
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

            ]
          }
        }
    }
</script>

<style scoped>

</style>
