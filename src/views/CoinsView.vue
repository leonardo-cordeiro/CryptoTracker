<template>
  <div
    class="h-screen flex-col flex justify-center items-center font-mukta bg-repeat  bg-[url('src/img/background.jpg')]"
  >
    <h1 class="text-6xl mb-10 mt-10 text-yellow-400 font-bebas-neue">Coins</h1>
    <BaseInput v-model="search" @search="onreadCoins" placeholder="Pesquise a moeda" />

    <div class="flex flex-wrap justify-center mt-20">
      <div
        v-for="coin in filteredCoins"
        :key="coin.id"
        class="coin mx-2 mb-4 bg-blue-900 w-80 h-48 rounded-lg flex flex-col justify-between items-center p-4"
      >
        <div class="coin-logo flex items-center justify-center">
          <img :src="coin.image" :alt="`${coin.name} Logo`" class="w-16 h-16" />
        </div>
        <div class="coin-name text-center">
          <h3 class="text-white text-lg uppercase">{{ coin.name }}</h3>
          <span>/USD</span>
        </div>

        <div class="coin-price text-center">
          <span class="text-2xl font-bold text-green-500">$ {{  coin.current_price }}</span>
        </div>
        <div class="coin-price-change text-center mb-2">
          <span :class="coin.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'">{{
            coin.price_change_percentage_24h  }}</span>
        </div>
      </div>
    </div>

    <button
      id="right-arrow"
      class="text-3xl mt-10 hover:bg-blue-500 text-white py-2 px-4 rounded-full"
    >
      <img src="" alt="">
    </button>
    <button
      id="right-arrow"
      class="text-3xl mt-10 hover:bg-blue-500 text-white py-2 px-4 rounded-full"
    >
      <img src="" alt="">
    </button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { readCoins } from '@/model/services'
import BaseInput from '@/components/BaseInput.vue'
import { ref } from 'vue'
import { computed } from 'vue'

let currentPage = 1
const coins = ref([])
const search = ref('')

const filteredCoins = computed(() => {
  const searchTerm = search.value.toLowerCase()
  return coins.value.filter((coin) => coin.name.toLowerCase().includes(searchTerm))
})

function updatePage(increment) {
  currentPage += increment

  if (currentPage < 1) {
    currentPage = 1
  }

  readCoins(currentPage)
    .then((json) => {
      coins.value = json
      // fetchAndDisplayCoins(json)
    })
    .catch((error) => {
      console.error('Erro ao buscar moedas:', error)
    })
}

onMounted(() => {
  document.querySelector('#right-arrow').addEventListener('click', () => {
    updatePage(1)
  })
})

updatePage(0)
</script>