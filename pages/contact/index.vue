<template>
    <div>
      <h1>CONTACT</h1>
      <form @submit.prevent="handleSubmit">
        <input type="text" id="name" name="name" v-model="name" class="form-control" placeholder="Enter name"/><br/>
        <input type="email" id="email" name="email" v-model="email" class="form-control" placeholder="Enter email"/><br/>
        <input type="text" id="message" name="message" v-model="message" class="form-control" placeholder="Enter message"/><br/>
        <button type="submit" class="btn btn-primary" :disabled="isSub">
          {{ isSub ? 'Отправляем...'  : "Отправить"}}
        </button>
      </form>
      <p v-if="resultMessage" class="mt-3 alert alert-success">{{ resultMessage }}</p>
    </div>
</template>
<script setup>
  useHead({
    title: "Contacts",
    meta: [
      {name: 'description', content: "Contact Page"}
    ]
  })
  const name = ref('')
  const email = ref('')
  const message = ref('')
  const isSub = ref(false)
  const resultMessage = ref('')

  const handleSubmit = async () => {
    isSub.value = true
    resultMessage.value = ''
    const { error } = await useFetch('/api/contacts', {
      method: 'POST',
        body: {
        name: name.value,
        email: email.value,
        message: message.value
        }
      })
    if (error.value) {
      resultMessage.value = 'Error: ' + error.value
    } else {
      resultMessage.value = 'All is success'
      name.value = ''
      email.value = ''
      message.value = ''
    }
    isSub.value = false
  }
</script>
<style>
  h1 {
    color: red
  }
</style>