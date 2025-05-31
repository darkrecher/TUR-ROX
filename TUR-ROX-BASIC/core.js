export function getParameter(name) {
    if (name == "code") {
        // Si vous lisez ceci, vous avez trouvé le code du jeu. Bravo !
        // Il est balancé dans le terminal de code atto un peu à la bourrin.
        //
        // Si vous lancez le site localement et que vous modifiez du code dans ce fichier,
        // pensez à recharger la page dans un onglet de navigation privé.
        // Sinon, ça ne se rafraîchit pas correctement et vous aurez toujours l'ancien code
        // (je ne sais pas pourquoi).
        //
        // Vous pouvez aussi modifier le code directement dans le terminal atto.
        // Vous avez lu la doc et vous savez comment faire, n'est-ce pas ?

        return `5 rem TUR-ROX-BASIC, the tramp game.
10 rem -------------------------------------------
20 tramp_x% = 4
30 tramp_y% = 3
40 area_w% = 35
50 area_h% = 15
60 dim area_lines
70 rem The variable area_lines is a list of list of string.
80 rem Classical chars are defined on 1 byte, emojis are defined on 2 bytes.
90 rem Everything would be messed if area_lines was a list of string.
100 push split("/.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.\\\\", "."), area_lines
110 push split("|. . . . . . . . . . .💩. . . . .🫗. . . . . . . . .🍴. . . . . . . . .|", "."), area_lines
120 push split("|. .💩. . . . .🍴. . . . . .🦴. . . . . . . . .💩. . . . .🍴. . . . . .🚽.|", "."), area_lines
130 push split("|. . . . . . . . . .🚽. . . . . . .🍴. . . . . . . . . . . . . . . . .|", "."), area_lines
140 push split("|.🦴. . . . . . .🫗. . . .🍴. . . . . . . . . .🫗. . .📦. . . . .💩. . . .|", "."), area_lines
150 push split("|. .🍴. . . . .👇. . . . . . .📦. . . . . . . . . . . . . . . . . . . .|", "."), area_lines
160 push split("|. . . . . .👉.📜.👈. . . . . . . . . . . .🍴. . . . . . . .🦴. . . . . .|", "."), area_lines
170 push split("|. .🟩. . . . .👆. . . . . . . . . .🚽. . . . . . . . .💩. . . . . . .🍴.|", "."), area_lines
180 push split("|. . . . . . . . . . . . . . .🍴. . . . . . . .📦. . . . . . . . . . .|", "."), area_lines
190 push split("|. . . . . . . . . . . . . . . . . . . . . . . . . . . . .🫗. . . . .|", "."), area_lines
200 push split("|.📦. . .💩. . . . .🍴. . . . . . . . . . .🚽. . . . . . . . . .💩. . . .|", "."), area_lines
210 push split("|. . . . . . .🫗. . . . . . .🚽. . . . . . . . . . .🍴. .🦴. . . . . . .|", "."), area_lines
220 push split("|. . . . . . . . . .🍴. . . . . . . .💩. . .🫗. . . . . . . . . . . . .|", "."), area_lines
230 push split("|. . . . . . . . . . . . . . . .🦴. . . . . . . . . . . . .🫗. . .🍴. .|", "."), area_lines
240 push split("\\\\.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-./", "."), area_lines
250 dim voices
260 push "Aye search everything.", voices
270 push "Aye am a professional tramp.", voices
280 push "You are the contrary of the contrary of the person that would not want to become the person you would not want to become.", voices
290 push "For a tramp, a handkerchief can be a gift.", voices
300 push "Ha ha ha ! ... Ha ha ha ! ... Ha ha ha ! ... Ha ha ha ha ha ha ha ha !", voices
310 push "Let's hope you will find the good object.", voices
320 message_1$ = ""
330 message_2$ = ""
340 message_3$ = ""
350 first_action% = 1
2000 rem -------------------------------------------
2010 repeat
2020     gosub 10000
2030     gosub 12000
2040 loop
9999 rem -------------------------------------------
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
11999 rem -------------------------------------------
12000 rem Gets the action from the input, verifies it's a one-letter string.
12010     message_1$ = ""
12020     message_2$ = ""
12030     message_3$ = ""
12040     if first_action% = 1
12050         input "Type any text, then press Enter:", action$
12060         first_action% = 0
12070     else
12080         input "Type the game action you want to do:", action$
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
13410     else if action$ = "v"
13420         choice% = floor(random*6)
13430         speak voices[choice%]
13440         action_ok% = 1
13450     end
13460     if action_ok% = 0
13470         message_1$ = "To move, type \\"8\\", \\"6\\", \\"5\\" or \\"4\\"."
13480         message_2$ = "To search on your position, type \\"s\\"."
13490         message_3$ = "A special object gives the password."
13500     end
13510 return
13999 rem -------------------------------------------
14000 rem Define the 3 variables message_x$ according to the search action.
14010     line = area_lines[tramp_y%]
14020     tramp_pos$ = line[tramp_x%]
14030     found_object% = 0
14040     if tramp_pos$ = "🟩"
14050         message_1$ = "Shameless auto-promotion:"
14060         message_2$ = "create nice games in python,"
14070         message_3$ = "go to http://squarity.fr"
14080         found_object% = 1
14090     else if tramp_pos$ = "📜"
14100         message_1$ = "To say a random thing, type \\"v\\"."
14110         message_2$ = "To quit the game, type \\"q\\"."
14120         message_3$ = "You should quit the game."
14130         found_object% = 1
14140     else if tramp_pos$ = "🍴"
14150         found_object% = 1
14160         message_2$ = "You find nothing."
14170         gosub 15000
14180         if all_checks_ok% = 1
14190             message_1$ = "Yay! You found the good object!"
14200             message_2$ = "The secret code is: TUR-ROX{" ; (tramp_y% * 100 + tramp_x%) ; "}"
14210             speak "Congratulations !"
14220         end
14230     end
14240     if found_object% = 0
14250         message_2$ = "You find nothing."
14260     end
14270 return
14999 rem -------------------------------------------
15000 rem Check if it's the good Y coordinate.
15010     all_checks_ok% = 1
15020     val_to_check% = tramp_y%
15030     gosub 16000
15040     if secret_check% = 0
15050         all_checks_ok% = 0
15060     end
15070     if all_checks_ok% = 1
15080         param% = tramp_y%
15090         gosub 17000
15100         if tramp_y% = result%
15110             all_checks_ok% = 0
15120         end
15130     end
15140     if all_checks_ok% = 1
15150         val_to_check% = result%
15160         gosub 16000
15170         if secret_check% = 0
15180             all_checks_ok% = 0
15190         end
15200     end
15210 return
15999 rem -------------------------------------------
16000 rem Secret check
16010     secret_check% = 1
16020     if val_to_check% > 2
16030         for i = 2 to val_to_check%-1
16040             if val_to_check% mod i = 0
16050                 secret_check% = 0
16060             end
16070         next
16080     end
16090 return
16999 rem -------------------------------------------
17000 rem Secret operation
17010     result% = 0
17020     repeat
17030         result% = result% + (param% mod 10)
17040         param% = param% div 10
17050     while param% > 0
17060 return
99995 rem -------------------------------------------
99996 a=" The url to this source code "
99997 a=" can be shown by executing   "
99998 a=" the instruction:            "
99999 a="             print b         "

` + "1 b=\"" + window.location.origin + "/TUR-ROX-BASIC/core.js\""



    }
    return decodeURIComponent((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;
}
