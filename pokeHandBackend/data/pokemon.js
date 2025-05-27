let Pokemon = {
    name : ["charmander", "pikachu" , "squirtle"],
    hp : 100,
    type : ["fire", "electric", "water"],
    NoOfMoves : [0,2,4,6,8,10,12], // let this be conidered dynamic cuz not all the pokemon have 12 length move list, we will furthur look into this
    status : ["burn","poisoned","sleep","paralyzed"], // will be updated after connecting from the api
    moveList : ["thunderbolt","flamecharge"], // will be dynamic and be based on the pokemon in the hand or currently in the play
    moveDmg : {"thunderbolt" : 10,"flamecharge" : 25},
}

export default Pokemon;