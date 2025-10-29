<template>
    <h1>Hello world!!!</h1>
    <Alert color="primary">{{ data.mess }}</Alert>
</template>

<script setup>
  const {data} = await useFetch('/api/example')
</script>

<style>
  header a.router-link-exact-active {
    color: #ffb636!important;
    font-weight: 500;
  }
  header a:not(.router-link-exact-active):hover {
    text-decoration: underline;
  }
  h1 {
    color: red
  }
</style>