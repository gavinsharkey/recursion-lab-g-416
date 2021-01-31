// Code your solution here!

function printString(string) {
  console.log(string[0]);
  if (string.length > 1) {
    printString(string.substring(1, string.length))
  }
}

function reverseString(string) {
  if (string.length === 1) {
    return string;
  } else {
    return string[string.length - 1] + reverseString(string.substring(0, string.length - 1))
  }
}

function isPalindrome(string) {
  if (string.length === 1) {
    return true;
  } else if (string[0] === string[string.length - 1]) {
    return isPalindrome(string.substring(1, string.length - 1))
  }
  
  return false;
}

console.log(isPalindrome('tacocat'))


