<template>
  <div class="min-h-screen flex-col flex font-mukta bg-repeat bg-[url('src/img/background.jpg')]">
    <button
      @click="logout"
      class="text-white bg-blue-600 p-1 rounded-md mt-5 w-20 items-end ml-40 xl:ml-8 md:ml-8"
    >
      logout
    </button>

    <button @click="router.push('/wallet')">Wallet</button>
    <button
      class="fixed z-10 bg-sky-950 p-1 rounded-full bottom-5 right-0 xl:bottom-10 xl:right-8"
      v-show="showScrollButton"
      @click="scrollToTop"
    >
      <img src="src/icons/up-arrow.png" alt="scroll-up icon" />
    </button>

    <div class="flex-col flex items-center font-mukta">
      <h1 class="text-6xl mb-10 mt-10 text-yellow-400 font-bebas-neue">Coins</h1>
      <BaseInput v-model="search" placeholder="Pesquise a moeda" />

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
            <h3 class="text-white text-lg uppercase p-1">{{ coin.name }}</h3>
          </div>

          <div class="coin-price text-center">
            <span class="text-2xl font-bold text-green-500">$ {{ coin.current_price }}</span>
          </div>
          <div class="coin-price-change text-center mb-2 p-1">
            <span
              :class="coin.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'"
              >{{ coin.price_change_percentage_24h }}</span
            >
          </div>
          <button @click="addCoin(coin.id)" class="text-white">ADD</button>
        </div>
      </div>

      <button
        id="right-arrow"
        class="text-3xl mt-10 hover:bg-blue-500 text-white py-2 px-4 rounded-full"
      >
        <img src="" alt="" />
      </button>
      <button
        id="right-arrow"
        class="text-3xl mt-10 hover:bg-blue-500 text-white py-2 px-4 rounded-full"
      >
        <img src="" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { readCoins } from '@/model/services'
import BaseInput from '@/components/BaseInput.vue'
import { ref } from 'vue'
import { computed } from 'vue'
import { onBeforeMount } from 'vue'
import { useStore } from '@/stores/users'
import router from '../router'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore/lite'
import { db } from '../firebase'

const showScrollButton = ref(false)
const store = useStore()

const updateVisibility = () => {
  showScrollButton.value = window.scrollY > 100
}
const logout = async () => {
  try {
    await store.logout()
  } catch (error) {
    console.log('Erro')
  }
}

async function addCoin(coin) {
  await updateDoc(doc(db, 'users', 'ENEiOpYQoYZY7EH6YZUW1ZhQNxj1'), {
    wallet: arrayUnion(coin)
  })
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  updateVisibility()
  window.addEventListener('scroll', () => {
    updateVisibility()
  })
})

onBeforeMount(() => {
  store.fetchUser()
  window.removeEventListener('scroll', () => {
    updateVisibility()
  })
})

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
