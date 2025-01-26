let expect = chai.expect;
let assert = chai.assert;

describe(`Card Game: War`, () => {
    describe(`#Game Array should infinitely scale to updated parameters`, () => {
        
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

            shuffleDeck() {
                for (let i = this.deck.length - 1; i > 0; i--) {
             
                    let j = Math.floor(Math.random() * (i + 1)); 
                    [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
                } 
            }
        }

        let deck = new Deck

        it(`#Should update suits to 7`, () => {

            deck.suits.push(
                `Picks`,
                `Tools`,
                `Friends`
            );

            console.log(deck.suits.length);

            expect(deck.suits.length).to.deep.equal(7);
        })

        it(`#Should update ranks to 15`, () => {

            deck.ranks.push(
                `Emperor`,
                `Priest`
            );

            console.log(deck.ranks.length)

            expect(deck.ranks.length).to.deep.equal(15);
        })

        it(`#Should update the deck.deck with 105 new cards based on the new information`, () => {

            deck.createDeck()

            console.log(deck.deck.length);

            expect(deck.deck.length).to.deep.equal(105);
            
        })
    });
});