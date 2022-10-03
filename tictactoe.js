//  Tic-Tac-Toe Game
//  Frederick Abi Chahine

// ###########################################
//      Declaring / Initializing variables
// ###########################################

let win_state_matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

let game_board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const sections = document.querySelectorAll(".section")
let restart
const human_player = "red_coin"
const ai_player = "yellow_coin"

// ###########################################
//                Main function
// ###########################################

const main = () => {

    restart = document.getElementById("restart")
    restart.onclick = clickRestart

    for(let i = 0; i<sections.length; i++){
        sections[i].addEventListener("click", checkSection, false)
    }
}

// ###########################################
//               Other functions
// ###########################################

const checkSection = (section) => {

    if (typeof(game_board[section.target.id]) == "number"){
        clickSection(section.target.id, human_player)

        if (!(checkIfTie()) && !(checkIfWin(game_board, human_player))){
            clickSection(calculateBestMove(), ai_player)
        }
    }
} 

// -------------------------------------------

const clickSection = (section, player) => {
    
    game_board[section] = player
    const section_id = document.getElementById(section) 

    if (player == "red_coin"){
        section_id.className += " red-coin"
    }
    else if (player == "yellow_coin"){
        section_id.className += " yellow-coin"
    }

    let win = checkIfWin(game_board, player)

    if (win){
        endGame(win)
    }
}

// -------------------------------------------

const checkIfEmpty = () => { //this function filters the array by creating a new one and returns it without the positions equal to true
    
    return game_board.filter(x => typeof x == "number")
}

// -------------------------------------------

const checkIfTie = () => {

    if (checkIfEmpty().length == 0){

        for(let i = 0; i<sections.length; i++){
            sections[i].removeEventListener("click", checkSection, false)
        }
        document.getElementById("display-message").innerText = "It is a Tie!"
        return true
    }
    return false
}

// -------------------------------------------

const checkIfWin = (game_matrix, player) => {

    let moves = game_matrix.reduce((s, t, w) => (t == player) ? s.concat(w) : s, [])
    let win = null
    for (let [i, j] of win_state_matrix.entries()) {
        if (j.every(x => moves.indexOf(x) > -1)) {
            win = { index: i, player: player }
            break
        }
    }
    return win
}

// -------------------------------------------

const endGame = (win) => {

    for(let index of win_state_matrix[win.index]){
        document.getElementById(index).style.backgroundColor = win.player == human_player ? "#00AEEA":"#00AEEA"
    }

    for(let i = 0; i<sections.length; i++){
        sections[i].removeEventListener("click", checkSection, false)
    }

    document.getElementById("display-message").innerText = win.player == human_player ? "You Win!":"You lost! :("
}

// -------------------------------------------

const calculateBestMove = () => { //minimax will return the best position and this function will get the index of it
    
    return minimax(game_board, ai_player).index
}

// -------------------------------------------

const minimax = (game_matrix, player) => {

    let store_availability = checkIfEmpty()
    if (checkIfWin(game_matrix, human_player)){
        return {score:-10}
    }

    else if (checkIfWin(game_matrix, ai_player)){
        return {score:+10}
    }

    else if (store_availability.length == 0){
        return {score:0}
    }

    let progress = []

    for(let i = 0; i<store_availability.length; i++){
        let single_progression = {}
        single_progression.index = game_matrix[store_availability[i]]
        game_matrix[store_availability[i]] = player //using it like a temp variable

        if (player == ai_player){
            let outcome = minimax(game_matrix, human_player)
            single_progression.score = outcome.score // to keep track of score to see if you are winning or losing
        }

        else if (player == human_player){
            let outcome = minimax(game_matrix, ai_player)
            single_progression.score = outcome.score
        }

        game_matrix[store_availability[i]] = single_progression.index
        progress.push(single_progression) //adding to the progress array
    }

    let best_index

    if (player == ai_player){
        let ultimate_score = -Infinity

        for(let i = 0; i<progress.length; i++){
            
            if (progress[i].score > ultimate_score){
                ultimate_score = progress[i].score
                best_index = i
            }
        }
    }

    else if (player == human_player){
        let ultimate_score = Infinity

        for(let i = 0; i<progress.length; i++){
            
            if (progress[i].score < ultimate_score){
                ultimate_score = progress[i].score
                best_index = i
            }
        }
    }

    return progress[best_index]
}

// -------------------------------------------

const clickRestart = () => {
    document.location.reload(true) 
}

// -------------------------------------------

main()
//end