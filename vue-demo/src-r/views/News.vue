<template>
    <ul>
      <li v-for="(news, index) in newsArray">{{news}}</li>
      <input type="text">
    </ul>
</template>

<script>
    export default {
        data(){
          return {
            newsArray:["message01","message02","message04","message03"]
          }
        }
    }
</script>

<style scoped>

</style>
