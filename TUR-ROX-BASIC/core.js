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

// TODO :
// map sur 35 * 15
// couverts et point de départ
// check du couvert et du y
// message à la fin du code source pour dire où trouver le code source.
// message parchemin et squarity
// messages d'erreur pour le début.
// décors dans la map.
// voices random.

        return `5 rem TUR-ROX-BASE, the tramp game.
10 rem Va voir dans core.js !!
20 tramp_x% = 4
30 tramp_y% = 2
40 area_w% = 35
50 area_h% = 15
60 dim area_lines
70 rem The variable area_lines is a list of list of string.
80 rem Classical chars are defined on 1 byte, emojis are defined on 2 bytes.
90 rem Everything would be messed if area_lines was a list of string.
100 push split("/.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.\\\\", "."), area_lines
110 push split("|. . . . .a. . . . . . . . .a. . . . . . . . .a. .🍴. . . . . . . . .|", "."), area_lines
120 push split("|.1.💩.3.4.5.6.🍴.8.9.0.1.💩.3.4.5.6.7.8.9.0.1.💩.3.4.5.6.7.8.9.a.b.c.d.|", "."), area_lines
130 push split("|. . . . . . . . . . . . . .a. . .🍴. . . . . .a. . . . . . . . . . .|", "."), area_lines
140 push split("|. . . . .📜. . . . . . .🍴. .z.p.l.o.p. . . . . .z.p.l.o.p. . . . . .|", "."), area_lines
150 push split("|. .🍴. . . . . . . . . . . .a. . . . . . . . .a. . . . . . . . . . .|", "."), area_lines
160 push split("|. . . . . . . . . . . . . .a. . . . . .🍴. . .a. . . . . . . . . . .|", "."), area_lines
170 push split("|. .🟩. . .a. . . . . . . . .a. . . . . . . . .a. . . . . . . . .🍴. .|", "."), area_lines
180 push split("|. . . . .🍴. . . . . . . . .a. . . . . . . . .a. . . . . . . . . . .|", "."), area_lines
190 push split("|. . . . .a. . . . . . . . .a. . . . . . . . .a. . . . . . . . . . .|", "."), area_lines
200 push split("|. . . . .a. . . .🍴. . . . .a. . . . . . . . .a. . . . . . . . . . .|", "."), area_lines
210 push split("|. . . . .a. . . . . . . . .a. . . . . . . . .a. . . . .🍴. . . . . .|", "."), area_lines
220 push split("|. . . . .a. . . . . . . . .a. .🍴. . . . . . .a. . . . . . . . . . .|", "."), area_lines
230 push split("|. . . . .a. . . . . . . . .a. . .4. . . . . .a.🍴. . . . . . . . . .|", "."), area_lines
240 push split("\\\\.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-./", "."), area_lines
250 message_1$ = ""
260 message_2$ = ""
270 message_3$ = ""
280 first_action% = 1
2000 rem -------------------------------------------
2010 repeat
2020 rem    cls
2030     gosub 10000
2040     gosub 12000
2050 loop
99999 rem -------------------------------------------
10000 rem Displays the game area and the current message.
10010     cls
10020     bg "rgb", 20, 20, 20
10030     for i = 0 to area_h%-1
10040         line = area_lines[i]
10050         dim line_copy
10060         for x = 0 to area_w%-1
10070             push line[x], line_copy
10080         next
10090         if i = tramp_y%
10100             line_copy[tramp_x%] = "🥴"
10110         end
10120         print join$(line_copy)
10130     next
10140     bg "rgb", 0, 0, 0
10150     fg "rgb", 110, 255, 255
10160     print message_1$
10170     print message_2$
10180     print message_3$
10190     fg "rgb", 255, 255, 255
10200 return
10999 rem -------------------------------------------
11000 rem Function placeholder, just in case.
11999 rem -------------------------------------------
12000 rem Gets the action from the input, verifies it's a one-letter string.
12010     message_1$ = ""
12020     message_2$ = ""
12030     message_3$ = ""
12040     if first_action% = 1
12050         input "Type any text, then press Enter :", action$
12060         first_action% = 0
12070     else
12080         input "Type the game action you want to do :", action$
12090     end
12100     if len(action$) != 1
12110         message_1$ = "All the game actions are only one"
12120         message_2$ = "letter or one digit."
12130         message_3$ = "Type one character, then press Enter."
12140     else
12150         gosub 13000
12160     end
12170 return
12999 rem -------------------------------------------
13000 rem Applies the action stored in action$
13010     action_ok% = 0
13020     if action$ = "s"
13030         gosub 14000
13040         action_ok% = 1
13050     else if action$ = "8"
13060         tramp_y% = tramp_y% - 1
13070         message_2$ = "You go up."
13080         action_ok% = 1
13090     else if action$ = "6"
13100         tramp_x% = tramp_x% + 1
13110         message_2$ = "You go to the right."
13120         action_ok% = 1
13130     else if action$ = "5"
13140         tramp_y% = tramp_y% + 1
13150         message_2$ = "You go down."
13160         action_ok% = 1
13170     else if action$ = "4"
13180         tramp_x% = tramp_x% - 1
13190         message_2$ = "You go to the left."
13200         action_ok% = 1
13210     else if action$ = "q"
13220         print "**********************************"
13230         print "Quitting the game. Bye !"
13240         print "You are now in the BASIC console."
13250         print ""
13260         print "Type the command ";
13270         fg "rgb", 255, 0, 0
13280         print "help";
13290         fg "rgb", 255, 255, 255
13300         print ""
13310         print "to learn the BASIC language."
13320         print ""
13330         print "Type the command ";
13340         fg "rgb", 255, 0, 0
13350         print "list"
13360         fg "rgb", 255, 255, 255
13370         print "to get the source code of the game."
13380         rem A little harsh to quit like that, but who cares ?
13390         action_ok% = 1
13400         stop
13410     end
13420     if action_ok% = 0
13430         message_1$ = "To move, type \\"8\\", \\"6\\", \\"5\\" or \\"4\\"."
13440         message_2$ = "To search on your position, type \\"s\\"."
13450         message_3$ = "Find the object that gives the code."
13460     end
13570 return
13999 rem -------------------------------------------
14000 rem Define the 3 variables message_x$ according to the search action.
14010     line = area_lines[tramp_y%]
14020     tramp_pos$ = line[tramp_x%]
14030     if tramp_pos$ = "🟩"
14040         message_1$ = "Shameless auto-promotion:"
14050         message_2$ = "create nice games in python,"
14060         message_3$ = "go to http://squarity.fr"
14070     else if tramp_pos$ = "📜"
14080         message_1$ = "To say a random thing, type \\"v\\"."
14090         message_2$ = "To quit the game, type \\"q\\"."
14100         message_3$ = "You should quit the game."
14110     else if tramp_pos$ = "🍴"
14120         message_2$ = "Maybe it's the good object."
14130         gosub 15000
14140  rem   else
14150  rem       message_2$ = "You find nothing"
14160     end
14170 return
14999 rem -------------------------------------------
15000 rem Check if it's the good coordinates.
15010     if tramp_y% = 2
15020         message_2$ = "It is the good object !"
15030     end
15040 return

`


    }
    return decodeURIComponent((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;
}
