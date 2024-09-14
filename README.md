# Webová aplikace [evangelickykancional.cz](https://www.evangelickykancional.cz/)

> Digitální evangelický zpěvník je společným projektem [Českobratrské církve evangelické](https://e-cirkev.cz/) a týmu vývojářů z komunity [Glow Space](https://glowspace.cz/).

## Prostředí pro vývoj

1. `cp .env.example .env` (nebo `copy .env.example .env`)
2. `yarn install`
3. `yarn dev`

Vývojový server se spustí na adrese `http://localhost:3000`.

Produkční build lze vytvořit pomocí `yarn build`. Náhled produkčního serveru se spouští příkazem `yarn preview`.

Aktuální verzi Node.js lze specifikovat v souboru `package.json` pomocí `engines`. Uvedenou verzí se řídí i Vercel.
