<template>
  <Users/>
  <Weather />
</template>

<script>
  import Users from "./components/users/Users.vue"
  import Weather from "./components/weather/Weather.vue"
  export default {
    components: {Users, Weather},
  }
</script>

<style scoped>

</style>
