CRIANDO FRONT

# INICIANDO O FRONTEND

```
PS C:\dev\sys\system_alv> npm create vite@latest

> npx
> create-vite

√ Project name: ... front-alv
√ Select a framework: » React
√ Select a variant: » TypeScript

Scaffolding project in C:\dev\sys\system_alv\front-alv...

Done. Now run:

  cd front-alv
  npm install
  npm run dev

PS C:\dev\sys\system_alv> cd front-alv
PS C:\dev\sys\system_alv\front-alv> npm install -D tailwindcss postcss autoprefixer

added 79 packages, and audited 325 packages in 6s

93 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\dev\sys\system_alv\front-alv> npx tailwindcss init -p

Created Tailwind CSS config file: tailwind.config.js
Created PostCSS config file: postcss.config.js
PS C:\dev\sys\system_alv\front-alv> 
PS C:\dev\sys\system_alv\front-alv> npm i -D @types/node

added 2 packages, and audited 327 packages in 2s

93 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\dev\sys\system_alv\front-alv> npx shadcn@latest init
✔ Preflight checks.
✔ Verifying framework. Found Vite.
✔ Validating Tailwind CSS.
✔ Validating import alias.
√ Which style would you like to use? » New York
√ Which color would you like to use as the base color? » Zinc
√ Would you like to use CSS variables for theming? ... no / yes
✔ Writing components.json.
✔ Checking registry.
✔ Updating tailwind.config.js
✔ Updating src\index.css
✔ Installing dependencies.
✔ Created 1 file:
  - src\lib\utils.ts

Success! Project initialization completed.
You may now add components.

PS C:\dev\sys\system_alv\front-alv> npx shadcn@latest add button
>>
✔ Checking registry.
✔ Installing dependencies.
✔ Created 1 file:
  - src\components\ui\button.tsx

```
