# TUR-ROX

Un voyage parmi les jeux vidéos **TUR**ing-app**ROX**imativement-complet.

Il s'agit d'un site web statique, contenant des énigmes construites à partir de vieux jeux vidéos intégrant des langages de scripts.

Le site est publié ici : https://turrox.neocities.org/

[Licence CC-BY-SA](https://creativecommons.org/licenses/by-sa/4.0/)


## Versionnement

Ce repository est versionné à deux endroits :

 - https://github.com/darkrecher/TUR-ROX
 - https://framagit.org/darkrecher/TUR-ROX

La version la plus récente est celle sur github, et j'essaye de faire en sorte que la version sur framagit soit à jour.


## Pour faire fonctionner le site en local

Il faut démarrer un serveur web, ça ne fonctionnera pas complètement si vous vous contentez d'ouvrir index.html dans votre navigateur.

La méthode ci-dessous indique comment faire avec le serveur intégré dans le langage python, qui est installé sur la plupart des ordinateurs. Vous pouvez utiliser un autre serveur si vous préférez.

 - Télécharger ou cloner ce repository.
 - Ouvrez un terminal et placez-vous dans le répertoire du repository.
 - Exécutez la commande `python -m http.server` ou bien `python3 -m http.server` (selon la manière dont votre python est installé).
 - Un message devrait s'afficher, indiquant l'url de votre serveur, ainsi que son numéro de port (par défaut : 8000).
 - Ouvrez un navigateur web et indiquez dans la barre d'adresse `http://localhost:8000/index.html`.
 - Pour arrêter le serveur, retournez dans le terminal et appuyez sur la séquence de touches Ctrl-C.

