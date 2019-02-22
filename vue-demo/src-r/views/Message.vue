<template>
    <ul>
      <li v-for="(msg, index) in messages" :key="msg.id">
        <router-link :to="`/home/message/details/${msg.id}`">{{msg.title}}</router-link>
      </li>
      <router-view></router-view>
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
