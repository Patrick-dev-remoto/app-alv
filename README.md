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