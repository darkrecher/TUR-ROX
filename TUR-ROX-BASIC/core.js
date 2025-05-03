export function getParameter(name) {
    if (name == "code") {
        // Si vous lisez ceci, vous avez trouvé le code du jeu. Bravo !
        // Il est balancé dans le terminal de code atto un peu à la bourrin.
        //
        // Si vous modifiez le code dans ce fichier, pensez à recharger la page dans un onglet de navigation privé.
        // Sinon, ça ne se rafraîchit pas correctement et vous aurez toujours l'ancien code (je ne sais pas pourquoi).
        //
        // Le plus simple serait peut-être de modifier le code directement dans le terminal de code.
        // Vous avez lu la doc et vous savez comment faire, n'est-ce pas ?

        return `5 rem TUR-ROX-BASE, the tramp game.
10 print "tagadzim"
20 print "aaaaaacc"
30 print "bbb"
40 rem Va voir dans core.js !!
50 dim worldmap
60 push "     a    ", worldmap
70 push "  b       ", worldmap
80 push "     plop ", worldmap
90 for i = 0 to len(worldmap)-1
100 print worldmap[i]
110 next
120 truc = split("machin")
130 for i = 0 to len(truc)-1
140 print truc[i]
150 next
`
    }
    return decodeURIComponent((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;
}
