# Frontend (React)

npm create vite .
npm install react-router
npm install @fontsource-variable/inter
npm install react-icons

npm install @fontsource-variable/inter
Az inter betűtípust tölti le és használja a frontend. (Előtelepített betűstílus)
A main.jsx-ben kell importálni: import "@fontsource-variable/inter"; majd az index.css-ben alkalmazom a body-n:
font-family: "Inter Variable", sans-serif;

npm install react-icons
Segítségével ikonokat tudunk alkalmazni, a weboldal ahol lehet válogatni:
https://react-icons.github.io/react-icons/

Az alkalmazás minden oldalon komponensként hívja meg a header.jsx-et.
Alatta a PageHeader.jsx-et hívja meg aminek paraméterként adom át az: eyebrow, title, description, linkText, linkTo, icon, így azonos kinézeten más kontentet tudok csinálni gyorsan és egyszerűen

# Backend (Express)

npm init -y
npm install express
npm install nodemon --save-dev
npm install dotenv

Az index.js fájlt, server.js és app.js fájltra szétosztása, bevett szokás.
Teszteknél portütközés elkerülése
Felelősségek szétválasztása
Rugalmasság

env.js fájlban kezelni a .env változót
Egy helyen van az összes változó, nem szóródik szét az alkalmazásban
Korai hibajelzés
Típuskonverzió és alapértelmezések
Egyszerűbb tesztelés és refaktorálás
A dotenv betöltési sorrend probléma megszűnik
