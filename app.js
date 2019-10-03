//get elements
let scoreDisplay = document.getElementById('scoreDisplay')
let playerPoints = document.getElementById('playerPoints')
let dealerPoints = document.getElementById('dealerPoints')
let hit = document.getElementById('hit')
let stand = document.getElementById('stand')
let dealer = document.getElementById('dealer')
let player = document.getElementById('player')
let body = document.getElementById('body')
let tryAgain = document.getElementById('tryAgain')

//some functions
check = () => {
    if (playerScore > 21) {
        playerPoints.innerHTML += ' BUST'
        hit.style.visibility = 'hidden'
        stand.style.visibility = 'hidden'
        tryAgain.style.visibility = "visible"
    }
    else if (playerScore == 21) {
        hit.style.visibility = 'hidden'
        stand.style.visibility = 'hidden'
        playerPoints.innerHTML += ' WIN'
        tryAgain.style.visibility = "visible"
    }
}

dealPlayer = () => {
    player.innerHTML += `${cards[0].name} <br>`
    playerScore += cards[0].value
    playerPoints.innerHTML = playerScore
    check()
    cards.shift()
}

dealDealer = () => {
    dealer.innerHTML += `${cards[0].name} <br>`
    dealerScore += cards[0].value
    dealerPoints.innerHTML = dealerScore
    cards.shift()
}

standFunc = () => {
    hit.style.visibility = 'hidden'
    stand.style.visibility = 'hidden'
    while (true) {
        dealDealer()
        if (dealerScore > 21) {
            dealerPoints.innerHTML += ' BUST'
            playerPoints.innerHTML += ' WIN'
            tryAgain.style.visibility = "visible"
            break
        }
        else if (dealerScore >= 17) {
            if (playerScore > dealerScore) {
                playerPoints.innerHTML += ' WIN'
                tryAgain.style.visibility = "visible"
                break
            }
            if (playerScore == dealerScore) {
                playerPoints.innerHTML += ' PUSH'
                tryAgain.style.visibility = "visible"
                break
            }
            if (playerScore < dealerScore) {
                playerPoints.innerHTML += ' LOSE'
                tryAgain.style.visibility = "visible"
                break
            }
        }
    }
}

hit.onclick = () => dealPlayer()
stand.onclick = () => standFunc()
tryAgain.onclick = () => location.reload();

// game start setup
let playerScore = 0
let dealerScore = 0

cards.sort( () => 0.5 - Math.random() )

dealPlayer()
dealPlayer()
dealDealer()