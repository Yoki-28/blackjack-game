const contentElm = document.querySelector('#content-el');
const cardElm = document.querySelector('#card-el');
const sumElm = document.querySelector('#sum-el');
const beginBtn = document.querySelector('#begin-bt');

const cardValues = [2,3,4,5,6,7,8,9,10,10,10,10,11];
let disp_cards = [];

//Function to draw random card from the deck
function getRandomCard()
{
    return cardValues[Math.trunc(Math.random()*cardValues.length)];
}

//Function to draw new card from the deck 
function addCard()
{
    let card = getRandomCard();
    disp_cards.push(card);
    cardElm.innerHTML = "Cards: " + disp_cards.join(" ");
}

function resetGame() {
    disp_cards = [];
    beginBtn.innerHTML = "Start New Game";
}

beginBtn.addEventListener('click',function()
{
    if(disp_cards.length === 0)
    {   //Drawing first two card from the deck
        addCard();
        addCard();
    }
    else
    {   //Drawing a new card from the deck
        addCard();
    }
    
    //Displays the sum of the card value
    let ans = 0;
    for(let i=0;i<disp_cards.length;i++)
    {
        ans += disp_cards[i];
    }
    sumElm.innerHTML = "Sum : " + ans;

    let message = "";
    if(ans < 21)
    {
        cardElm.classList.remove('hidden');
        sumElm.classList.remove('hidden');
        beginBtn.innerHTML = "NEW CARD";
        message = "Do you want to draw a new card?";
    }
    else if(ans === 21)
    {   //Reseting the game
        resetGame();
        message = "You've got a Blackjack!"
    }
    else
    {   //Reseting the game
        resetGame();
        message = "You're out of the game!";
    }
    contentElm.innerHTML = message;
})