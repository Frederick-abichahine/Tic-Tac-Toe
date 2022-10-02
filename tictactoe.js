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
let player = 1 //1 for user and 0 for AI

// ###########################################
//                Main function
// ###########################################

const main = () => {
    const sections = document.querySelectorAll(".section")
    restart = document.getElementById("restart")
    restart.onclick = clickRestart
    // console.log(player_turn)
    for(let i = 0; i<sections.length; i++){
        sections[i].onclick = function(){clickSection(sections[i])};
        //sections[i].onclick = changeTurn
        //console.log(player_turn)
    }
}

// ###########################################
//               Other functions
// ###########################################

const clickSection = (x) => {
    if (x.id == "top_left" && !(game_board[0][0])){
        if (player == 1){
            red_coin.style.top = 155 + "px"
            red_coin.style.right = 130 + "px"
            red_coin.style.opacity = 1
            x.className += " red-coin"
            player = 0
            // now here do the AI calculations... IF no win or no tie => call AI, else check if AI won or Tie
        }
        else if (player == 0){
            yellow_coin.style.top = 155 + "px"
            yellow_coin.style.right = 130 + "px"
            yellow_coin.style.opacity = 1
            x.className += " yellow-coin"
            player = 1
        }
        game_board[0][0] = true
    }
    else if (x.id == "top_center" && !(game_board[0][1])){
        if (player == 1){
            red_coin.style.top = 155 + "px"
            red_coin.style.opacity = 1
            x.className += " red-coin"
            player = 0
        }
        else if (player == 0){
            yellow_coin.style.top = 155 + "px"
            yellow_coin.style.opacity = 1
            x.className += " yellow-coin"
            player = 1
        }
        game_board[0][1] = true
    }
    else if (x.id == "top_right" && !(game_board[0][2])){
        
        if (player == 1){
            red_coin.style.top = 155 + "px"
            red_coin.style.left = 130 + "px"
            red_coin.style.opacity = 1
            x.className += " red-coin"
        }
        else if (player == 0){
            yellow_coin.style.top = 155 + "px"
            yellow_coin.style.left = 130 + "px"
            yellow_coin.style.opacity = 1
            x.className += " yellow-coin"
        }
        
        game_board[0][2] = true
    }
    else if (x.id == "center_left" && !(game_board[1][0])){
        red_coin.style.top = 295 + "px"
        red_coin.style.right = 130 + "px"
        red_coin.style.opacity = 1
        x.className += " red-coin"
        game_board[1][0] = true
    }
    else if (x.id == "center" && !(game_board[1][1])){
        red_coin.style.top = 295 + "px"
        red_coin.style.opacity = 1
        x.className += " red-coin"
        game_board[1][1] = true
    }
    else if (x.id == "center_right" && !(game_board[1][2])){
        red_coin.style.top = 295 + "px"
        red_coin.style.left = 130 + "px"
        red_coin.style.opacity = 1
        x.className += " red-coin"
        game_board[1][2] = true
    }
    else if (x.id == "bottom_left" && !(game_board[2][0])){
        red_coin.style.top = 425 + "px"
        red_coin.style.right = 130 + "px"
        red_coin.style.opacity = 1
        x.className += " red-coin"
        game_board[2][0] = true
    }
    else if (x.id == "bottom_center" && !(game_board[2][1])){
        red_coin.style.top = 425 + "px"
        red_coin.style.opacity = 1
        x.className += " red-coin"
        game_board[2][1] = true
    }
    else if (x.id == "bottom_right" && !(game_board[2][2])){
        red_coin.style.top = 425 + "px"
        red_coin.style.left = 130 + "px"
        red_coin.style.opacity = 1
        x.className += " red-coin"
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

// -------------------------------------------

// const changeTurn = () => {
//     if (player_turn == 1){
//         yellow_coin.className += ":invalid"
//         red_coin.className = "red-coin"
//         player_turn = 0
//     }
//     else if (player_turn == 0){
//         red_coin.className += ":invalid"
//         yellow_coin.className = "yellow-coin"
//         player_turn = 1
//     }
// }

// -------------------------------------------

main()
//end