<template>
  <h1>Coins Page</h1>
  <button @click="logout">logout</button>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useStore } from '@/stores/counter'

const store = useStore()

const logout = async () => {
  try {
    await store.logout()
  } catch (error) {
    console.log('Erro')
  }
}

onBeforeMount(() => {
  store.fetchUser()
})
</script>

<style scoped></style>
