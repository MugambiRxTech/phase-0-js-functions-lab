function calculateTax(amount) {
  return amount * 0.10;
}

// Example usage - calling the function:
console.log(calculateTax(100));
console.log(calculateTax(250));
console.log(calculateTax(49.99));

function convertToUpperCase(text) {
  return text.toUpperCase();
}

// Example usage - calling the function:
console.log(convertToUpperCase("hello"));
console.log(convertToUpperCase("javascript"));
console.log(convertToUpperCase("Hello World!"));

function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// Example usage - calling the function:
console.log(findMaximum(10, 20));
console.log(findMaximum(50, 25));
console.log(findMaximum(7, 7));

function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

// Example usage - calling the function:
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("level"));

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = originalPrice * (discountPercentage / 100);
  return originalPrice - discountAmount;
}

// Example usage - calling the function:
console.log(calculateDiscountedPrice(100, 20));
console.log(calculateDiscountedPrice(50, 10));
console.log(calculateDiscountedPrice(200, 25));



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };