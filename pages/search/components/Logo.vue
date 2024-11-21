<template>
  <div class="logo">
    <img src="/img/logo.svg" alt="logo" />
    <h1>Evangelický kancionál</h1>
  </div>
</template>

<style lang="postcss" scoped>
.logo {
  @apply flex items-center my-3;
}

img {
  width: 90px;
}

h1 {
  @apply font-custom-bold text-2xl ml-3 md:ml-5;
}
</style>
