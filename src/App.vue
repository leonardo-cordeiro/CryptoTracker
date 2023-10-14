<script setup>
import { RouterView } from 'vue-router'
import { onBeforeMount } from 'vue'
import { useStore } from '@/stores/users'

const store = useStore()

onBeforeMount(() => {
  store.fetchUser()
})
</script>

<template>
  <header></header>

  <RouterView />
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
