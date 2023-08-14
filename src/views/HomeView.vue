<template>
  <div class="bg-[url('src/img/background.jpg')] h-screen overflow-hidden">
    <nav
      class="relative flex w-full flex-wrap items-center justify-between py-2 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 lg:py-4"
      data-te-navbar-ref
    >
      <div class="flex w-full flex-wrap items-center justify-between px-3">
        <div>
          <a href="/">
            <img
              class="mr-2"
              src="src/img/logo.png"
              style="height: 80px"
              alt="TE Logo"
              loading="lazy"
            />
          </a>
        </div>

        <!-- Hamburger button for mobile view -->
        <hamburguerBtn />
      </div>
    </nav>

    <section class="background-radial-gradient text-center lg:text-left">
      <div>
        <div class="">
          <div class="flex h-full items-center justify-center">
            <div class="max-w-[800px] px-6 py-6 text-center text-white md:py- md:px-12">
              <h2
                class="mb-12 text-5xl font-bold leading-tight tracking-tight mt-32 md:text-6xl md:mt-72 xl:text-7xl xl:mt-48"
              >
                Track and Analyze Cryptocurrencies
              </h2>
              <p class="text-lg">
                Stay informed about the latest price movements, historical trends, and key
                statistics of your favorite cryptocurrencies. Whether you're a seasoned investor or
                just curious about the crypto market.
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
          <p class="mt-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Services</p>
          <p class="mt-6 text-lg leading-8 text-white">
            At CryptoTracker, we're committed to providing you with a holistic experience that
            empowers your crypto journey. Our services are designed to equip you with the tools and
            knowledge you need to navigate the world of cryptocurrencies effectively. Join us today
            and embrace the future of finance with confidence.
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

  <section class="py-24 lg:py-28 overflow-hidden bg-[#080726]">
    <p
      class="mb-6 font-bold uppercase text-primary dark:text-primary-400 text-center text-[#0991b1]"
    >
      Features
    </p>
    <h2 class="mb-6 text-3xl font-bold text-center pb-16 text-white">Why is it so great?</h2>
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -m-8">
        <div class="w-full md:w-1/3 p-8">
          <div class="max-w-xs mx-auto text-center">
            <img class="mx-auto mb-9" src="src/icons/research.png" alt="" />
            <h3 class="mb-4 text-xl font-semibold tracking-tight text-white">Watchlist:</h3>
            <p class="mb-8 tracking-tight text-white">
              Create a personalized watchlist of your favorite cryptocurrencies, keeping them at
              your fingertips for quick reference.
            </p>
            <a
              class="font-semibold bg-white p-2 rounded-lg text-[#0991b1] hover:text-[#0991b1] tracking-tight transition duration-200"
              href="/login"
              >Get Started</a
            >
          </div>
        </div>

        <div class="w-full md:w-1/3 p-8">
          <div class="max-w-xs mx-auto text-center">
            <img class="mx-auto mb-9 w-10" src="src/icons/cryptocurrency.png" alt="" />
            <h3 class="mb-4 text-xl font-semibold tracking-tight text-white">
              Multiple Cryptocurrencies:
            </h3>
            <p class="mb-8 tracking-tight text-white">
              Track a diverse range of cryptocurrencies, from the most popular to emerging altcoins.
            </p>
            <br />
            <a
              class="font-semibold bg-white p-2 rounded-lg text-[#0991b1] hover:text-[#0991b1] tracking-tight transition duration-200"
              href="/login"
              >Get Started</a
            >
          </div>
        </div>
        <div class="w-full md:w-1/3 p-8">
          <div class="max-w-xs mx-auto text-center">
            <img class="mx-auto mb-9" src="src/icons/time.png" alt="" />
            <h3 class="mb-4 text-xl font-semibold tracking-tight text-white">
              Real-Time Price Updates:
            </h3>
            <p class="mb-8 tracking-tight text-white">
              Get instant updates on cryptocurrency prices, ensuring you're always aware of the
              latest market movements.
            </p>
            <a
              class="font-semibold bg-white p-2 rounded-lg text-[#0991b1] hover:text-[#0991b1] tracking-tight transition duration-200"
              href="/login"
              >Get Started</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="min-h-screen bg-[#080726] py-6 flex flex-col justify-center sm:py-12" id="contact">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-[#0991b1] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
      ></div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div>
            <h1 class="text-3xl font-extrabold">Contact</h1>
            <p class="mt-3">
              Have questions or feedback? Need assistance with technical matters? Interested in
              learning more about our Business plan? We're here to help. Drop us a line and we'll
              get back to you promptly.
            </p>
            <hr class="mt-3 border-gray-300" />
          </div>
          <div class="divide-y divide-gray-200">
            <form
              class="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 -mb-8"
            >
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Name <span class="text-red-500">*</span>
              </label>
              <input
                required
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Name"
              />

              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Email <span class="text-red-500">*</span>
              </label>
              <input
                required
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="email"
                placeholder="Email"
              />

              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Message <span class="text-red-500">*</span>
              </label>
              <textarea
                required
                class="resize-y py-3 px-4 border focus:outline-none rounded-md w-full bg-gray-200"
                placeholder="Your message..."
              ></textarea>

              <div class="flex items-end justify-end">
                <button
                  class="bg-[#0991b1] text-white font-semibold py-2 px-4 rounded hover:text-black"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <FooterSection />
</template>

<script setup>
import HamburguerBtn from '../components/HamburguerBtn.vue'
import { ArrowTrendingUpIcon, ChartBarIcon, WalletIcon } from '@heroicons/vue/20/solid'
import FooterSection from '../components/FooterSection.vue'

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
