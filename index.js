// const gifts = ["teddy bear", "drone", "doll"]

// const wrapGift(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gift} and added a bow!`);
//     }
    
//     return gifts
// };

// const wrapGifts2(gifts) {
//     let i = 0; // the initialization moves OUTSIDE the body of the loop
//     while (i < gifts.length) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`)
//         i++ // the iteration moves INSIDE the body of the loop
//     }

//     return gifts
// }

function writeCards(names, event) {
    let cards = []
    for (let i = 0; i < names.length; i ++){
       cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }

    return cards
}

function countDown(number){
  while(number >= 0) {
      console.log(number)
      --number
  }
}