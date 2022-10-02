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

    if (!(game_board[section.target.id])){
        clickSection(section.target.id, human_player)

        if (!(checkIfTie()) && !(checkIfWin(game_board, human_player))){
            clickSection(calculateBestMove(), ai_player)
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

    let win = checkIfWin(game_board, player)

    if (win){
        endGame(win)
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

const checkIfWin = (game_board, player) => {

    let moves = game_board.reduce((a, e, i) => (e == player) ? a.concat(i) : a, [])
    let win = null
    for (let [i, j] of win_state_matrix.entries()) {
        if (j.every(x => moves.indexOf(x) > -1)) {
            win = { index: i, player: player }
            break
        }
    }
    return win;

}

// -------------------------------------------

const endGame = (win) => { //pass parameter later

    for(let i = 0; i<win_state_matrix[win].length; i++){
        // here I will put the stripe through / color etc... design for win or loss
        console.log("design")
    }

    for(let i = 0; i<sections.length; i++){
        sections[i].removeEventListener("click", checkSection, false)
    }

    //declare winner / loser
}

// -------------------------------------------

const minimax = (game_board, player) => {

    let store_availability = checkIfEmpty()
    if (checkIfWin(game_board, human_player)){
        return {score:-10}
    }

    else if (checkIfWin(game_board, ai_player)){
        return {score:+10}
    }

    else if (store_availability == 0){
        return {score:0}
    }

    let progress = []

    for(let i = 0; i<store_availability.length; i++){
        let single_progression = {}
        single_progression.index = game_board[store_availability[i]]
        game_board[store_availability[i]] = player //using it like a temp variable

        if (player == ai_player){
            let outcome = minimax(game_board, human_player)
            single_progression.score = outcome.score // to keep track of score to see if you are winning or losing
        }

        else if (player == human_player){
            let outcome = minimax(game_board, ai_player)
            single_progression.score = outcome.score
        }

        game_board[store_availability[i]] = single_progression.index
        progress.push(single_progression) //adding to the progress array
    }

    let best_index

    if (player == ai_player){
        let ultimate_score = -100000 //-Infinity

        for(let i = 0; i<progress.length; i++){
            
            if (progress[i].score > ultimate_score){
                ultimate_score = progress[i].score
                best_index = i
            }
        }
    }

    else if (player == human_player){
        let ultimate_score = 100000 //Infinity

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

const calculateBestMove = () => { //minimax will return the best position and this function will get the index of it
    
    return minimax(game_board, ai_player).index
}

// -------------------------------------------

const clickRestart = () => {
    document.location.reload(true) 
}

// -------------------------------------------

main()
//end