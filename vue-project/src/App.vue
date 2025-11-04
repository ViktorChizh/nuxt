<template>
  <Users/>
  <Weather />
  <Crypto/>
</template>

<script>
  import Users from "./components/users/Users.vue"
  import Weather from "./components/weather/Weather.vue"
  import Crypto from "./components/crypto/Crypto.vue";
  export default {
    components: {Users, Weather, Crypto},
  }
</script>

<style scoped>

</style>
