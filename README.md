# CONFIGURANDO O GITHUB

```
Alvorada Veículos@DESKTOP-BO8D7TC MINGW64 /c/dev/sys
$ git init
Initialized empty Git repository in C:/dev/sys/.git/

Alvorada Veículos@DESKTOP-BO8D7TC MINGW64 /c/dev/sys (master)
$ git add .

Alvorada Veículos@DESKTOP-BO8D7TC MINGW64 /c/dev/sys (master)
$ git commit -m "first commit"
[master (root-commit) 7a25295] first commit
 4 files changed, 114 insertions(+)
 create mode 100644 REAMDE.md
 create mode 100644 api_alv/REAMDE.md
 create mode 100644 app_alv/README.md
 create mode 100644 system_alv/REAMDE.md

Alvorada Veículos@DESKTOP-BO8D7TC MINGW64 /c/dev/sys (master)
$ git branch -M main

Alvorada Veículos@DESKTOP-BO8D7TC MINGW64 /c/dev/sys (main)
$ git remote add origin https://github.com/Patrick-dev-remoto/app-alv.git

Alvorada Veículos@DESKTOP-BO8D7TC MINGW64 /c/dev/sys (main)
$ git push -u origin main
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 12 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (9/9), 1.96 KiB | 1.96 MiB/s, done.
Total 9 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/Patrick-dev-remoto/app-alv.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.

Alvorada Veículos@DESKTOP-BO8D7TC MINGW64 /c/dev/sys (main)
$ git checkout -b remote
Switched to a new branch 'remote'

Alvorada Veículos@DESKTOP-BO8D7TC MINGW64 /c/dev/sys (remote)
$ git branch
  main
* remote

Alvorada Veículos@DESKTOP-BO8D7TC MINGW64 /c/dev/sys (remote)
$ git push -u origin remote
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
remote: 
remote: Create a pull request for 'remote' on GitHub by visiting:
remote:      https://github.com/Patrick-dev-remoto/app-alv/pull/new/remote
remote:
To https://github.com/Patrick-dev-remoto/app-alv.git
 * [new branch]      remote -> remote
branch 'remote' set up to track 'origin/remote'.

Alvorada Veículos@DESKTOP-BO8D7TC MINGW64 /c/dev/sys (remote)
$
```

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


# INICIANDO APLICATIVO

```
PS C:\dev\system\app_alv> npx create-expo-app@latest
Need to install the following packages:
create-expo-app@3.0.0
Ok to proceed? (y) y

√ What is your app named? ... AppAlv
√ Downloaded and extracted project files.
> npm install
npm warn deprecated osenv@0.1.5: This package is no longer supported.
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated @babel/plugin-proposal-optional-catch-binding@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-optional-catch-binding instead.
npm warn deprecated @babel/plugin-proposal-numeric-separator@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-numeric-separator instead.
npm warn deprecated @babel/plugin-proposal-nullish-coalescing-operator@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-nullish-coalescing-operator instead.
npm warn deprecated @babel/plugin-proposal-class-properties@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-class-properties instead.
npm warn deprecated rimraf@2.6.3: Rimraf versions prior to v4 are no longer supported
npm warn deprecated @babel/plugin-proposal-optional-chaining@7.21.0: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-optional-chaining instead.
npm warn deprecated @babel/plugin-proposal-object-rest-spread@7.20.7: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-object-rest-spread instead.
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated abab@2.0.6: Use your platform's native atob() and btoa() methods instead
npm warn deprecated @babel/plugin-proposal-async-generator-functions@7.20.7: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-async-generator-functions instead.
npm warn deprecated glob@7.1.6: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.1.6: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.1.6: Glob versions prior to v9 are no longer supported
npm warn deprecated @babel/plugin-proposal-logical-assignment-operators@7.20.7: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-logical-assignment-operators instead.
npm warn deprecated querystring@0.2.1: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.       
npm warn deprecated domexception@4.0.0: Use your platform's native DOMException instead

added 1561 packages, and audited 1562 packages in 1m

146 packages are looking for funding
  run `npm fund` for details

3 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

✅ Your project is ready!

To run your project, navigate to the directory and run one of the following npm commands.

- cd AppAlv
- npm run android
- npm run ios # you need to use macOS to build the iOS project - use the Expo app if you need to do iOS development without a Mac
- npm run web
PS C:\dev\system\app_alv> cd AppAlv
PS C:\dev\system\app_alv\AppAlv> npm run android
```
