//Tic-Tac-Toe Game - Frederick Abi Chahine

let click1
let click2
let click3
let click4
let click5
let click6
let click7
let click8
let click9
let sections

window.onload = () => {
    sections = document.getElementsByClassName("section")

    click1 = document.getElementById("top_left")
    click2 = document.getElementById("top_center")
    click3 = document.getElementById("top_right")

    click1.onclick = test
    click2.onclick = test2
    click3.onclick = test3
    
    // sections.onclick = test
    // for(let i = 0; i<sections.length; i++){
    //     sections[i].onclick = test(i)
    // }
}

let test = () => {
    click1.style.backgroundColor = "red"   
}
let test2 = () => {
    click2.style.backgroundColor = "blue"
}
let test3 = () => {
    click3.style.backgroundColor = "green"
}