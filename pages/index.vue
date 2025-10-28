<template>
  <div>
    <header>
      <ul>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        <li><NuxtLink to="/users">Users</NuxtLink></li>
      </ul>
    </header>
    <h1>Hello world!!!</h1>
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
  ul {
    display: flex;
    justify-self: start;
    gap: 50px;
    li {
      list-style-type: none;
    }
  }
</style>