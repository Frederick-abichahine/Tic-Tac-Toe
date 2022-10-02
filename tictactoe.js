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
let ai_layer = "yellow_coin"

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

//const 

const clickSection = (x, player) => {
    if (!(game_board[x.id])){
        
        game_board[x.id] = true

        if (player == "red_coin"){
            x.className += " red-coin"
        }
        else if (player == "yellow_coin"){
            x.className += " yellow-coin"
        }
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