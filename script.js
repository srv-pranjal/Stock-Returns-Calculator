const inputs = document.querySelectorAll(".input");
const outputMessage = document.querySelector("#output");
const formID = document.querySelector("#form");
const sadImg = document.querySelector("#sadimg");
const happyImg = document.querySelector("#happyimg");

let isUserInLoss = false;
function calculateProfitOrLoss() {
  isUserInLoss = false;
  const initialPrice = Number(inputs[0].value);
  const quantity = Number(inputs[1].value);
  const currentPrice = Number(inputs[2].value);
  let profitOrLoss = (currentPrice - initialPrice) * quantity;
  if (profitOrLoss < 0) {
    isUserInLoss = true;
    profitOrLoss = 0 - profitOrLoss;
  }
  const profitOrLossPercentage =
    (profitOrLoss / (initialPrice * quantity)) * 100;
  return [profitOrLoss, profitOrLossPercentage];
}

function formSubmitHandler(e) {
  sadImg.style.display = "none";
  happyImg.style.display = "none";
  e.preventDefault();
  let [profitOrLoss, profitOrLossPercentage] = calculateProfitOrLoss();
  if (!Number.isInteger(profitOrLoss)) {
    profitOrLoss = profitOrLoss.toFixed(2);
  }
  if (!Number.isInteger(profitOrLossPercentage)) {
    profitOrLossPercentage = profitOrLossPercentage.toFixed(2);
  }
  if (profitOrLoss === 0) {
    outputMessage.innerText = "You don't have any profit or loss yet";
  } else {
    if (isUserInLoss) {
      outputMessage.innerText = `Sorry to say but you are in a loss of ₹${profitOrLoss} bearing a loss percentage of ${profitOrLossPercentage}% 😞`;
      if (profitOrLossPercentage > 50) sadImg.style.display = "block";
    } else {
      outputMessage.innerText = `Wohooo!!🥳🥳 You are in a total profit of ₹${profitOrLoss} bearing a profit percentage of ${profitOrLossPercentage}%`;
      if (profitOrLossPercentage > 50) happyImg.style.display = "block";
    }
  }
}

formID.addEventListener("submit", formSubmitHandler);
