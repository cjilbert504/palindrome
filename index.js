module.exports = Phrase;

// Reverses a string.
String.prototype.reverse = function reverse() {
    return Array.from(this).reverse().join("");
}

function Phrase(content) {
    this.content = content;

    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();
    }

    this.palindrome = function palindrome() {
        if (this.letters()) {
            return this.processedContent() === this.processedContent().reverse();
        } else {
            return false;
        }
    }

    this.letters = function letters() {
        const lettersRegEx = /[a-z]/gi;
        return (this.content.match(lettersRegEx) || []).join("");
    }
}


