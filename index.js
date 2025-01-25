// Coding Steps:
//      For the final project you will be creating an automated version of the classic card 
//          game WAR! There are many versions of the game WAR. In this version there are 
//          only 2 players.
//      You do not need to do anything special when there is a tie in a round.
//      Think about how you would build this project and write your plan down. Consider 
//          classes such as: Card, Deck, Player, as well as what properties and methods 
//          they may include.
//      Four suits to represent the appearance (user interface - ui) for your cards
//          let cardSuits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
//          console.log("Card Suits Example:", cardSuits);

// The game itself will automatically play using console.log() to display turns, 
//      points, cards used, and the outcome of the game. No user input via prompts 
//      is required.


// INSTRUCTIONS!!
// ---------------------------------------------------------------------------------

// The completed project should, when executed, do the following:
// 
//      Deal 26 Cards to each Player from a Deck of 52 cards.
//      Iterate through the turns where each Player plays a Card.
//      The Player who played the higher card is awarded a point.
//      -Ties result in zero points for both Players.
//      After all cards have been played, display the score and declare the winner.

/*
    The following is extra credit (10pts)
        Write a Unit Test using Mocha and Chai for at least one of the functions 
            you write.
        Note Mocha/Chai: The Mocha/Chai framework recently removed Common JS 
            functionality, you will need to use these specific versions in order to 
            follow the video:

    chai: "^4.3.10"
    mocha: "^10.2.0"

    You can use this boiler plate project for your unit testing:
    Mocha/Chai Github Repository
*/

/**
 * Deck (Will need an array of 52 cards)
 *      Array for 52 cards
 *      Array for all ranks
 *      Array for Suits
 *      Array for values?
 *      Shuffle the decks
 *      pass cards to the players
 * 
 * Players (ability to access the deck)
 *      Score
 *      Hand
 * 
 * Game Logic 
 *      Store the cards
 *      Comparison between ranks
 *      
 * 
 */

// Deck Class
//  Needs a deck, rank, and suits

class Deck {
    constructor() {
        this.deck = []
        this.ranks = [
            `Ace`,
            `2`,
            `3`,
            `4`,
            `5`,
            `6`,
            `7`,
            `8`,
            `9`,
            `10`,
            `Jack`,
            `Queen`,
            `King`
        ]
        this.suits = [
            `Spades 🗡️`,
            `Hearts ❤️`,
            `Diamonds 💎`,
            `Clubs 🍀`
        ]
    }

    // Some way to create a deck, iterating through ranks and suits
    // push cards into this.deck
    createDeck() {
        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.ranks.length; j++) {
                let card = {
                    value: j + 1,
                    name: `${this.ranks[j]} of ${this.suits[i]}`
                };

                this.deck.push(card);
            }
        }
    }

    
    // Shuffle the deck
    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
     
            let j = Math.floor(Math.random() * (i + 1)); 
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        } 
    }
}


/**
 * Game Logic:
 * 
 *  Create a Deck, shuffle the deck, pass the deck to two players
 * 
 *  Logic for the game 
 *      Turn based, goes until no more cards in the deck.
 *      Draw 26 Cards
 *      Store cards in an array
 *      Compare ranks between two players' cards
 * 
 *  Players
 *      Create two players
 *          -name
 *          -score
 *          -hand
 *  */ 

class Game {
    constructor() {
        this.player1 = {
            name: `Player 1`,
            score: 0,
            hand: []
        }
        this.player2 = {
            name: `Player 2`,
            score: 0,
            hand: []
        }
    }

    /** Playing the game
     *      pass cards to players
     *      take turns according to how many cards they have
     *      award points by card value
     *      log winner
     */

    playGame() {
        //Instantiate a new deck, create a deck, and shuffle the deck
        const deck = new Deck
        deck.createDeck()
        deck.shuffleDeck()

        // Pass Cards to players
        while (deck.deck.length != 0) {

            this.player1.hand.push(deck.deck.shift());
            this.player2.hand.push(deck.deck.shift());


        }
        

        // Actually playing the game
        for (let i = 0; i < this.player1.hand.length; i++) {
            if (this.player1.hand[i].value > this.player2.hand[i].value) {
                this.player1.score ++
                console.log(`
                    ${this.player1.name} has the ${this.player1.hand[i].name}
                    ${this.player2.name} has the ${this.player2.hand[i].name}
                    ${this.player1.name} scores 1 point!
                    ${this.player1.name}'s Score: ${this.player1.score}, ${this.player2.name}'s Score: ${this.player2.score}
                `)
            } else if (this.player1.hand[i].value < this.player2.hand[i].value) {
                this.player2.score ++
                console.log(`
                    ${this.player1.name} has the ${this.player1.hand[i].name}
                    ${this.player2.name} has the ${this.player2.hand[i].name}
                    ${this.player2.name} scores 1 point!
                    ${this.player1.name}'s Score: ${this.player1.score}, ${this.player2.name}'s Score: ${this.player2.score}
                `)
            } else {
                console.log(`
                    ${this.player1.name} has the ${this.player1.hand[i].name}
                    ${this.player2.name} has the ${this.player2.hand[i].name}
                    ${this.player2.hand[i].value} and ${this.player1.hand[i].value} are tied!
                    ${this.player1.name} and ${this.player2.name} score 0 points.
                    ${this.player1.name}'s Score: ${this.player1.score}, ${this.player2.name}'s Score: ${this.player2.score}
                `)
            }
        }

        // Final Score winner
        if (this.player1.score > this.player2.score) {
            console.log(`
                ${this.player1.name} Wins!

                Final Score: ${this.player1.score}
                             ${this.player2.score}
            `)
        } else if (this.player2.score > this.player1.score) {
            console.log(`
                ${this.player2.name} Wins!

                Final Score: ${this.player1.score}
                             ${this.player2.score}
            `)
        } else {
            console.log(`
                It's a tie!

                Final Score: ${this.player1.score}
                             ${this.player2.score}
            `)
        }

    }
}

const game = new Game;

game.playGame()