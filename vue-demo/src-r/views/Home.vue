<template>
    <div>
      <div>
          <router-link to="/home/news">news</router-link>
          <router-link to="/home/message">messages</router-link>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
