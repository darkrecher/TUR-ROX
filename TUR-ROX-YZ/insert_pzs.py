"""
You can get inspiration from this script, to extract the PuzzleScript code.

You need to install the library Pillow to execute it.
You also need the library zookeeper, in the same directory as this script.

To install Pillow, use MY file requirements.txt (in the same directory as this script).
Do not use the requirements.txt that is in zookeeper. It doesn't work.

I versioned it in my repository, and you can also get it here :
https://github.com/DrDos0016/zookeeper/tree/master
"""

FAIL_TEXT = """
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
This code will not work on your computer.

I use it to insert the PuzzleScript code inside the file TURROXYZ.ZZT.
But you don't have the PuzzleScript code.

That's part of the enigma. You have to do the reverse operation.
You have to extract the PuzzleScript code from TURROXYZ.ZZT.
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
"""

import random
import zipfile

# I'm a dirty guy and I don't care
import sys
sys.path.append("zookeeper/")
try:
    import zookeeper.zookeeper
except:
    print(FAIL_TEXT)
    raise


# Dear enigma searcher,
# you don't have this file name. I'm so sad for you...
PUZZLE_SCRIPT_CODE_FILE_NAME = "../../turrox_drafts/solutions/solution_tur-rox-yz/turrox_pzscript.txt"

ZZT_FILE_START = "my_game/TURROXYZ.ZZT"
ZZT_FILE_TEMP = "TURROXYZ.ZZT"
ZIP_FILE_FINAL = "my_game.zip"


NB_LINES_CODE_PAGE = 19
LINE_LENGTH_SMALL_CODE_PAGE = 26
LINE_LENGTH_LARGE_CODE_PAGE = 56

LARGE_PAGE_X = 2
LARGE_PAGE_Y = 4
LARGE_PAGE_INDEX_LABEL_X = 25
LARGE_PAGE_INDEX_LABEL_Y = 2

SMALL_PAGE_1_X = 2
SMALL_PAGE_1_Y = 4
SMALL_PAGE_1_INDEX_LABEL_X = 22
SMALL_PAGE_1_INDEX_LABEL_Y = 2

SMALL_PAGE_2_X = 32
SMALL_PAGE_2_Y = 4
SMALL_PAGE_2_INDEX_LABEL_X = 52
SMALL_PAGE_2_INDEX_LABEL_Y = 2


TEXT_COLOR_AND_IDS = (
    {"color_id": 31, "color_name": "White on Dark Blue", "id": 47},
    {"color_id": 47, "color_name": "White on Dark Green", "id": 48},
    {"color_id": 63, "color_name": "White on Dark Cyan", "id": 49},
    {"color_id": 79, "color_name": "White on Dark Red", "id": 50},
    {"color_id": 95, "color_name": "White on Dark Purple", "id": 51},
    {"color_id": 111, "color_name": "White on Dark Yellow", "id": 52},
    {"color_id": 15, "color_name": "White", "id": 53},
)

SIZE_SMALL = True
SIZE_LARGE = False

random.seed("Une agitation bien inutile n'est-ce pas ?")


def compute_pzs_code_pages(puzzle_script_code_file_name):
    try:
        pzs_code = open(puzzle_script_code_file_name, "r", encoding="ascii").read()
    except:
        print(FAIL_TEXT)
        raise

    # List of tuple with 2 elems.
    # - boolean. SIZE_SMALL or SIZE_LARGE
    # - list with strings : the code lines
    code_pages = []
    pzs_code_lines = pzs_code.split("\n")
    while pzs_code_lines:
        current_page = pzs_code_lines[:NB_LINES_CODE_PAGE]
        pzs_code_lines = pzs_code_lines[NB_LINES_CODE_PAGE:]
        size = SIZE_SMALL
        for line in current_page:
            if len(line) > LINE_LENGTH_LARGE_CODE_PAGE:
                raise Exception(f"Ligne trop longue : {line}")
            if len(line) > LINE_LENGTH_SMALL_CODE_PAGE:
                size = SIZE_LARGE
        code_pages.append((size, current_page))

    nb_page_large = 0
    nb_page_small = 0
    for size, lines in code_pages:
        if size:
            nb_page_small += 1
        else:
            nb_page_large += 1

    print("nb_page_small : ", nb_page_small, ". nb boards small :", nb_page_small / 2)
    print("nb_page_large", nb_page_large)
    return code_pages


