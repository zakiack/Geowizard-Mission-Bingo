bingo_items = [
    "Knoblets",
    "Wobblers",
    "Gorse",
    "Railroad Crossing",
    "Angry Farmer",
    "Line straight through a house",
    "Poor Gloves",
    "Injury",
    "Mission Failure",
    "Tom Saying Curtains",
    "Tom Almost Dying",
    "Major Incident",
    "Motorway Crossing",
    "Platinum",
    "Gold",
    "Silver",
    "Tom walks off line on accident",
    "GPS Malfunction",
    "Crossing a Body of Water",
    "Ravine steeper than he planned",
    "Really Poor Planning",
    "Wales Reference",
    "Chill Chat with Local",
    "Brambles",
    "River Crossing",
    "Lilac Orchard",
    "Blunderous Bugail",
    "Really Historic Building",
    "Beautiful View",
    "Self restraint",
    "Rain",
    "Something REALLY Disgusting",
    "Safety of the Forest",
    "Intense Chase",
    "Huge hedgerow",
    "Sleeping in the car",
    "Tractor getting really close",
    "Insane coincidence"
]

const pick_random_item_from_array = (array_specified) => {
    const length = array_specified.length
    const rand_idx = Math.round(Math.random() * (length-1))
    const return_item = array_specified[rand_idx]
    console.log(array_specified)
    console.log('IDX: ' + String(rand_idx) + ', Length: ' + String(length) + ', Item: ' + return_item)
    array_specified.splice(rand_idx, 1)
    return return_item
}

const on_board_click = (element) => {
    const COVERED_BACKGROUND_COLOR = "#ed9339"
    const UNVOVERED_BACKGROUND_COLOR = ""
    if (element.style.backgroundColor == "") {
        element.style.backgroundColor = COVERED_BACKGROUND_COLOR
        element.className = "covered"
    } else {
        element.style.backgroundColor = UNVOVERED_BACKGROUND_COLOR
        element.className = "uncovered"
    }
}


const generateBoard = (board, board_length) => {
    const table_base = document.getElementById("bingo table")

    document.getElementById("board-title").innerHTML = `${board_length}x${board_length} Straight Line Mission Bingo board`

    for (row=0; row<board_length; row++) {
        const row_elem = document.createElement("tr")
        table_base.appendChild(row_elem)

        for (col=0; col<board_length; col++) {
            const col_elem = document.createElement("td")

            col_elem.className = "uncovered"

            col_elem.setAttribute('onclick', 'on_board_click(this)')
            const board_data = pick_random_item_from_array(board)
            col_elem.innerHTML = board_data
            row_elem.appendChild(col_elem)
        }
    }
}

const onGenerateClick = () => {
    const MIN_BOARD_SIZE = 1
    const MAX_BOARD_SIZE = 5
    const size = Number(document.getElementById("board-size").value)
    if (size >= MIN_BOARD_SIZE && size <= MAX_BOARD_SIZE && Number.isInteger(size)) {
        document.getElementById("pre-generation-container").remove()
        generateBoard(bingo_items, size)
    } else {
        document.getElementById("output-text").innerHTML = `The number you entered did not meet the requirements. The board size must be an integer between ${MIN_BOARD_SIZE} and ${MAX_BOARD_SIZE}. Please try again!`
    }
}
