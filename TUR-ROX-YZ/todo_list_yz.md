# TODO List

Pour la release de l'énigme TUR-ROX-YZ.

## Dans le jeu ZZT

 X Changer le nom du world (j'espère que c'est faisable). Faut que ce soit TUR-ROX-YZ, ou TURROXYZ.
 X Board de présentation : remplacer le H par une bouteille verte.
 X Board de présentation : Enlever la référence à la THCON.
 X Board 1 : Indiquer TUR-ROX{Z... } comme flag.
 - Board flow-chart : Ajouter cet url turrox.neocities.org/TUR-ROX-YZ/manual.html en-dessous de celle de apocalyptech.
 X Enlever /zeta dans museumofzzt.com (on expliquera ça dès le début, et c'est optionnel, puisqu'on peut jouer dans le navigateur)
 X Board flow-chart : Ajouter une clé verte.
 X Board bleu : Ajouter un chemin vers la droite en bas, avec une porte verte.
 X Board de présentation : Ajouter un tout petit chemin vers le bas.
 - Ajouter un nouveau board, avec des équivalences entre les liens externes et les trucs que j'aurais mis en local. (En particulier PuzzleScript).
 - Board vert du python 3.x. Changer le début du flag.
 - Board de présentation : ajouter un personnage en haut du board, derrière une porte avec une clé bleue. Et on donne pas de clé bleue.
 - Board de présentation : le personnage Hinter doit aussi dire un truc du genre : "for example, you could add a blue key just next to your character".
 - Board de présentation : le personnage en haut du board explique des trucs par rapport au board jaune. On explique que l'énigme est découpée en 3 sous-énigmes. Une verte, une rouge, une bleue. La verte est la plus dure, vaut mieux commencer par les deux autres.

## Dans le code PuzzleScript (intégré dans le jeu ZZT)

 X Remplacer le début du flag par "TUR-ROX", dans les messages du jeu.
 X Vérifier qu'il n'y a pas d'autres référence à la THCON dans le jeu puzzlescript.
 X Retrouver comment j'intégrais le code PuzzleScript dans le jeu
   X vérifier que ça marche toujours, y compris avec un jeu ayant déjà le code PuzzleScript
   X Documenter un peu comment lancer ce script.
 X Regénérer le hash et le mettre dans le jeu (il y a 1 seul endroit où se trouve ce hash, ainsi que le morceau du flag)
 X Et du coup : retrouver comment je re-extrayais le code PZS du jeu. (Ce bout de code devra être présent uniquement dans la solution)


## Dans tout ce qu'il y a autour

 - margin ou padding mal foutu, et le jeu peut pas prendre toute la largeur.
 - Expliquer comment démarrer une partie, car pas super évident.
 - Mettre le fichier .zzt en téléchargement, pour faire ce qu'on veut avec.
 - Ajouter une page avec le manual de apocalyptech
 - Ajouter une page un peu secrète avec le repo github de zookeeper.
 - Ajouter une page un peu secrète avec le moteur PuzzleScript dedans (mais ça on pourra le faire plus tard)
 - Le flag doit être TUR-ROX{...}, et non pas THCon21{...}
 - Expliquer comment resetter le jeu et les éditions qu'on a faites dedans. Ou juste ajouter un bouton qui le fait. (Faut vider le local storage, ou un truc du genre).
 - Créer la page pour entrer le code et récupérer la solution (comme la 1ère énigme)
 - Dans le .zip de solution, on doit mettre :
   - le script python qui extrait le PuzzleScript, avec explication de comment l'exécuter (car il faut Pillow).
   - le PuzzleScript directement.
   - et la solution .pdf évidemment.
 - Reprendre le texte de présentation de l'énigme, en y mentionnant le museum of zzt, la THCON, etc. Et après, le lien vers le jeu, youpi.