def write_code_page_on_board(board, coord_page, page_lines, padding_width):

    x_start, y_start = coord_page
    for y, line in enumerate(page_lines, y_start):
        line = line.ljust(padding_width)
        for x, char in enumerate(line, x_start):
            # There is no 6th index, because this index is white on black,
            # and that's not visually ugly enough.
            color_index = random.randrange(6)
            text_infos = TEXT_COLOR_AND_IDS[color_index]
            color_id = text_infos["color_id"]
            tile_index = y * 60 + x
            elem_id = text_infos["id"]
            character_index = ord(char)
            new_elem = zookeeper.zookeeper.Element(
                elem_id, color_id, None, tile_index, character_index
            )
            board.elements[tile_index] = new_elem


def write_index_label_on_board(board, coord_index_label, index_label):

    x_start, y_start = coord_index_label
    str_index_label = f"{index_label:02}"
    for x, char in enumerate(str_index_label, x_start):
        color_index = 6
        text_infos = TEXT_COLOR_AND_IDS[color_index]
        color_id = text_infos["color_id"]
        tile_index = y_start * 60 + x
        elem_id = text_infos["id"]
        character_index = ord(char)
        new_elem = zookeeper.zookeeper.Element(
            elem_id, color_id, None, tile_index, character_index
        )
        board.elements[tile_index] = new_elem


def iter_on_large_code_pages(large_boards):
    for board in large_boards:
        yield (
            board,
            LARGE_PAGE_X,
            LARGE_PAGE_Y,
            LARGE_PAGE_INDEX_LABEL_X,
            LARGE_PAGE_INDEX_LABEL_Y,
        )


def iter_on_small_code_pages(small_boards):
    for board in small_boards:
        yield (
            board,
            SMALL_PAGE_1_X,
            SMALL_PAGE_1_Y,
            SMALL_PAGE_1_INDEX_LABEL_X,
            SMALL_PAGE_1_INDEX_LABEL_Y,
        )
        yield (
            board,
            SMALL_PAGE_2_X,
            SMALL_PAGE_2_Y,
            SMALL_PAGE_2_INDEX_LABEL_X,
            SMALL_PAGE_2_INDEX_LABEL_Y,
        )


# Source - https://stackoverflow.com/a/1855118 Posted by Mark Byers
def make_zip_file():
    with zipfile.ZipFile(ZIP_FILE_FINAL, 'w', zipfile.ZIP_DEFLATED) as zipf:
        #zipdir('tmp/', zipf)
        zipf.write(ZZT_FILE_TEMP, ZZT_FILE_TEMP)


def main():
    code_pages = compute_pzs_code_pages(PUZZLE_SCRIPT_CODE_FILE_NAME)
    z = zookeeper.zookeeper.Zookeeper(ZZT_FILE_START)
    large_boards = []
    small_boards = []
    for board in z.boards:
        print(board.title)
        print("-" * 40)
        if board.title.startswith("Puzzle Script L"):
            large_boards.append(board)
        elif board.title.startswith("Puzzle Script S"):
            small_boards.append(board)

    large_boards.sort(key=lambda b: b.title)
    small_boards.sort(key=lambda b: b.title)
    iterator_large_page = iter_on_large_code_pages(large_boards)
    iterator_small_page = iter_on_small_code_pages(small_boards)

    for page_index, (size, code_lines) in enumerate(code_pages, 1):
        if size == SIZE_LARGE:
            board, page_x, page_y, index_label_x, index_label_y = next(
                iterator_large_page
            )
            line_length = LINE_LENGTH_LARGE_CODE_PAGE
        else:
            board, page_x, page_y, index_label_x, index_label_y = next(
                iterator_small_page
            )
            line_length = LINE_LENGTH_SMALL_CODE_PAGE

        write_code_page_on_board(board, (page_x, page_y), code_lines, line_length)
        write_index_label_on_board(board, (index_label_x, index_label_y), page_index)

    # Save the ZZT file in a temporary file
    z.save(ZZT_FILE_TEMP)
    # Put the file in my_game.zip
    make_zip_file()
    z.close_file()
    print("It is done. If the file in the .zip is ok,")
    print("You should move manually TURROXYZ.ZZT to my_game/TURROXYZ.ZZT.")


if __name__ == "__main__":
    main()
