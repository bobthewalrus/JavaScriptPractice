var GAMES = prompt("How many quarters do you have?", 1);
var WINNING=prompt("How many coins would you like to leave with?",10000);

    for(var GAMES;GAMES>-1;GAMES--){
        if (GAMES===0){
            console.log("Thanks for playing, but you're broke. Goodbye.")
            break;
        }
        var WIN=(Math.trunc(Math.random() * 50))
        if(WIN===0){
            GAMES=GAMES+(Math.trunc(Math.random() * 100))+50;
            console.log("Holy shit you won. Now you have "+GAMES+" quarters.");
        }
        else{
            console.log("Dang you lost. You now only have "+GAMES+ " quarters.");
        }
        if(GAMES>WINNING){
            console.log("You've decided to take your winnings and leave");
            break;
        }
    }
