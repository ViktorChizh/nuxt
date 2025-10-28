<template>
  <div>
    <h1>ID of user: {{ user_id }}</h1>
  </div>
</template>
<script setup>
import { useRoute } from 'nuxt/app';

    const {user_id} = useRoute().params
</script>
<style>
  h1 {
    color: red
  }
</style>