const testPalindrome = (string) => {
  const processedString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return processedString === processedString.split("").reverse().join("");
}

document.getElementById('check-btn').addEventListener('click', function() {
  const inputText = document.getElementById('text-input').value;
  const resultElement = document.getElementById('result');

  if (!inputText) {
    resultElement.style.display = "none"
    alert('Please input a value');
    return;
  }

  if (testPalindrome(inputText)) {
    resultElement.textContent = `${inputText} is a palindrome`;
    resultElement.style.display = "block"
  } else {
    resultElement.textContent = `${inputText} is not a palindrome`;
  }
});
