<template>
  <div class="w-full md:w-1/3 p-8">
    <div class="max-w-xs bg-white p-8 rounded-2xl mx-auto text-center">
      <img class="mx-auto mb-9 w-10" :src="img" alt="" />
      <h3 class="mb-4 text-xl font-semibold tracking-tight text-black">{{ title }}</h3>
      <p class="mb-8 tracking-tight text-black">
        {{ description }}
      </p>
      <RouterLink to="/login">
        <a
          class="font-semibold bg-[#0991b1] p-2 rounded-lg text-white hover:text-[#eaeaea] tracking-tight transition duration-200"
          href="/login"
          >{{ btnText }}</a
        >
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
defineProps({ title: String, description: String, img: String, btnText: String })
</script>

<style scoped></style>
