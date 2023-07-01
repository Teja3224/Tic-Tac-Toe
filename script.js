const gameBoard = document.querySelector("#gameboard")

const infoDisplay = document.querySelector("#info")


const startCells = [
    "", "", "", "", "", "", "", "", ""
]


let go = "circle"
infoDisplay.textContent = "Circle goes first"


function createBoard () {
    startCells.forEach((cell , index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index
        cellElement.addEventListener('click',addGo)
        gameBoard.append(cellElement)
    })
}

createBoard()


function addGo(e){
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === "circle" ? "cross" : "circle"
    infoDisplay.textContent = "It is now" + " " +  go + "'s go."
    e.target.removeEventListener("click" , addGo)
    checkScore()
}

function checkScore() {
    const allsquares =  document.querySelectorAll(".square")
    const winning = [
        [0,1,2] , [3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]

    ]

    console.log(allsquares[4])
    winning.forEach(array => {
       const circleWins =  array.every(cell => allsquares[cell].firstChild?.classList.contains('circle'))

       if(circleWins) {
        infoDisplay.textContent = "Circle Wins"
        allsquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        return 
      }
    })

    winning.forEach(array => {
        const crosseWins =  array.every(cell => allsquares[cell].firstChild?.classList.contains('cross'))
 
        if(crosseWins) {
         infoDisplay.textContent = "Cross Wins"
         allsquares.forEach(square => square.replaceWith(square.cloneNode(true)))
         return 
       }
    })

}
