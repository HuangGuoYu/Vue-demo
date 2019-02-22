<template>
    <ul>
      <li v-for="(msg, index) in messages" :key="msg.id">
        <router-link :to="`/home/message/details/${msg.id}`">{{msg.title}}</router-link>
        <button @click="pushShow(msg.id)">push</button>
        <button @click="replaceShow(msg.id)">replace</button>
      </li>
      <button @click="$router.back()">back</button>
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
        },
      methods:{
          pushShow: function (id) {
            this.$router.push(`/home/message/details/${id}`)
          },
          replaceShow: function (id) {
            this.$router.replace(`/home/message/details/${id}`)
          }
      }
    }
</script>

<style scoped>

</style>
