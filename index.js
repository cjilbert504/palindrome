module.exports = Phrase;

// Reverses a string.
String.prototype.reverse = function reverse() {
    return Array.from(this).reverse().join("");
}

function Phrase(content) {
    this.content = content;

    this.processedContent = function processedContent() {
        return this.content.toLowerCase();
    }

    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    }
}

