//  Tic-Tac-Toe Game
//  Frederick Abi Chahine

// ###########################################
//      Declaring / Initializing variables
// ###########################################

win_state_matrix = [
    ["top_left", "top_center", "top_right"],
    ["center_left", "center", "center_right"],
    ["bottom_left", "bottom_center", "bottom_right"],
    ["top_left", "center_left", "bottom_left"],
    ["top_center", "center", "bottom_center"],
    ["top_right", "center_right", "bottom_right"],
    ["top_left", "center", "bottom_right"],
    ["top_right", "center", "bottom_left"],
]

game_board = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
]

// ###########################################
//                Main function
// ###########################################

const main = () => {
    const sections = document.querySelectorAll(".section")

    for(let i = 0; i<sections.length; i++){
        sections[i].onclick = function(){clickSection(sections[i])};
    }
}

main()

// ###########################################
//               Other functions
// ###########################################

const clickSection = (x) => {
    if (x.id == "top_left"){
        x.style.backgroundColor = "red"
        //x.style.background = url(Assets/red.png)
    }
    else if (x.id == "top_center"){
        x.style.backgroundColor = "blue"
    }
    else if (x.id == "top_right"){
        x.style.backgroundColor = "green"
    }
    else if (x.id == "center_left"){
        x.style.backgroundColor = "yellow"
    }
    else if (x.id == "center"){
        x.style.backgroundColor = "orange"
    }
    else if (x.id == "center_right"){
        x.style.backgroundColor = "brown"
    }
    else if (x.id == "bottom_left"){
        x.style.backgroundColor = "black"
    }
    else if (x.id == "bottom_center"){
        x.style.backgroundColor = "pink"
    }
    else if (x.id == "bottom_right"){
        x.style.backgroundColor = "purple"
    }
}