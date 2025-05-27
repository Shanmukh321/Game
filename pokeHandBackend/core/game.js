import Pokemon from "../data/pokemon";
import User from "../core/user";
let presenStatus = {
    currPlay : "User1" || "User2",
    roundNumber : 1,
    numberOfPokemon : 3 || 6,
    stage : ["oddoreven","Hand","pokeMoves"]
}

//this function takes the odd or even inputs as well as the number as inputs and compares the odd or even choices and return winner.
function determinHandWinner(hand1, hand2, numhand1, numhand2){
    if(hand1 === determineOddorEven(numhand1,numhand2)){
        console.log("The winner for the hand is: ",hand1);
        return hand1;
    }
    else{
        console.log("The winner for the hand is:", hand2);
        return hand2;
    }
}
//this function returns the outcome of the cummulative sum hand game of the players.
function determineOddorEven(hand1, hand2){
    if((hand1 + hand2)%2 == 0){
        console.log("It is even");
        return even;
    }
    else{
        console.log("It is odd");
        return odd;
    }
}
//this function returns the move correspoing to the sum
function fetchMoves(hand1,hand2){
    const sum = hand1 + hand2;
    console.log(Pokemon.moveList[sum]);
    remain = action(Pokemon.moveList[sum])
    return remain;
}
//this will update the hp of the curr pokemon i think
function action(move){
    Pokemon.hp -= Pokemon.moveDmg(move);
    console.log(`Updating ${Pokemon.name}'s HP:`,Pokemon.hp)
    return Pokemon.hp;
}
//this will update the curr pokemon that is in the hand of the player
function switchPokemon(player){
    if(User.allKO){
        console.log("You dont have any pokemon left");
        return lose;
    }
    else{
        console.log("Pick a pokemon")
        User.currhand(player);
    }

}
//if pokemon hp === 0  and there is another pokemon that is available then call switch as per player
function KOstatus(player){
    if(Pokemon.hp === 0 && User.currhand(player+1)){
        console.log("Changing to the remaining pokemon");
        return switchPokemon(player+1);
    }
    if(User.pokemonLeft === 0){
        console.log("You dont have any pokemon left");
        return lose;
    }
}
