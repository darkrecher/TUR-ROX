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

// Sur la map:
// le truc qui fait gagner.
// un carré qui fait la pub pour Squarity.
// un parchemin qui explique qu'on peut quitter, et aussi faire "list".
//
// Le "help" sera expliqué dans le code source.

        return `5 rem TUR-ROX-BASE, the tramp game.
10 rem Va voir dans core.js !!
20 tramp_x% = 5
30 tramp_y% = 2
40 area_w% = 10
50 area_h% = 5
60 dim area_lines
70 rem The variable area_lines is a list of list of string.
80 rem Classical chars are defined on 1 byte, emojis are defined on 2 bytes.
90 rem Everything would be messed if area_lines was a list of string.
100 push split(" . . . . .a. . . . ", "."), area_lines
110 push split("0.1.💩.3.4.5.6.7.8.9", "."), area_lines
120 push split(" . . . .🟩.p.l.o.p. ", "."), area_lines
130 push split(" . . . . .b. . . . ", "."), area_lines
140 push split(" . . . . . . .z. . ", "."), area_lines
1000 rem -------------------------------------------
1010 repeat
1020     cls
1030     gosub 10000
1040     gosub 11000
1050     print "The tramp is on the char " ; tramp_char$
1060     if tramp_char$ = "💩"
1070         print "it's a poooo !"
1080     end
1090     gosub 12000
1100 loop
99999 rem -------------------------------------------
10000 rem Displays the game area.
10010     for i = 0 to area_h%-1
10020         line = area_lines[i]
10030         dim line_copy
10040         for x = 0 to area_w%-1
10050             push line[x], line_copy
10060         next
10070         if i = tramp_y%
10080             line_copy[tramp_x%] = "🥴"
10090         end
10100         print join$(line_copy)
10110     next
10120 return
10999 rem -------------------------------------------
11000 rem Puts in tramp_char$ the character on which the tramp is.
11010     line = area_lines[tramp_y%]
11020     tramp_char$ = line[tramp_x%]
11030 return
11999 rem -------------------------------------------
12000 rem Gets and applies the action from the player.
12010     input "Type the game action you want to do :", action$
12020     if action$ = "8"
12030         tramp_y% = tramp_y% - 1
12040     else if action$ = "6"
12050         tramp_x% = tramp_x% + 1
12060     else if action$ = "5"
12070         tramp_y% = tramp_y% + 1
12080     else if action$ = "4"
12090         tramp_x% = tramp_x% - 1
12100     else if action$ = "s"
12110         print "Quitting the game. Bye !"
12120         rem A little harsh to quit like that, but who cares ?
12130         stop
12140     else
12150         print "fail"
12160     end
12170 return

`
    }
    return decodeURIComponent((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;
}
