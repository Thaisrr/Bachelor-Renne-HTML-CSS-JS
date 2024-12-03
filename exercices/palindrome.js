function isPalindrome(phrase) {
    const cleanPhrase = phrase.toLowerCase().split(' ').join('');
    return cleanPhrase === cleanPhrase.split('').reverse().join('');
}

// Elu par cette crapule

console.log(isPalindrome('Elu par cette crapule') ? `C'est un palindrome` : `Ce n'est pas un palindrome`);
console.log(isPalindrome('Kayak') ? `C'est un palindrome` : `Ce n'est pas un palindrome`);
console.log(isPalindrome('toto') ? `C'est un palindrome` : `Ce n'est pas un palindrome`);