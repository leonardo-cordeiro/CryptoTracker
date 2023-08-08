<template>
  <div class="wrap">
    <nav class="flex bg-black navbar">
      <a href="/home"><img class="logo" src="../img/logo.png" alt="Logo" /></a>
      <ul>
        <li><a href="/Login">Sign In</a></li>
      </ul>
    </nav>
  </div>
</template>

<script setup></script>

<style scoped>
.navbar {
  justify-content: space-around;
}

.logo {
  width: 300px;
}

ul {
  display: flex;
  background-color: beige;
  border-radius: 20px;
  height: 100%;
  margin-top: 30px;
}

li {
  padding: 10px;
}
</style>
