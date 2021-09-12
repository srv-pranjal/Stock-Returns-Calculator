const inputs = document.querySelectorAll(".input");
const outputMessage = document.querySelector("#output");
const formID = document.querySelector("#form");

let isUserInLoss = false;
function calculateProfitOrLoss() {
  const initialPrice = Number(inputs[0].value);
  const quantity = Number(inputs[1].value);
  const currentPrice = Number(inputs[2].value);
  const profitOrLoss = (currentPrice - initialPrice) * quantity;
  if (profitOrLoss < 0) {
    isUserInLoss = true;
    profitOrLoss = 0 - profitOrLoss;
  }
  const profitOrLossPercentage =
    (profitOrLoss / (initialPrice * quantity)) * 100;
  return [profitOrLoss, profitOrLossPercentage];
}

function formSubmitHandler(e) {
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
      outputMessage.innerText = `Sorry to say but you are in a loss of ₹${profitOrLoss} bearing a loss percentage of ${profitOrLossPercentage}%`;
    } else {
      outputMessage.innerText = `Wohooo!! You are in a total profit of ₹${profitOrLoss} bearing a profit percentage of ${profitOrLossPercentage}%`;
    }
  }
}

formID.addEventListener("submit", formSubmitHandler);
