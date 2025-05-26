//Rjay Luis Acosta 1B

// Function to reverse a string using a simple loop
function reverseString(str) {
  var reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

// Prompt user for two words (with default prompt messages)
var word1 = prompt("Enter the first word:");
var word2 = prompt("Enter the second word:");

// Function to check palindrome and log results
function checkPalindrome(word) {
  console.log("Original string: " + word);
  var reversedWord = reverseString(word);
  console.log("Reversed string: " + reversedWord);
  var isPalindrome = (word === reversedWord);
  console.log("Is palindrome: " + isPalindrome);
  alert("Word: " + word + "\nReversed: " + reversedWord + "\nIs palindrome: " + isPalindrome);
}

// Check both words
checkPalindrome(word1);
checkPalindrome(word2);

