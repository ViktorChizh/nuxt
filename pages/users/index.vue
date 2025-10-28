<template>
  <div>
    <NuxtLink to="/">Home</NuxtLink>
    <h1>USERS</h1>
    <p>{{ some }}</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        some: "info"
      }
    }
  }
</script>
<style>
  h1 {
    color: red
  }
</style>