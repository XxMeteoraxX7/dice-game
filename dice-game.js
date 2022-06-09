function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        let doubleBet Math.floor(Math.random() * 6) + 1;
        alert('You have accumulated a total of ' + goldCoins + ' gold coins so far.\n\nYou rolled a ' + roll + '!');
        if (roll === 1) {
            alert('Game over, no more rolls!');
            break;
        }
        if (roll < 4 && doubleBet > 3) {
            prompt('You rolled a lucky roll!\n\nYou can choose to double or nothing waging the next roll will be greater than 3.\n\nEnter 1 to accept, or 0 to skip.');
            
            continue;
        }
        if (roll === 4 && goldCoins > 0) {
            alert('Sorry, unfortunately you have lost 1 gold coin!');
            goldCoins = goldCoins - 1;
            continue;
        }
        if (roll === 4) {
            continue;
        }
        alert('Congratulations, you win ' + roll + ' gold coins!')
        goldCoins += roll; 
    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}
