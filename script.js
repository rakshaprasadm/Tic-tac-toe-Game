let boxes            = document.querySelectorAll(".box")
let resetButton      = document.querySelector("#resetButton")
let newGameButton    = document.querySelector("#newGameButton")
let messageContainer = document.querySelector(".msg-container")
let message          = document.querySelector("#winner")

let playerTurWithO = true

const winningPatters = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (playerTurWithO) {
            box.innerText  = "O"
            playerTurWithO = false
        } else {
            box.innerText  = "X"
            playerTurWithO = true
        }
        box.disabled = true
        checkForPattern()
    })
})

const checkForPattern = () => {
    for (let pattern of winningPatters) {
        let positionOneVAlue   = boxes[pattern[0]].innerText
        let positionTwoVAlue   = boxes[pattern[1]].innerText
        let positionThreeVAlue = boxes[pattern[2]].innerText

        if (positionOneVAlue !="" && positionTwoVAlue !="" && positionThreeVAlue !="") {
            if (positionOneVAlue === positionTwoVAlue && positionTwoVAlue === positionThreeVAlue) {
                displayWinner(positionOneVAlue)
            }
        }
    }
}

const displayWinner = (winner) => {
    message.innerText = `The winner is ${winner}`
    messageContainer.classList.remove("hide")
    disableBoxes()
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled  = false
        box.innerText = ""
    }
}

const resetGame = () => {
    playerTurWithO = true
    enableBoxes()
    messageContainer.classList.add("hide")
}

newGameButton.addEventListener("click", resetGame)
resetButton.addEventListener("click", resetGame)