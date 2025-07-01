const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const checkPalindrome = () => {
  isInputEmpty();
}

const isInputEmpty = () => {
  return textInput.innerText === "" ? alert("Please input a value") : false;
}

checkButton.addEventListener("click", checkPalindrome)