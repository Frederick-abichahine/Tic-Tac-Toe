//  Tic-Tac-Toe Game
//  Frederick Abi Chahine

// ###########################################
//      Declaring / Initializing variables
// ###########################################

let win_state_matrix = [
    ["top_left", "top_center", "top_right"],
    ["center_left", "center", "center_right"],
    ["bottom_left", "bottom_center", "bottom_right"],
    ["top_left", "center_left", "bottom_left"],
    ["top_center", "center", "bottom_center"],
    ["top_right", "center_right", "bottom_right"],
    ["top_left", "center", "bottom_right"],
    ["top_right", "center", "bottom_left"],
]

let game_board = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
]

let restart
const red_coin = document.getElementById("red")
const yellow_coin = document.getElementById("yellow")

// ###########################################
//                Main function
// ###########################################

const main = () => {
    const sections = document.querySelectorAll(".section")
    restart = document.getElementById("restart")
    restart.onclick = function(){clickRestart()}

    for(let i = 0; i<sections.length; i++){
        sections[i].onclick = function(){clickSection(sections[i])};
    }
}

main()

// ###########################################
//               Other functions
// ###########################################

const clickSection = (x) => {
    if (x.id == "top_left" && !(game_board[0][0])){
        //x.style.backgroundImage="url('Assets/red.png')";
        red_coin.style.top = 155 + "px"
        red_coin.style.right = 130 + "px"
        red_coin.style.opacity = 1
        //red_coin.style.backgroundImage= "url('Assets/red.png')"
        //document.getElementById("red").className = "red-coin";
        game_board[0][0] = true
    }
    else if (x.id == "top_center" && !(game_board[0][1])){
        //x.style.backgroundColor = "blue"
        red_coin.style.top = 155 + "px"
        red_coin.style.opacity = 1
        game_board[0][1] = true
    }
    else if (x.id == "top_right" && !(game_board[0][2])){
        //x.style.backgroundColor = "green"
        red_coin.style.top = 155 + "px"
        red_coin.style.left = 130 + "px"
        red_coin.style.opacity = 1
        game_board[0][2] = true
    }
    else if (x.id == "center_left" && !(game_board[1][0])){
        //x.style.backgroundColor = "yellow"
        red_coin.style.top = 295 + "px"
        red_coin.style.right = 130 + "px"
        red_coin.style.opacity = 1
        game_board[1][0] = true
    }
    else if (x.id == "center" && !(game_board[1][1])){
        //x.style.backgroundColor = "orange"
        red_coin.style.top = 295 + "px"
        red_coin.style.opacity = 1
        game_board[1][1] = true
    }
    else if (x.id == "center_right" && !(game_board[1][2])){
        //x.style.backgroundColor = "brown"
        red_coin.style.top = 295 + "px"
        red_coin.style.left = 130 + "px"
        red_coin.style.opacity = 1
        game_board[1][2] = true
    }
    else if (x.id == "bottom_left" && !(game_board[2][0])){
        //x.style.backgroundColor = "black"
        red_coin.style.top = 425 + "px"
        red_coin.style.right = 130 + "px"
        red_coin.style.opacity = 1
        game_board[2][0] = true
    }
    else if (x.id == "bottom_center" && !(game_board[2][1])){
        //x.style.backgroundColor = "pink"
        red_coin.style.top = 425 + "px"
        red_coin.style.opacity = 1
        game_board[2][1] = true
    }
    else if (x.id == "bottom_right" && !(game_board[2][2])){
        //x.style.backgroundColor = "purple"
        red_coin.style.top = 425 + "px"
        red_coin.style.left = 130 + "px"
        red_coin.style.opacity = 1
        game_board[2][2] = true
    }
}

// -------------------------------------------

const clickRestart = () => {
    document.location.reload(true) 
}

// -------------------------------------------

const minimax = () => {

}

