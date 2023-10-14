<template>
  <div
    class="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-[url('src/img/background.jpg')]"
  >
    <div
      class="lg:w-2/6 mx-auto md:w-1/2 bg-[#080726] bg-opacity-50 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <RouterLink to="/">
          <a href="/">
            <img class="mx-auto lg:h-28 xl:h-28 w-auto" src="src/img/logo.png" alt="Your Company"
          /></a>
        </RouterLink>
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign Up
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent="register">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-[#e3cc63]"
              >Email address</label
            >
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required=""
                class="block w-full rounded-md py-1.5 text-gray-900ring-1 ring-inset placeholder:text-gray-900 sm:text-sm sm:leading-6"
                v-model="register_form.email"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-[#e3cc63]"
                >Password</label
              >
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="block w-full rounded-md py-1.5 text-gray-900ring-1 ring-inset placeholder:text-gray-900 sm:text-sm sm:leading-6"
                v-model="register_form.password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              value="Register"
              class="flex w-full justify-center rounded-md bg-[#e3cc63] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#c9ae36] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          Already a member?
          {{ ' ' }}
          <RouterLink to="/login">
            <a href="/login" class="font-semibold leading-6 text-[#e3cc63] hover:text-[#c9ae36]"
              >Log In!</a
            >
          </RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from '@/stores/users.js'

const register_form = ref({})
const store = useStore()

const register = async () => {
  try {
    await store.register(register_form.value)
  } catch (error) {
    console.log('Erro')
  }
}

console.log(register_form)
</script>

<style scoped></style>
