//  Tic-Tac-Toe Game
//  Frederick Abi Chahine

// ###########################################
//      Declaring / Initializing variables
// ###########################################

let win_state_matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [0, 5, 9],
    [3, 5, 7]
]

let game_board = [false, false, false, false, false, false, false, false, false]

let restart
let human_player = "red_coin"
let ai_player = "yellow_coin"

// ###########################################
//                Main function
// ###########################################

const main = () => {

    const sections = document.querySelectorAll(".section")
    restart = document.getElementById("restart")
    restart.onclick = clickRestart

    for(let i = 0; i<sections.length; i++){
        sections[i].onclick = function(){clickSection(sections[i])};
    }
}

// ###########################################
//               Other functions
// ###########################################

const checkSection = (section) => {
    if (!(game_board[section.id])){
        clickSection(section.id, human_player)
    }
    
    //Check AI win or tie
    //if no win or tie
    //calculate best move
    //clickSection(best_move, ai_player)    
} 

const clickSection = (section, player) => {

    game_board[section] = true

    if (player == "red_coin"){
        section.className += " red-coin"
    }
    else if (player == "yellow_coin"){
        section.className += " yellow-coin"
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



// -------------------------------------------

main()
//end