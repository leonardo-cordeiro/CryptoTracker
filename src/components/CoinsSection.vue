<template>
    <h1>Coins</h1>




</template>
<script setup>
import { readCoins } from '@/model/services'
import {  onMounted, ref } from 'vue'

const Coins = ref([])
// const search = ref('')

onMounted(async () => {
  await readCoins().then((response) => {
    Coins.value = response
  })
})

// const computedCoins = computed(() => {
//   return Coins.value.filter((coin) => {
//     return [coin.name, coin.symbol].some((value) => {
//       return value?.toString()?.toLowerCase().includes(search.value.toLowerCase());
//     });
//   });
// });

</script>
<style></style>
