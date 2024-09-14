<template>
  <TopBar title="O evangelickém kancionálu" is-h1 @back="navigateTo('/')" />
  <div class="custom-container">
    <div class="cont basic-content">
      <h2>Novinky</h2>

      <h3>Lorem ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
      </p>

      <h2>O projektu</h2>

      <p>
        Digitální evangelický kancionál je společným projektem
        (...)
        a&nbsp;týmu vývojářů z&nbsp;komunity
        <a href="https://glowspace.cz">Glow Space</a>.
      </p>

      <p>
        Tištěný kancionál vydal (...) v&nbsp;roce (...). Tištěný zpěvník
        si můžete
        <a href="https://eshop.ecmise.cz/produkt/evangelicky-kancional/"
          >koupit v&nbsp;e-shopu</a
        >.
      </p>

      <h2>Kontakt</h2>

      <p>
        <span>John Doe</span> <br />
        <!-- <span class="text-secondary">koordinátor nového zpěvníku</span> <br />
        <a href="tel:+420-608-880-579">+420 608 880 579</a> <br />
        <a href="mailto:zpevnik@e-cirkev.cz">zpevnik@e-cirkev.cz</a> -->
      </p>

      <h2>Tým, který stojí za touto aplikací</h2>

      <TeamSection
        :members="[
          {
            name: 'Vít Kološ',
            role: 'návrh rozhraní',
          },
          { name: 'P. Ondřej Talaš', role: 'koordinace, uživatelská podpora' },
          { name: 'Patrik Dobiáš', role: 'vývoj mobilní aplikace' },
          { name: 'Miroslav Šerý', role: 'vývoj webu' },
          { name: 'Jana Stuchlíková', role: 'redakce' },
        ]"
      />
    </div>
  </div>
</template>

<script>
import TeamSection from './TeamSection';

export default {
  components: { TeamSection },

  head() {
    return generateHead(this.getTitle(), this.getDescription());
  },

  methods: {
    getTitle() {
      return 'O evangelickém kancionálu';
    },

    getDescription() {
      return 'Podrobnosti o tvorbě nového evangelického kancionálu a jeho digitální verze';
    },
  },
};
</script>

<style lang="postcss" scoped>
.cont {
  @apply mx-6 my-6;
}
</style>
