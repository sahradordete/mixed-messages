// const messages = ["You'll be very lucky on ", "You are having ", "You should drink"];
// const messageComplement = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// let random = Math.floor(Math.random() * 5)
// let phrase = message + messageComplement[random] + ".";
// console.log(phrase);

const phrases = {
   
    messages: ["You'll be very lucky on ", "You are having ", "You should drink ", "Your lucky number today is ", "Perhaps you're focusing too much on ", "I can't help you, ", "You should start "],

    complements: {
        complement1: ["Monday", "Friday"],
        complement2: ["bad luck", "good luck"],
        complement3: ["a beer", "some coffee"],
        complement4: ["1", "7"], 
        complement5: ["spending", "saving"],
        complement6: ["I'm just a computer program.", "good luck!"],
        complement7: ["working out", "eating healthy"]
    },

    randomPhrase() {
        randomQuote = Math.floor(Math.random() * this.messages.length); // that's for the phrase array
        randomComplement = Math.floor(Math.random() * 1)
        switch (randomQuote) {
            case 0: 
                console.log(this.messages[randomQuote] + this.complements.complement1[randomComplement] + ".");
                break;
            case 1: 
                console.log(this.messages[randomQuote] + this.complements.complement2[randomComplement] + ".");
                break;
            case 2:
                console.log(this.messages[randomQuote] + this.complements.complement3[randomComplement] + ".");
                break;
            case 3: 
                console.log(this.messages[randomQuote] + this.complements.complement4[randomComplement] + ".");
                break;
            case 4:
                console.log(this.messages[randomQuote] + this.complements.complement5[randomComplement] + ".");
                break;
            case 5:
                console.log(this.messages[randomQuote] + this.complements.complement6[randomComplement]);
                break;
            case 6: 
                console.log(this.messages[randomQuote] + this.complements.complement7[randomComplement] + ".");
                break;
        }
    }
};

phrases.randomPhrase();