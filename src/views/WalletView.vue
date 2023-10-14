<template>
  <div>{{ user }}</div>
  <div>{{ userStore.currentUser }}</div>
</template>

<script setup>
import { doc, getDoc } from 'firebase/firestore/lite'
import { onMounted, ref } from 'vue'
import { db } from '../firebase'
import { useStore } from '../stores/users'

const user = ref()
const userStore = useStore()

onMounted(() => {
  getUsers(db)
})
async function getUsers(db) {
  const docRef = doc(db, 'users', 'ENEiOpYQoYZY7EH6YZUW1ZhQNxj1')
  const docSnap = await getDoc(docRef)
  console.log(docSnap.data())
  user.value = docSnap.data()
}
</script>

<style lang="scss" scoped></style>
