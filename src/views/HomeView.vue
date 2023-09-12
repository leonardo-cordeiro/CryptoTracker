<template>
  <div>
    <button
      class="fixed z-10 bg-sky-950 p-1 rounded-full bottom-10 right-8"
      v-show="showScrollButton"
      @click="scrollToTop"
    >
      <img src="src/icons/up-arrow.png" alt="scroll-up icon" />
    </button>

    <div class="bg-[url('src/img/background.jpg')] h-screen overflow-hidden">
      <nav
        :class="[navClass]"
        class="fixed flex z-30 sm:bg-opacity-90 w-full flex-wrap items-center justify-between hover:text-neutral-700 focus:text-neutral-700 lg:py-2"
      >
        <HamburguerBtn />
      </nav>

      <section class="background-radial-gradient text-center lg:text-left">
        <div>
          <div class="">
            <div class="flex h-full items-center justify-center">
              <div class="max-w-[800px] px-6 py-6 text-center text-white md:py- md:px-12">
                <h2
                  class="mb-12 text-5xl font-bold leading-tight tracking-tight mt-32 md:text-6xl md:mt-80 xl:text-7xl xl:mt-60"
                >
                  Track and Analyze Cryptocurrencies
                </h2>
                <p class="text-lg">
                  Stay informed about the latest price movements, historical trends, and key
                  statistics of your favorite cryptocurrencies. Whether you're a seasoned investor
                  or just curious about the crypto market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="mx-auto px-6 lg:px-8 bg-[#080726]" id="services">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg p-5">
            <p class="mt-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Services
            </p>
            <p class="mt-6 text-lg leading-8 text-white">
              At CryptoTracker, we're committed to providing you with a holistic experience that
              empowers your crypto journey. Our services are designed to equip you with the tools
              and knowledge you need to navigate the world of cryptocurrencies effectively. Join us
              today and embrace the future of finance with confidence.
            </p>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold text-white">
                  <component
                    :is="feature.icon"
                    class="absolute left-1 top-1 h-5 w-5 text-cyan-600"
                    aria-hidden="true"
                  />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <img
          src="src/img/crypto_set-removebg-preview.png"
          alt="Product screenshot"
          class="w-[50rem] ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 sm:mt-0 lg:mt-60 xl:mt-40"
        />
      </div>
    </div>

    <section class="py-24 lg:py-28 overflow-hidden bg-sky-950">
      <p
        class="mb-6 font-bold uppercase text-primary dark:text-primary-400 text-center text-[#0991b1]"
      >
        Features
      </p>
      <h2 class="mb-6 text-3xl font-bold text-center pb-16 text-white">Why is it so great?</h2>
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap -m-8">
          <BaseCard
            title="Watchlist:"
            description="Create a personalized watchlist of your favorite cryptocurrencies, keeping them at
                  your fingertips for quick reference."
            img="src/icons/research.png"
            btnText="Get Started"
          />

          <BaseCard
            title="Multiple Cryptocurrencies:"
            description="Track a diverse range of cryptocurrencies, from the most popular to emerging
                altcoins.  Keeping track will never be an issue"
            img="src/icons/cryptocurrency.png"
            btnText="Get Started"
          />

          <BaseCard
            title="Real-Time Price Updates:"
            description="Get instant updates on cryptocurrency prices, ensuring you're always aware of the
                latest market movements."
            img="src/icons/time.png"
            btnText="Get Started"
          />
        </div>
      </div>
    </section>

    <ContactSection />

    <FooterSection />
  </div>
</template>

<script setup>
import HamburguerBtn from '@/components/HamburguerBtn.vue'
import { ArrowTrendingUpIcon, ChartBarIcon, WalletIcon } from '@heroicons/vue/20/solid'
import FooterSection from '@/components/FooterSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import BaseCard from '@/components/BaseCard.vue'
import { ref, onBeforeUnmount, onMounted } from 'vue'

const showScrollButton = ref(false)
const navClass = ref('bg-[#080726]')

const updateVisibility = () => {
  showScrollButton.value = window.scrollY > 100
  navClass.value = window.scrollY > 200 ? 'bg-[#080726]' : 'bg-transparent'
}

onMounted(() => {
  updateVisibility()
  window.addEventListener('scroll', () => {
    updateVisibility()
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', () => {
    updateVisibility()
  })
})

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const features = [
  {
    name: 'Real-time Cryptocurrency Tracking:',
    description:
      'Stay up-to-date with the latest prices and fluctuations of a wide range of cryptocurrencies. Our platform provides real-time data, allowing you to make timely decisions based on accurate information.',
    icon: ArrowTrendingUpIcon
  },
  {
    name: 'In-depth Analysis: ',
    description:
      'Our comprehensive charts and graphs help you understand the past performance and potential future directions of various cryptocurrencies.',
    icon: ChartBarIcon
  },
  {
    name: 'Portfolio Management:',
    description:
      'Keep track of your investments and visualize your portfolio performance over time.',
    icon: WalletIcon
  }
]
</script>

<style scoped></style>
