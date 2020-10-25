alert("Level 1. You have 10 attempts. Guess 1-10")

var guess = prompt("What is your guess?");

for (i = 0; i < 9; i++) {
    var answer = 3;
    if (answer == guess) {
        alert("Congratulations, You guessed correctly");
        break;
    } else {
        guess = prompt("Wrong, Please try again");
    }
}



alert("Level 2. You have 6 attempts. Guess 11-20")

var guess = prompt("What is your guess?");

for (i = 0; i < 5; i++) {
    var answer = 16;
    if (answer == guess) {
        alert("Congratulations, You guessed correctly");
        break;
    } else {
        guess = prompt("Wrong, Please try again");
    }
}


alert("Level 3. You have 3 attempts. Guess 21-30")

var guess = prompt("What is your guess?");

for (i = 0; i < 2; i++) {
    var answer = 29;
    if (answer == guess) {
        alert("Congratulations, You guessed correctly");
        break;
    } else {
        guess = prompt("Wrong, Please try again");
    }
}

