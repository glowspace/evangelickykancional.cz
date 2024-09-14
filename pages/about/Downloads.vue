<template>
  <TopBar title="Materiály ke stažení" is-h1 @back="navigateTo('/')" />
  <div class="custom-container">
    <div class="cont basic-content">
      <h2>Lorem ipsum</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return generateHead(this.getTitle(), this.getDescription());
  },

  methods: {
    getTitle() {
      return 'Materiály ke stažení – Evangelický kancionál';
    },

    getDescription() {
      return 'Materiály k evangelickému kancionálu, které jsme pro vás připravili';
    },
  },
};
</script>

<style lang="postcss" scoped>
.cont {
  @apply mx-6 my-6;
}
</style>
