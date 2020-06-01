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
        return this.processedContent() === this.processedContent().reverse();
    }

    this.letters = function letters() {
        return (this.content.match(/[a-z]/gi) || []).join("");
    }
}


