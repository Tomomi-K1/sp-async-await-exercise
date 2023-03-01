// 1.
async function getCard(){
    let res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/');
    let {data} = await axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)
    console.log(`${data.cards[0].value} of ${data.cards[0].suit}`)
    return data
}

// getCard()

// 2.
async function getTwoCards(){
    let res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/');
    let {data:card1} = await axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)
    let {data:card2} = await axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)
    console.log(`card1: ${card1.cards[0].value} of ${card1.cards[0].suit}`)
    console.log(`card2: ${card2.cards[0].value} of ${card2.cards[0].suit}`)
}

// 3.
let deckId = null;
$requestBtn = $('#requestbtn');
async function getNewDeck(){
    let res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/');
    deckId = res.data.deck_id;
    console.log('getnewdeck');
}

async function getACardandShow(){
    let {data} = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    let imgUrl=data.cards[0].image
    let positionX = Math.random() * 40-20;
    let positionY = Math.random() * 40-20;
    let rotate = Math.random() * 90-45;
    $('.card-display').append($('<img>', {
            src: imgUrl,
            css:{
                transform: `translate(${positionX}px, ${positionY}px) rotate(${rotate}deg)`
            }
        })
    
    )

    return data
}

$(function(){
    
    getNewDeck();
    $requestBtn.show()
    
    $requestBtn.click(async function(e){
        let data =await getACardandShow()
        
        if (data.remaining ==0){
            $requestBtn.hide()
        }
    })

})



