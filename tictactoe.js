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
const human_player = "red_coin"
const ai_player = "yellow_coin"

// ###########################################
//                Main function
// ###########################################

const main = () => {

    const sections = document.querySelectorAll(".section")
    restart = document.getElementById("restart")
    restart.onclick = clickRestart

    for(let i = 0; i<sections.length; i++){
        //sections[i].onclick = function(){clickSection(sections[i])};
        sections[i].addEventListener("click", checkSection, false)
    }
}

// ###########################################
//               Other functions
// ###########################################

const checkSection = (section) => {

    if (!(game_board[section.target.id])){
        clickSection(section.target.id, human_player)

        if (!(checkIfTie()) && !(checkIfWin(game_board, human_player))){
            //calculate best move
            //clickSection(best_move, ai_player)   
        }
    }
} 

// -------------------------------------------

const clickSection = (section, player) => {
    
    game_board[section] = true
    const section_id = document.getElementById(section) 

    if (player == "red_coin"){
        section_id.className += " red-coin"
    }
    else if (player == "yellow_coin"){
        section_id.className += " yellow-coin"
    }
}

// -------------------------------------------

const checkIfEmpty = () => { //this function filters the array by creating a new one and returns it without the positions equal to true
    return game_board.filter(x => x == false)
}

// -------------------------------------------

const checkIfTie = () => {

    if (checkIfEmpty().length == 0){

        for(let i = 0; i<sections.length; i++){
            sections[i].removeEventListener("click", checkSection, false)
        }
        // Display on screen that it is a Tie
        return true
    }
    return false
}

// -------------------------------------------

const checkIfWin = () => {

    
}

// -------------------------------------------

const endGame = (z) => { //pass parameter later

    for(let i = 0; i<win_state_matrix[z].length; i++){
        // here I will put the stripe through / color etc... design for win or loss
    }

    for(let i = 0; i<sections.length; i++){
        sections[i].removeEventListener("click", checkSection, false)
    }

    //declare winner / loser
}

// -------------------------------------------

const minimax = () => {

}

// -------------------------------------------

const clickRestart = () => {
    document.location.reload(true) 
}

// -------------------------------------------

main()
//end