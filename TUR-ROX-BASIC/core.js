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
130 push split("|. . . . .a. . . . . . . . .a. . .🍴. . . . . .a. . . . . . . . . . .|", "."), area_lines
140 push split("|. . . . .🟩.p.o.p. . . .🍴. .z.p.l.o.p. . . . . .z.p.l.o.p. . . . . .|", "."), area_lines
150 push split("|. .🍴. . .a. . . . . . . . .a. . . . . . . . .a. . . . . . . . . . .|", "."), area_lines
160 push split("|. . . . .a. . . . . . . . .a. . . . . .🍴. . .a. . . . . . . . . . .|", "."), area_lines
170 push split("|. . . . .a. . . . . . . . .a. . . . . . . . .a. . . . . . . . .🍴. .|", "."), area_lines
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
2040     gosub 11000
2050 rem    print "The tramp is on the char " ; tramp_pos$
2060     if tramp_pos$ = "💩"
2070         print "it's a poooo !"
2080     end
2090     gosub 12000
2100 loop
99999 rem -------------------------------------------
10000 rem Displays the game area and the current message.
10001     cls
10003     bg "rgb", 20, 20, 20
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
10120     bg "rgb", 0, 0, 0
10130     fg "rgb", 110, 255, 255
10140     print message_1$
10150     print message_2$
10160     print message_3$
10170     fg "rgb", 255, 255, 255
10180 return
10999 rem -------------------------------------------
11000 rem Puts in tramp_pos$ the character on which the tramp is.
11010     line = area_lines[tramp_y%]
11020     tramp_pos$ = line[tramp_x%]
11030 return
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
12110         message_1$ = "All the game actions are"
12120         message_2$ = "only one letter or one digit."
12130         message_3$ = "Type one character, then press Enter."
12140     else
12150         gosub 13000
12160     end
12170 return
12999 rem -------------------------------------------
13000 rem Applies the action stored in action$

13020     if action$ = "8"
13030         tramp_y% = tramp_y% - 1
13040     else if action$ = "6"
13050         tramp_x% = tramp_x% + 1
13060     else if action$ = "5"
13070         tramp_y% = tramp_y% + 1
13080     else if action$ = "4"
13090         tramp_x% = tramp_x% - 1
13100     else if action$ = "q"
13110         print "Quitting the game. Bye !"
13120         rem A little harsh to quit like that, but who cares ?
13130         stop
13131     else if action$ = "s"
13132         gosub 14000
13140     else
13150         message_1$ = "To move, type \\"8\\", \\"6\\", \\"5\\" or \\"4\\"."
13160         message_2$ = "To search on your position, type \\"s\\"."
13170         message_3$ = "Find the object that gives the code."
13180         print "fail"
13190     end
13200 return


13999 rem -------------------------------------------
14000 rem Define the 3 variables message_x$ according to the search action.
14010 gosub 11000
14020 if tramp_pos$ = "🟩"
14030 message_1$ = "Shameless auto-promotion: create games"
14040 message_2$ = "in python, go to http://squarity.fr".
14050 end
14060 return

`

// Shameless auto-promotion:
// create nice games in python,
// go to http://squarity.fr

// All the game actions are
// only one letter or one digit.
// Try any letter, then press Enter.

// Type any text, then press Enter.

// To move, type "8", "6", "5" or "4".
// To search on your position, type "s".
// Find the object that gives the code.

// To say a random thing, type "v".
// To quit the game, type "q".
// You should quit the game.

// Quitting the game. Bye !
//
// You are now in the BASIC console.
// Type the command "help",
// to learn the BASIC language.
// Type the command "list"
// to get the source code of the game.
//

    }
    return decodeURIComponent((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;
}
