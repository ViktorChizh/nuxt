<template>
  <div>
    <Head>
      <Title>Users</Title>
      <Meta name="description" content="All users" />
    </Head>
    <h1>USERS</h1>
    <ul class="d-flex flex-wrap justify-content-between list-unstyled gap-3">
      <li v-for="user in users" :key="user.id">
        <UserLink :user="user"/>
      </li>
    </ul>
  </div>
</template>
<script setup>
  import UserLink from '../../components/UserLink.vue';

  definePageMeta({
    layout: "users"
  })
  // const users = ref([
  //   {id: 1, name: 'Alex'},
  //   {id: 2, name: 'Bob'},
  //   {id: 3, name: 'Tom'}
  // ])
  const {data} = await useFetch('/api/users')
  const users = ref(data.value.users)
</script>
<style>
  h1 {
    color: red
  }
</style>