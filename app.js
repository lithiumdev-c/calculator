// variables
let memory = 0,
  lastOper = "";

let display = document.querySelector(".display");
let buttons = document.querySelector(".buttons");
let plusBtn = document.querySelector(".plus");
let minusBtn = document.querySelector(".minus");
let multiplyBtn = document.querySelector(".multiply");
let divideBtn = document.querySelector(".divide");
let clearBtn = document.querySelector(".clear");
let radicalBtn = document.querySelector(".radical");
let squarBtn = document.querySelector(".squar");
let backBtn = document.querySelector(".back");
let equalBtn = document.querySelector(".equal");

buttons.addEventListener("click", inputNum);
function inputNum(event) {
  if (display.textContent.length > 15) {
    return;
  }
  let data = event.target.dataset.num;
  if (data) {
    if (data === ".") {
      if (!display.textContent.includes(".")) {
        display.textContent += ".";
      }
    } else {
      display.textContent += data;
      if (!display.textContent.includes(".")) {
        display.textContent = Number(display.textContent);
      }
    }
  }
}

clearBtn.addEventListener("click", clear);
function clear() {
  display.textContent = 0;
  memory = 0;
  lastOper = "";
}

plusBtn.addEventListener("click", plus);
function plus() {
  lastOper = "plus";
  memory = Number(display.textContent);
  display.textContent = 0;
}

minusBtn.addEventListener("click", minus);
function minus() {
  lastOper = "minus";
  memory = Number(display.textContent);
  display.textContent = 0;
}

multiplyBtn.addEventListener("click", multiply);
function multiply() {
  lastOper = "multiply";
  memory = Number(display.textContent);
  display.textContent = 0;
}

divideBtn.addEventListener("click", divide);
function divide() {
  lastOper = "divide";
  memory = Number(display.textContent);
  display.textContent = 0;
}

radicalBtn.addEventListener("click", radical);
function radical() {
  display.textContent = Math.sqrt(Number(display.textContent));
  lastOper = "";
}

squarBtn.addEventListener("click", squar);
function squar() {
  display.textContent **= 2;
  lastOper = "";
}

backBtn.addEventListener("click", back);
function back() {
  // display.textContent **= 2;
  // lastOper = "";
  if (display.textContent.length == 1) {
    display.textContent = 0;
  } else {
    display.textContent = display.textContent.slice(
      0,
      display.textContent.length - 1
    );
  }
}

equalBtn.addEventListener("click", equal);
function equal() {
  if (lastOper !== "") {
    let temp = Number(display.textContent);
    if (lastOper == "plus") {
      display.textContent = memory + temp;
    } else if (lastOper == "minus") {
      display.textContent = memory - temp;
    } else if (lastOper == "multiply") {
      display.textContent = memory * temp;
    } else if (lastOper == "divide") {
      display.textContent = memory / temp;
    }
    lastOper = "";
  }
}
