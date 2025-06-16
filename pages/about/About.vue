<template>
  <TopBar title="O evangelickém kancionálu" is-h1 @back="navigateTo('/')" />
  <div class="custom-container">
    <div class="cont basic-content">
      <h2>O projektu</h2>

      <!-- <p>
        Digitální evangelický kancionál je společným projektem
        (...)
        a&nbsp;týmu vývojářů z&nbsp;komunity
        <a href="https://glowspace.cz">Glow Space</a>.
      </p> -->

      Digitální evangelický zpěvník je společným projektem Slezské církve evangelické a. v. a týmu vývojářů z komunity <a href="https://glowspace.cz">Glow Space</a>.
Tištěný zpěvník vydala v roce 2005 SCEAV ve spolupráci s Luterskou církví evang. a. v. Na zpěvníku pracovala k tomu pověřena komise:
Jan Cieślar, Jiří Chodura, Zdena Pastuszková, Józef Podola <sup>†</sup>, Roman Raszka, Marek Říčan, Wiesław Szpak, Zuzana Szpaková, Jan Wacławek,
na dopisování kytarových akordů také Jindřich Kunz<sup>†</sup>. 
Tištěný zpěvník si můžete koupit zde: <a href="https://eshop.ecmise.cz/produkt/evangelicky-kancional/">Evangelický kancionál - ESHOP ECMISE</a>.

      <h2>Kontakt</h2>

      <p>
        <span>Marek Říčan (<a href="#">mrican@sceav.cz</a>)</span><br />
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
          { name: 'Lukáš Mocek', role: 'redakce' },
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
