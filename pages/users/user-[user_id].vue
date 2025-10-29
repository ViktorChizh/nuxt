<template>
  <div class="card shadow-lg">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="data.image" alt="User Image" class="img-fluid rounded-start h-100 w-auto"/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h2 class="card-title">{{ data.firstName }} {{ data.lastName }}</h2>
          <p class="card-text text-muted">ID: {{ user_id }} | Age: {{ data.age }}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>Email: </strong>{{ data.email }}</li>
            <li class="list-group-item"><strong>Phone: </strong>{{ data.phone }}</li>
            <li class="list-group-item"><strong>Address: </strong>{{ data.address.address }}, {{ data.address.city }}, {{ data.address.state }}, {{ data.address.postalCode }}</li>
            <li class="list-group-item"><strong>Company: </strong>{{ data.company.name }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { useRoute } from 'nuxt/app';
  definePageMeta({
    layout: "users"
  })
  const {user_id} = useRoute().params
  const {data} = await useFetch(`https://dummyjson.com/users/${user_id}`)
</script>
<style>
  h1 {
    color: red
  }
</style>