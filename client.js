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
    "Sleeping in the car" 
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
    if (element.className == "uncovered") {
        element.className = "covered"
        element.style.color = "white"
        element.style.backgroundColor = "black"
    } else {
        element.className = "uncovered"
        element.style.color = "black"
        element.style.backgroundColor = "white"
    }
}


const generateBoard = (board) => {
    const table_base = document.getElementById("bingo table")
    const board_length = Math.sqrt(board.length)

    for (row=0; row<board_length; row++) {
        const row_elem = document.createElement("tr")
        table_base.appendChild(row_elem)
        for (col=0; col<board_length; col++) {
            const col_elem = document.createElement("td")

            col_elem.className = "uncovered"

            col_elem.setAttribute('onclick', 'on_board_click(this)')
            //col_elem.width = "10%"
            //col_elem.height = "10%"
            const board_data = pick_random_item_from_array(board)
            col_elem.innerHTML = board_data
            row_elem.appendChild(col_elem)
        }
    }
}

generateBoard(bingo_items)
