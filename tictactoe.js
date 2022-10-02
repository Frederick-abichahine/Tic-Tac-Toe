//  Tic-Tac-Toe Game
//  Frederick Abi Chahine

// ###################################
//           Main function
// ###################################

const main = () => {
    const sections = document.querySelectorAll(".section")

    for(let i = 0; i<sections.length; i++){
        sections[i].onclick = function(){tester(sections[i])};
    }
}

main()

// ###################################
//          Other functions
// ###################################

let tester = (x) => {
    if (x.id == "top_left"){
        x.style.backgroundColor = "red"
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